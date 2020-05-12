import api from 'src/api'
import { getShortDate } from 'src/utils/helpers'
import { sortBy, orderBy } from 'lodash'
import { date } from 'quasar'

const { formatDate } = date
const today = new Date()

export default {
  name: 'LoansController',
  data () {
    return {
      list: [],
      loading: false,
      current: null,
    }
  },
  computed: {
    currentLoan () {
      return this.list.find(item => Number(item.id) === Number(this.current))
    },
    currentPdlLoan () {
      const arr = this.list.filter(loan => loan.clientId === this.$operatorWB.clients.current)
      return arr.find(loan => loan.product === 'pdl')
    },
    currentDealId () {
      return (this.currentLoan &&
        this.currentLoan.deals &&
        this.currentLoan.deals.length &&
        this.currentLoan.deals.find(deal => deal.status === 'active') &&
        this.currentLoan.deals.find(deal => deal.status === 'active').id) || null
    },
    currentLoanDebt () {
      const loan = this.currentLoan
      return loan && loan.current.total
    },
    currentLoanInterest () {
      const loan = this.currentLoan
      return loan && loan.current.interests
    },
    currentLoanDebtForDate () {
      const loan = this.$operatorWB.loans.currentLoan
      if (!this.$operatorWB.communication.form.promise) return false
      const accruals = loan.accruals && loan.accruals.find(item => {
        return getShortDate(item.date) === getShortDate(this.$operatorWB.communication.form.promise.promisedAt)
      })
      const future = loan.future && loan.future.find(item => {
        return getShortDate(item.date) === getShortDate(this.$operatorWB.communication.form.promise.promisedAt)
      })
      return future ? future.sum_total : accruals ? accruals.sum_total : this.$operatorWB.loans.currentLoanDebt
    },
    currentLoanInterestForDate () {
      const loan = this.$operatorWB.loans.currentLoan
      const { promise, renewal } = this.$operatorWB.communication.form
      if (!(promise || renewal)) return false
      const promised = this.$operatorWB.communication.form.promise && this.$operatorWB.communication.form.promise.promisedAt
      const renewals = this.$operatorWB.communication.form.renewal && this.$operatorWB.communication.futureRenewal
      const futureDate = promise ? promised : renewal ? renewals : new Date()
      const accruals = loan.accruals && loan.accruals.find(item => {
        return getShortDate(item.date) === getShortDate(futureDate)
      })
      const future = loan.future && loan.future.find(item => {
        return getShortDate(item.date) === getShortDate(futureDate)
      })
      const res = future
        ? future.sum_total_interest
        : accruals
          ? accruals.sum_total_interest
          : this.$operatorWB.loans.currentLoanInterest
      return res
    },
    currentAccruals () {
      const loan = this.currentLoan
      return (
        loan &&
        loan.accruals &&
        loan.accruals.map((item, index) => ({ index: index + 1, ...item }))
      ) || []
    },
    currentAgreements () {
      const loan = this.currentLoan
      return (
        loan &&
        loan.agreements &&
        loan.agreements.map((item, index) => ({ index: index + 1, ...item }))
      ) || []
    },
    currentRenewals () {
      return this.currentLoan && this.currentAgreements.filter(item => item.type === 'renewal')
    },
    currentInstallments () {
      return this.currentLoan && this.currentAgreements.filter(item => item.type === 'installment')
    },
    currentActiveAgreement () {
      if (!this.currentLoan || !this.currentLoan.activeAgreement) return
      return this.currentAgreements
        .find(item => item.id === this.currentLoan.activeAgreement.id && item.type === this.currentLoan.activeAgreement.type)
    },
    currentActiveAgreementSchedule () {
      if (!this.currentLoan) return
      return this.currentLoan.schedule
    },
    currentPromises () {
      const loan = this.currentLoan
      return (
        loan &&
        loan.promises &&
        loan.promises
          .sort((a, b) => {
            if (a.createdAt < b.createdAt) return -1
            if (a.createdAt > b.createdAt) return 1
            return 0
          })
      ) || []
    },
    currentPayments () {
      const loan = this.currentLoan
      return (
        loan && sortBy(loan.payments, ['paidAt'])
      ) || []
    },
    currentActiveAgreementPayments () {
      if (!this.currentLoan || !this.currentLoan.activeAgreement) return []
      const agr = this.currentActiveAgreement
      const { createdAt, expiredAt } = agr
      const payments = this.currentPayments.filter(item => {
        const
          paid = Date.parse(item.paidAt),
          created = Date.parse(createdAt),
          expired = Date.parse(expiredAt)
        return created < paid && paid < expired
      })

      return payments.reverse()
    },
    currentActiveAgreementNextPayment () {
      if (!this.currentLoan || !this.currentLoan.activeAgreement) return
      const schedule = this.currentActiveAgreementSchedule
      if (!schedule) return
      const future = schedule.payments.filter(item => {
        return Date.parse(item.lastDayOfPayment) > Date.now()
      })
      return future[0] && future[0].lastDayOfPayment
    },

    currentLastPayment () {
      const payments = this.currentPayments
      return payments && payments.length > 0 && payments[payments.length - 1]
    },
    currentPaymentsTotal () {
      const payments = this.currentPayments
      return payments && payments.reduce((acc, item) => {
        return acc + item.amount
      }, 0)
    },
    currentDelay () {
      return this.currentLoan && this.currentLoan.current.delay
    },
    currentGroup () {
      return this.currentLoan && this.currentLoan.deals && this.currentLoan.deals[0] && this.currentLoan.deals[0].group
    },
    lastRenewal () {
      const renewals = this.currentRenewals
      return (renewals && renewals.length > 0 && renewals[0]) || null
    },
    lastPromise () {
      const promises = this.currentPromises
      return (promises.length > 0 && promises[promises.length - 1]) || null
    },
    prolongedPromise () {
      const promises = this.currentPromises
      const lastPromise = this.lastPromise
      const promise = (promises.length > 1 && promises[promises.length - 2]) || null
      return promise &&
      promise.status === 'prolonged' &&
      Date.parse(formatDate(lastPromise.createdAt, 'YYYY-MM-DD')) === Date.parse(promise.promisedAt)
        ? promise
        : null
    },
    lastRenewalNotExpired () {
      const lastRenewal = this.lastRenewal
      return (lastRenewal && formatDate(lastRenewal.date_end, 'YYYY-MM-DD') >= formatDate(today, 'YYYY-MM-DD')) || false
    },
    lastPromiseNotExpired () {
      const lastPromise = this.lastPromise
      return (lastPromise && formatDate(lastPromise.promisedAt, 'YYYY-MM-DD') >= formatDate(today, 'YYYY-MM-DD')) || false
    },
    lastPromiseExpiredToday () {
      const lastPromise = this.lastPromise
      return (lastPromise && formatDate(lastPromise.promisedAt, 'YYYY-MM-DD') === formatDate(today, 'YYYY-MM-DD')) || false
    },
    isSecondPromise () {
      const {
        operatorIsOwnerLastPromise,
        operatorCanAddPromise,
        operatorCanEditLastCommunication,
      } = this.$operatorWB.user

      const {
        lastPromiseNotExpired,
        lastPromiseExpiredToday,
        currentPromises
      } = this
      const promises = currentPromises && sortBy(currentPromises, 'createdAt').reverse().slice(0, 2)
      const isSecond = promises.length > 1 && getShortDate(promises[0].createdAt) === getShortDate(promises[1].promisedAt) && promises[1].status === 'prolonged'

      return this.$operatorWB.clients.communicationEdit
        ? isSecond && operatorIsOwnerLastPromise && operatorCanEditLastCommunication && lastPromiseNotExpired
        : isSecond && operatorIsOwnerLastPromise && operatorCanAddPromise && lastPromiseExpiredToday
    },
    currentMessages () {
      // eslint-disable-next-line no-prototype-builtins
      return (this.currentLoan && this.currentLoan.hasOwnProperty('indirectContacts') && this.currentLoan.indirectContacts) || {}
    },
    isDisabledByLotOfMessages () {
      if (this.currentLoan && this.currentLoan.product !== 'pos') {
        // eslint-disable-next-line no-prototype-builtins
        return !this.currentMessages.hasOwnProperty('today') ||
          this.currentMessages.today === '-' ||
          (this.currentMessages.today >= 1 ||
            this.currentMessages.thisWeek >= 4 ||
            this.currentMessages.thisMonth >= 16)
      }
      return false
    },
    isDisabledCallsAndSMSByDelay () {
      if (this.$operatorWB.user.isUserHaveRoles(['operatorSoft'])) {
        const loan = this.currentLoan
        if (loan && (loan.current.delay < 1 || loan.current.total === 0)) return true
      }
      return false
    },
    isDisabledMessages () {
      return this.$operatorWB.clients.isDisabledCallsAndSMSByTimeAndRole ||
        this.isDisabledCallsAndSMSByDelay ||
        this.isDisabledByLotOfMessages ||
        this.$operatorWB.user.isUserHaveRoles(['operatorUnderwriting'])
    },
  },
  methods: {
    get (id) {
      return this.list.find(item => Number(item.id) === Number(id))
    },
    getIndex (id) {
      return this.list.findIndex(item => Number(item.id) === Number(id))
    },
    update (item) {
      const index = this.getIndex(item.id)
      if (index > -1) {
        this.list.splice(index, 1, item)
      }
    },
    async getData (id, source, callProductId) {
      if (!id) return false
      let loan = {}

      const alreadyExistedLoan = this.get(id)
      if (alreadyExistedLoan) {
        loan = alreadyExistedLoan
      } else {
        const res = await api.crm.getProductData(id)
        loan = res.data
      }
      if (loan.product === 'pos') loan.deals = orderBy(loan.deals, ['purchasedAt'], ['desc'])
      const index = this.getIndex(id)
      if (index > -1) {
        this.list.splice(index, 1, loan)
      } else {
        this.list.push(loan)
      }

      if (source === 'call') {
        this.current = callProductId || loan.id
      } else {
        if (loan.product === 'pdl') {
          this.current = loan.id
        }
        if (loan.product === 'pos') {
          this.current = loan.id
        }
        const loans = this.list.filter(l => l.clientId === loan.clientId)
        if (loans.length === 1) {
          this.current = loans[0].id
        }
      }

      if (!alreadyExistedLoan) {
        if (!this.$operatorWB.user.isUserHaveRoles(['operatorUnderwriting', 'supervisorUnderwriting', 'leaderUnderwriting'])) {
          this.getPayments({ productId: loan.id })
          this.getPromises({ productId: loan.id })
        }
        if (loan.product !== 'pos') {
          this.getAccruals({ productId: loan.id })
          if (this.$operatorWB.user.isUserHaveRoles(['operatorHard', 'supervisorHard', 'leaderHard', 'operatorSoft', 'supervisorSoft', 'leaderSoft'])) {
            this.getAgreements({ productId: loan.id })
            loan.activeAgreement && this.getAgreementsSchedule({ productId: loan.id })
          }
        }
      }
    },
    async getPayments (payload) {
      const res = await api.crm.getLoanPayments(payload)
      const payments = res.data
      const loan = this.get(payload.productId)
      loan.payments = payments.payments.reverse()
      this.update(loan)
    },
    async getAccruals (payload) {
      const res = await api.crm.getLoanAccruals(payload)
      const accruals = res.data
      const loan = this.get(accruals.loan_id)
      loan.accruals = accruals.list
      loan.future = accruals.future
      this.update(loan)
    },
    async getAgreements (payload) {
      const res = await api.crm.getLoanAgreements(payload)
      const agreements = res.data
      const loan = this.get(payload.productId)
      loan.agreements = sortBy(agreements.agreements, ['createdAt'])
      this.update(loan)
    },
    async getPromises (payload) {
      const res = await api.crm.getLoanPromises(payload)
      const promises = res.data
      const loan = this.get(payload.productId)
      loan.promises = promises.promises.reverse()
      this.update(loan)
    },
    async getAgreementsSchedule (payload) {
      const res = await api.crm.getInstallmentSchedule(payload)
      const loan = this.get(payload.productId)
      loan.schedule = res.data
      this.update(loan)
    },
    async changePortfolio (group) {
      this.loading = true
      const res = await api.crm.changeProduct({
        productId: this.current,
        groupId: group.value
      })
      this.loading = false
      if (res.data.group.newName) {
        this.currentLoan.portfolio = res.data.group.newName
        this.$operatorWB.messages.show({
          message: `Портфель текущего займа изменён на ${this.currentLoan.portfolio}.`,
          icon: 'done',
          color: 'positive',
        })
      } else {
        this.$operatorWB.messages.show({
          message: 'Портфель текущего займа не изменён!',
          icon: 'cancel',
        })
      }
    }
  },
  watch: {
  }

}
