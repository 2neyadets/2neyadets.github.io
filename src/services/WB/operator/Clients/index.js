import api from 'src/api'
import unionBy from 'lodash/unionBy'
import maxBy from 'lodash/maxBy'
import orderBy from 'lodash/orderBy'
import moment from 'moment/moment'
import { isHoliday } from 'src/utils/helpers'
import { i18n } from 'src/boot/i18n'

moment.locale('ru')

export default {
  name: 'ClientsController',
  data () {
    return {
      list: [],
      loading: {
        client: false,
        phone: false
      },
      current: null,
      phoneAdded: false,
      formData: null,
      communicationAdded: false,
      communicationSaved: false,
      communicationEdit: false
    }
  },
  computed: {
    currentClient () {
      return this.list.find(item => Number(item.id) === Number(this.current))
    },
    currentPhones () {
      const client = this.currentClient
      const phones = client && client.phones
      return (phones && phones
        .sort((a, b) => a.id > b.id ? -1 : 1)
        .sort(item => item.main ? -1 : 1)
        .map(item => Object.assign(item, { blocked: (!item.active || !item.autodial) }))) || []
    },
    currentEmails () {
      return this.currentClient.emails || []
    },
    currentLoansHistory () {
      const client = this.currentClient
      const history = client && client.history
      return (history && history.map((item, index) => ({ index: index + 1, ...item }))) || []
    },
    currentLoansDebt () {
      const client = this.currentClient
      const loansIds = client && client.products.map(product => product.id)
      return loansIds && this.$operatorWB.loans.list.length > 0 && this.$operatorWB.loans.list
        .filter(item => loansIds.includes(item.id))
        .sort(item => item.product === 'pdl' ? -1 : 1)
        .map(item => ({
          id: item.id,
          total: item.current.total,
          product: item.product,
          status: item.status,
          contract: item.contract
        }))
    },
    currentFullDebt () {
      const debt = this.currentLoansDebt
      return (debt && debt.reduce((acc, item) => acc + item.total, 0)) || 0
    },
    currentAssigned () {
      const last = maxBy(this.currentClient.communications, item => item.contactedAt)
      return last && (last.operator.fullName || last.operator.department.name)
    },
    currentLastCommunicationStatus () {
      const last = maxBy(this.currentCommunications, item => item.contactedAt)
      return (last && last.status) || 'never'
    },
    currentLastCommunicationResult () {
      const last = maxBy(this.currentCommunications, item => item.contactedAt)
      return (last && last.result) || 'unknown'
    },
    currentCommunications () {
      const client = this.currentClient
      return (client && client.communications) || []
    },
    currentLastCommunication () {
      return maxBy(this.currentCommunications, item => item.contactedAt)
    },
    currentLastCommunicationDate () {
      const last = this.currentLastCommunication
      return last && last.contactedAt
    },
    isDisabledCallsAndSMSByTimeAndRole () {
      if (this.$operatorWB.user.isUserSupervisor) return true
      const timeZone = (this.currentClient && this.currentClient.timeZone) || 3
      const currentTimeMoment = moment().utcOffset(timeZone)
      const currentHour = Number(currentTimeMoment.format('HH'))
      const currentDate = currentTimeMoment.format('YYYY-MM-DD')
      const redDay = isHoliday(currentDate)
      if (redDay) {
        return (currentHour < 9 || currentHour >= 20)
      } else {
        return (currentHour < 8 || currentHour >= 22)
      }
    },
    currentRelations () {
      return this.currentClient.relations || []
    },
    currentCreditHistory () {
      return this.currentClient.creditHistory || []
    }
  },
  methods: {
    get (id) {
      return this.list.find(item => Number(item.id) === Number(id))
    },
    getIndex (id) {
      return this.list.findIndex(item => Number(item.id) === Number(id))
    },
    update (client) {
      const index = this.getIndex(client.id)
      if (index > -1) {
        this.list.splice(index, 1, client)
      }
    },
    async getData (clientId, cardType, source, callProductId) {
      if (!clientId) return {}
      let client = {}

      this.loading.client = true
      const alreadyExistedCard = this.$operatorWB.layout.openedCards.find(card => card.clientId === clientId && card.type === cardType)
      if (alreadyExistedCard) {
        client = this.get(clientId)
      } else {
        const res = await api.crm.getClientData(clientId)
        client = res.data
      }

      if (client.id) {
        const index = this.getIndex(client.id)
        if (index > -1) {
          this.list.splice(index, 1, client)
        } else {
          this.list.push(client)
        }
        this.loading.client = false
        this.current = client.id

        if (!alreadyExistedCard) {
          this.getCommunications(client.id)
          this.getLoansHistory(client.id)
          if (this.$operatorWB.user.isUserHaveRoles(['operatorUnderwriting', 'supervisorUnderwriting', 'leaderUnderwriting'])) {
            this.getRelations(client.id)
            this.getCreditHistory(client.id)
          }
        }

        if (client.products.length === 0 && !cardType.includes('application')) {
          this.$operatorWB.messages.show({
            message: i18n.t('clients.card.alert.noActiveLoans')
          })
        } else {
          if (!cardType.includes('application')) {
            client.products.forEach(product => {
              this.$operatorWB.loans.getData(product.id, source, callProductId)
            })
          }
        }
      }
      return client
    },

    async getCommunications (clientId) {
      if (!clientId) return false
      const res = await api.crm.getClientCommunications(clientId)
      const communications = res.data
      const client = this.get(clientId)
      communications.communications.forEach((communication, i) => {
        communication.showing = false
      })
      client.communications = communications.communications
      this.update(client)
    },

    async getLoansHistory (clientId) {
      if (!clientId) return false
      const res = await api.crm.getClientLoansHistory(clientId)
      const history = res.data
      const client = this.get(clientId)
      client.history = history.list
      this.update(client)
    },

    async getRelations (clientId) {
      if (!clientId) return false
      const res = await api.crm.getClientRelations(clientId)
      const client = this.get(clientId)
      client.relations = res.data.relations
      this.update(client)
    },

    async getCreditHistory (clientId) {
      if (!clientId) return false
      const res = await api.crm.getClientCreditHistory(clientId)
      const client = this.get(clientId)
      if (res.data) {
        client.creditHistory = orderBy(res.data.history, ['issuedAt'], ['desc'])
        this.update(client)
      }
    },

    async addPhone (payload) {
      if (!this.current) return

      this.loading.phone = true
      const res = await api.crm.addClientPhone({
        phone: payload,
        clientId: this.current
      }, this)
      this.loading.phone = false
      if (res.data) {
        const phone = res.data
        const client = this.currentClient
        client.phones = unionBy([phone], client.phones, 'id')
        this.update(client)
        this.$operatorWB.messages.show({
          message: i18n.t('clients.phoneForm.phoneAdded'),
          color: 'positive'
        })
        return true
      } else {
        return false
      }
    },

    async editPhone ({ id, ...data }) {
      if (!this.current) return

      const res = await api.crm.editClientPhone({
        data,
        phoneId: id,
        clientId: this.current
      }, this)
      if (res && res.data) {
        const phone = res.data
        const client = this.currentClient
        client.phones = unionBy([phone], client.phones, 'id')
        this.update(client)
      }
    },

    async getCalculationOfAmnesty (obj) {
      this.$operatorWB.communication.loading.saveCommunication = true
      const res = await api.crm.getCalculationOfAmnesty(obj)
      this.$operatorWB.communication.loading.saveCommunication = false
      if (res !== undefined) {
        const amountOfForgiveness = this.$operatorWB.loans.currentPdlLoan.current.total - res.newPrincipalDebt
        res.amountOfForgiveness = Number.isInteger(amountOfForgiveness) ? amountOfForgiveness : Number(amountOfForgiveness.toFixed(2))
        const discount = res.amountOfForgiveness * 100 / this.$operatorWB.loans.currentPdlLoan.current.total
        res.discount = Number.isInteger(discount) ? discount : Number(discount.toFixed(2))
        this.$operatorWB.communication.form.comment = i18n.t('communications.comments.amnesty', {
          newPrincipalDebt: res.newPrincipalDebt,
          amount: this.$operatorWB.loans.currentPdlLoan.current.total
        })
        res.type = 'rate'
        res.amount = res.discount
        return res
      }
      return null
    }
  },
  watch: {
    current (v) {
      v && this.$operatorWB.communication.setCurrent()
      this.$nextTick(function () {
        this.$operatorWB.communication.edited = null
      })
    }
  }
}
