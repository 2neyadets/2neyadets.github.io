import api from 'src/api'
import { i18n } from 'src/boot/i18n'
import {
  communicationSchemeClassic,
  isAction,
  isHardPromise,
  isPromiseAgreement,
  isSoftPromise,
  smsScheme,
  emailScheme
} from 'src/utils/mappers'
import { date } from 'quasar'

const { addToDate, subtractFromDate, formatDate, extractDate, getDateDiff, adjustDate } = date
const today = new Date()

const initialForm = () => ({
  action: 'other',
  clientId: null,
  productId: null,
  dealId: null,
  status: 'blank',
  result: 'blank',
  comment: '',
  callId: null,
  contactedAt: null,
  updatedAt: null,
})

const initialSMSForm = () => ({
  action: 'sendingSms',
  clientId: null,
  productId: null,
  dealId: null,
  status: 'smsToClient',
  result: 'blank',
  comment: null,
  channel: {
    phone: {
      variant: 'sms',
      number: null
    }
  },
  contactedAt: null
})

const initialEmailForm = () => ({
  action: 'sendingEmail',
  clientId: null,
  productId: null,
  dealId: null,
  status: 'emailToClient',
  result: 'blank',
  comment: null,
  channel: {
    email: {
      variant: 'email',
      address: null
    }
  },
  contactedAt: null
})

export default {
  name: 'CommunicationController',
  data () {
    return {
      today,
      currentForm: 'result',
      start: false,
      tomorrow: addToDate(today, { days: 1 }),
      future: addToDate(today, { days: 4 }),
      scheme: null,
      form: null,
      smsForm: null,
      emailForm: null,
      smsFormForRestoreAccess: null,
      loading: {
        saveCommunication: false,
        sendSMS: false,
        sendEmail: false,
        schedule: false
      },
      edited: null,
      calculated: 0,
      schedule: [],
      date: today,
      timeout: null,
      timer: null,
      paymentSystemSelect: null
    }
  },
  created () {
    this.$nextTick(function () {
      this.reset()
    })
  },
  computed: {
    needCalc () {
      return isSoftPromise(this.form.result) || isHardPromise(this.form.result) || isAction(this.form.result)
    },
    statusOptions () {
      return Object.keys(this.scheme).map(item => ({
        value: item,
        label: i18n.t('communications.status.' + item),
        disable: this.needDisableStatus(item)
      }))
    },
    resultOptions () {
      return (this.scheme[this.form.status] && Array.from(this.scheme[this.form.status]).map(item => ({
        value: item,
        label: item === 'other' && (this.$operatorWB.user.isUserHaveRoles(['operatorSoft', 'supervisorSoft', 'leaderSoft', 'operatorCallCenter', 'supervisorCallCenter', 'leaderCallCenter']))
          ? i18n.t('communications.result.consultation')
          : i18n.t('communications.result.' + item),
        disable: this.disablePromise(item)
      }))) || []
    },
    resultHasOptions () {
      return !!this.scheme[this.form.status]
    },
    currentSMSScheme () {
      return smsScheme(this.$operatorWB.user.permissionsObj)
    },
    currentEmailScheme () {
      return emailScheme(this.$operatorWB.user.permissionsObj)
    },
    smsOptions () {
      return this.currentSMSScheme.map(item => ({
        value: item,
        label: i18n.t('communications.sms.templates.' + item),
      }))
    },
    emailOptions () {
      return this.currentEmailScheme.map(item => ({
        value: item,
        label: i18n.t('communications.email.templates.' + item),
      }))
    },
    futureDate () {
      let d = this.future
      if (this.prolongedPromise && this.operatorIsOwnerLastPromise) {
        const todayMinusSix = subtractFromDate(today, { days: 6 })
        const firstDayOfPromise = this.isSecondPromise ? this.firstPromiseStartDate : this.lastPromiseExpiredTodayStartDate
        const startDate = Date.parse(firstDayOfPromise) < Date.parse(todayMinusSix) ? today : firstDayOfPromise
        const finishDate = addToDate(startDate, { days: 6 })
        const diff = date.getDateDiff(finishDate, today, 'days')
        d = (diff < 4) ? finishDate : this.future
      }
      d = formatDate(adjustDate(d, {
        hours: 0,
        seconds: 0,
        minutes: 0,
        milliseconds: 0
      }), 'YYYY-MM-DDTHH:mm:ss.SSSZ')
      return d
    },
    futureRenewal () {
      const days = this.form.renewal ? this.form.renewal.daysDuration : 1
      const res = formatDate(addToDate(new Date(), { days: days }), 'DD.MM.YYYY')
      return res
    }
  },
  methods: {
    startTimeout () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timeout = 20
      this.timer = setInterval(function () {
        if (this.timeout > 0) {
          this.timeout -= 1
        }
      }.bind(this), 1000)
    },
    stopTimeout () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = null
      this.$nextTick(function () {
        this.timeout = i18n.t('communications.timeout.message')
      })
    },
    clearTimeout () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = null
      this.timeout = null
    },
    needDisableStatus (status) {
      let isDisable = false

      if (status === 'creditHolidays') {
        const issueDate = extractDate(this.$operatorWB.loans.currentPdlLoan && this.$operatorWB.loans.currentPdlLoan.issueDate, 'YYYY-MM-DDTHH:mm:ssZ')
        isDisable = issueDate >= new Date(2020, 3, 3)
        if (this.$operatorWB.loans.currentLoan && this.$operatorWB.loans.currentLoan.product === 'pos') isDisable = true
      }

      return isDisable
    },
    needDisableResult (result) {
      let ret = false
      if (!this.$operatorWB.loans.currentLoan) {
        ret = true
      }
      if (this.$operatorWB.loans.currentActiveAgreement &&
        (this.$operatorWB.loans.currentActiveAgreement.status === 'paid' || this.$operatorWB.loans.currentActiveAgreement.status === 'signed') &&
        Math.round(Date.now()) <= Date.parse(this.$operatorWB.loans.currentActiveAgreement.expiredAt)) {
        ret = true
      }

      if (isSoftPromise(result) && this.$operatorWB.user.operatorIsOwnerLastPromise) {
        if (this.$operatorWB.loans.lastPromiseNotExpired && this.$operatorWB.loans.lastPromiseExpiredToday) {
          if (this.$operatorWB.loans.isSecondPromise) {
            ret = false
          }
        }
        if (!this.$operatorWB.user.operatorCanAddPromise) {
          ret = true
        }
        if (this.communicationEdit && this.$operatorWB.loans.isSecondPromise) {
          ret = true
        }
      } else {
        if (isAction(result) && this.$operatorWB.loans.lastRenewal && this.$operatorWB.loans.lastRenewalNotExpired) {
          ret = true
        }
        if (isSoftPromise(result) && this.$operatorWB.loans.lastPromise && this.$operatorWB.loans.lastPromiseNotExpired) {
          ret = true
        }
      }

      if ((isPromiseAgreement(result) && !this.$operatorWB.loans.lastPromiseNotExpired) || isAction(result)) {
        const { currentActiveAgreement } = this.$operatorWB.loans
        ret = !!(currentActiveAgreement &&
          (currentActiveAgreement.status === 'paid' || currentActiveAgreement.status === 'signed') &&
          Math.round(Date.now()) <= Date.parse(currentActiveAgreement.expiredAt))
      }

      if ((result === 'renewal' || result === 'promiseOfRenewal') && this.$operatorWB.clients.currentClient.restrictions.renewalDays === 0) {
        ret = true
      }

      if (result === 'amnesty' && (!this.$operatorWB.loans.currentPdlLoan ||
        this.$operatorWB.loans.currentPdlLoan.status.code !== 6 ||
        this.$operatorWB.loans.currentPdlLoan.current.delay < 100)) {
        ret = true
      }

      if (result === 'jobLoss' || result === 'incomeDecline' || result === 'sickLeave' || result === 'creditHolidays') ret = false

      return ret
    },
    async save (applicationDetails = undefined) {
      const data = {
        ...this.form,
        callId: (this.$operatorWB.calls.lastCall && this.$operatorWB.calls.lastCall.client_id) === this.$operatorWB.clients.current ? this.$operatorWB.calls.lastCall.call_id : null,
        clientId: this.form.clientId || this.$operatorWB.clients.current,
        productId: this.form.productId || this.$operatorWB.loans.current,
        dealId: (!this.$operatorWB.loans.current || this.$operatorWB.loans.current > 0) ? null : this.$operatorWB.loans.currentDealId,
        action: this.form.action || 'other',
        channel: this.form.channel || null,
        contactedAt: formatDate(new Date(), 'YYYY-MM-DDTHH:mm:ss.SSSZ'),
      }
      this.doSave(data, applicationDetails)
    },
    async doSave (data, applicationDetails) {
      const isUserUnder = this.$operatorWB.user.isUserHaveRoles(['operatorUnderwriting', 'supervisorUnderwriting', 'leaderUnderwriting'])
      // eslint-disable-next-line no-prototype-builtins
      if (isUserUnder && data.hasOwnProperty('loanId')) delete data.loanId
      let res = null

      this.loading.saveCommunication = true
      if (data.id) {
        res = await api.crm.editCommunication(data)
      } else {
        await api.crm.addCommunication(data, this)
      }
      this.loading.saveCommunication = false

      if (res && res.data) {
        this.reset()
        this.$operatorWB.layout.currentCard.isEditing = false
        this.edited = null
        if (this.$operatorWB.clients.current) {
          this.$operatorWB.clients.getCommunications(this.$operatorWB.clients.current)
        }
        if (this.$operatorWB.loans.current && !isUserUnder) {
          this.$operatorWB.loans.getPromises({ productId: this.$operatorWB.loans.current })
          if (isAction(data.result)) setTimeout(() => this.$operatorWB.loans.getAgreements({ productId: this.$operatorWB.loans.current }), 500)
        }
        this.start = false

        const message = data.id ? i18n.t('communications.notify.communicationSaved') : i18n.t('communications.notify.communicationAdded')
        this.$operatorWB.messages.show({
          message,
          color: 'positive',
          icon: 'done',
          position: 'bottom',
        })
        if (this.$operatorWB.loans.current) this.$operatorWB.loans.getData(this.$operatorWB.loans.current)
      }
      if (res && (res.errors || res.error)) {
        console.error('Communication save error', (res.errors || res.error))
        this.start = false
      }
    },
    async getSchedule (months) {
      if (!this.form.installment) return
      this.loading.schedule = true
      const amount = parseFloat(
        (this.form.installment.debtAmount - this.form.installment.primaryPayment).toFixed(2)
      )

      const data = {
        debtAmount: amount < 1 ? 1 : amount,
        installmentPeriod: months
      }
      const schedule = await api.crm.getSchedule(data)
      this.schedule = schedule.payments
      this.loading.schedule = false
    },

    calculatePromisedAmount (value) {
      let amount = parseFloat(value || 0)
      const debt = parseFloat((this.$operatorWB.loans.currentLoanDebtForDate || 0).toFixed(2))
      const interest = parseFloat((this.$operatorWB.loans.currentLoanInterestForDate || 0).toFixed(2))
      let part = 0

      if (isSoftPromise(this.form.result) || isHardPromise(this.form.result)) {
        part = parseFloat((this.$operatorWB.loans.currentLoanDebtForDate * 0.25).toFixed(2))
        if (amount < part) {
          amount = part
        }
      }

      if (this.form.result.match(/(promiseToRepayInFull)/)) {
        amount = debt
      }

      if (this.form.result === 'promiseOfInstallment') {
        part = parseFloat((this.$operatorWB.loans.currentLoanDebtForDate * 0.2).toFixed(2))
        if (amount < part) {
          amount = part
        }
      }

      if (this.form.result === 'promiseOfRenewal') {
        amount = interest
      }

      return amount > 0 ? parseFloat(amount.toFixed(2)) : 0
    },

    calculatePrimaryPayment (value) {
      const debt = parseFloat(this.$operatorWB.loans.currentLoanDebt.toFixed(2))
      const part = parseFloat((debt * 0.2).toFixed(2))
      let amount = parseFloat(value.toFixed(2) || 0)

      if (amount < part) {
        amount = part
      }

      if (amount > debt) {
        amount = debt
      }

      return amount > 0 ? parseFloat(amount.toFixed(2)) : null
    },

    disablePromise (result) {
      let ret = false
      if (isSoftPromise(result) || isAction(result)) {
        ret = this.needDisableResult(result)
      }
      if (result === 'installment') {
        if (!ret) {
          ret = !this.$operatorWB.loans.currentLoan || this.$operatorWB.loans.currentDelay < 41
        }
      }
      return ret
    },
    reset () {
      this.updateCommunicationScheme()
      this.form = Object.assign((this.$operatorWB.layout.isApplicationCard ? { reason: null } : {}), initialForm())
      this.smsForm = Object.assign({}, initialSMSForm())
      this.emailForm = Object.assign({}, initialEmailForm())
      if (this.$operatorWB.user.isUserHaveRoles(['operatorHard', 'supervisorHard', 'leaderHard'])) {
        this.future = addToDate(today, { days: 10 })
      }
    },
    setCurrent () {
      const form = this.form
      form.status = form.result = 'blank'
      const current = {
        clientId: this.$operatorWB.clients.current,
        productId: this.$operatorWB.loans.current,
        dealId: (!this.$operatorWB.loans.current || this.$operatorWB.loans.current > 0) ? null : this.$operatorWB.loans.currentDealId,
      }
      this.form = Object.assign({}, form, current)
    },
    async updateForm () {
      const form = this.form

      if (isSoftPromise(form.result) || isHardPromise(form.result)) {
        const amount = form.promise ? form.promise.promisedAmount : 0
        const promise = {
          type: form.result,
          promisedAt: formatDate(new Date(this.date), 'YYYY-MM-DDTHH:mm:ss.SSSZ'),
          promisedAmount: this.calculatePromisedAmount(amount)
        }
        this.form = { ...form, ...{ promise } }
      } else {
        delete this.form.promise
      }

      if (form.result === 'installment') {
        const payment = form.installment ? form.installment.primaryPayment : this.calculatePrimaryPayment(0)
        const period = form.installment ? form.installment.installmentPeriod : 1
        const installment = {
          primaryPayment: payment,
          debtAmount: this.$operatorWB.loans.currentLoanDebt,
          installmentPeriod: period,
        }
        this.form = { ...form, ...{ installment } }
      } else {
        delete this.form.installment
      }

      if (form.result === 'renewal') {
        const days = form.renewal ? form.renewal.daysDuration : 1
        const renewal = { daysDuration: days }
        this.form = { ...form, ...{ renewal } }
      } else {
        delete this.form.renewal
      }

      if (form.result === 'amnesty') {
        const amnesty = await this.$operatorWB.clients.getCalculationOfAmnesty({
          type: 'rate',
          amount: 30,
          clientId: this.$operatorWB.clients.current
        })
        this.form = { ...form, ...{ amnesty } }
      } else {
        delete this.form.amnesty
      }

      if (form.result === 'jobLoss' || form.result === 'incomeDecline' || form.result === 'sickLeave' || form.result === 'creditHolidays') {
        const todayPlus6Month = addToDate(new Date(), { month: 6 }),
          maxDate = new Date(2021, 2, 30),
          creditHolidays = {
            startDate: formatDate(new Date(), 'YYYY-MM-DD'),
            expirationDate: formatDate(todayPlus6Month > maxDate ? maxDate : todayPlus6Month, 'YYYY-MM-DD'),
          }
        this.form = { ...form, ...{ creditHolidays } }
      } else {
        delete this.form.creditHolidays
      }
    },
    updateCommunicationScheme () {
      this.scheme = communicationSchemeClassic(this.$operatorWB.user.permissionsObj)
    }
  },
  watch: {
    timeout (v) {
      if (v === 0) {
        this.stopTimeout()
      }
    },
    date () {
      this.updateForm()
    },
    edited (v) {
      const form = this.form
      if (v) {
        this.form = Object.assign({}, form, v)
      } else {
        this.form = Object.assign({}, initialForm())
      }
    },
    'form.status' (v) {
      if (this.edited && v === 'contactWithClient') {
        this.form.result = this.edited.result
      } else {
        if (this.$operatorWB.layout.isApplicationCard) {
          this.form.result = this.resultOptions[0].value
        } else {
          this.form.result = (
            this.resultHasOptions &&
            this.resultOptions[(v === 'contactWithClient' || v === 'creditHolidays') ? this.resultOptions.length - 1 : 0].value) || null
        }
      }
    },
    'form.result' (v) {
      this.form.comment = ''
      if (isSoftPromise(v) || isHardPromise(v) || isAction(v)) {
        this.$nextTick(function () {
          this.updateForm()
        })
      }
      if (!isSoftPromise(v) || !isHardPromise(v)) {
        delete this.form.promise
      }
      if (!isAction(v)) {
        delete this.form.installment
        delete this.form.renewal
        delete this.form.amnesty
        delete this.form.creditHolidays
      }
      if (v) {
        if (this.$operatorWB.layout.isApplicationCard) {
          this.form.reason = null
        }
      } else {
        this.form.result = null
      }
    },
    'form.renewal.daysDuration' (v) {
      if (v) {
        if (v < 1) {
          v = 1
        } else if (v > this.$operatorWB.clients.currentClient.restrictions.renewalDays) {
          v = this.$operatorWB.clients.currentClient.restrictions.renewalDays
        }
        this.$nextTick(function () {
          this.form.renewal.daysDuration = v
        })
      }
    },
    'form.promise.promisedAmount' (v) {
      if (v) {
        const amount = this.calculatePromisedAmount(v)
        this.$nextTick(function () {
          this.form.promise.promisedAmount = amount
        })
      }
    },
    'form.promise.promisedAt' (v) {
      if (v) {
        const amount = this.calculatePromisedAmount(null)
        const delay = this.$operatorWB.loans.currentDelay
        const diff = getDateDiff(this.form.promise.promisedAt, today, 'days')
        if (this.$operatorWB.user.isUserHaveRoles(['operatorSoft', 'supervisorSoft', 'leaderSoft']) && diff + delay >= (this.$operatorWB.loans.currentLoan.product === 'pos' ? 61 : 41)) {
          this.$operatorWB.messages.show({
            position: 'right',
            message: i18n.t('communications.notify.isHardPromise')
          })
          this.$nextTick(function () {
            this.form.promise.promisedAt = today
          })
        } else {
          this.$nextTick(function () {
            this.form.promise.promisedAmount = amount
            this.calculated = this.form.result === 'promiseOfRenewal'
              ? this.$operatorWB.loans.currentLoanInterestForDate
              : this.$operatorWB.loans.currentLoanDebtForDate
          })
        }
      }
    }
  },
}
