import api from 'src/api'
import { date } from 'quasar'
import { i18n } from 'src/boot/i18n'
import { getTimezoneDigits, getTimezoneName } from 'src/utils/helpers'

export default {
  name: 'HardController',
  data () {
    return {
      list: [],
      loading: false,
      activeTab: '',
      smsOpen: false,
      counts: null
    }
  },
  computed: {
    hardList () {
      const stateList = this.list.map((item, index) => ({
        id: item.id,
        loans: item.loans,
        number: ++index,
        contract: item.mainProduct.product.contract,
        signDate: item.mainProduct.product.signingDate,
        timezone: `${getTimezoneDigits(item.mainProduct.client.timeZone)} (${getTimezoneName(item.mainProduct.client.timeZone)})`,
        fullName: item.fullName,
        birthDate: item.mainProduct.client.birthDate,
        productId: item.mainProduct.product.id,
        duration: item.mainProduct.product.duration,
        amount: Number(item.mainProduct.product.amount),
        summLeft: item.mainProduct.product.debt.principal,
        summPercent: item.mainProduct.product.debt.interests,
        summPenalty: item.mainProduct.product.debt.fines,
        summTotal: item.mainProduct.product.debt.total,
        daysDelay: item.mainProduct.product.delay,
        phone: item.mainProduct.client.mainPhone,
        lastContact: item.mainProduct.product.lastResults.communication && item.mainProduct.product.lastResults.communication.contactedAt,
        lastPayDate: item.mainProduct.product.lastResults.payment && item.mainProduct.product.lastResults.payment.paidAt,
        lastPaySumm: item.mainProduct.product.lastResults.payment && item.mainProduct.product.lastResults.payment.paidAmount,
        suppAssignDate: item.mainProduct.product.lastResults.agreement && item.mainProduct.product.lastResults.agreement.signedAt,
        suppSendDate: item.mainProduct.product.lastResults.agreement && item.mainProduct.product.lastResults.agreement.createdAt,
        suppPaymantDate: item.mainProduct.product.lastResults.agreement && item.mainProduct.product.lastResults.agreement.paidAt,
        promiseDate: (item.mainProduct.product.promise && item.mainProduct.product.promise.promisedAt) || (item.mainProduct.product.lastResults.promise && item.mainProduct.product.lastResults.promise.promisedAt),
        promiseSumm: (item.mainProduct.product.promise && item.mainProduct.product.promise.amount) || (item.mainProduct.product.lastResults.promise && item.mainProduct.product.lastResults.promise.promisedAmount),
        numberOfLoans: item.mainProduct.client.loansCount,
        secret: item.mainProduct.client.secretWord,
        portfolio: item.mainProduct.product && item.mainProduct.product.group && item.mainProduct.product.group.name,
        group: item.mainProduct.product && item.mainProduct.product.group && item.mainProduct.product.group.name,
        lastCommunicationStatus: item.mainProduct.product.lastResults.communication && item.mainProduct.product.lastResults.communication.status && i18n.t('communications.status.' + item.mainProduct.product.lastResults.communication.status),
        lastCommunicationResult: item.mainProduct.product.lastResults.communication && item.mainProduct.product.lastResults.communication.result && i18n.t('communications.result.' + item.mainProduct.product.lastResults.communication.result),
        lastCommunicationDepartment: item.mainProduct.product.lastResults.communication &&
          item.mainProduct.product.lastResults.communication.operator &&
          item.mainProduct.product.lastResults.communication.operator.department &&
          i18n.t('clients.list.departments.' + item.mainProduct.product.lastResults.communication.operator.department.id),
        product: i18n.t('loans.product.' + item.mainProduct.product.product),
        assignee: item.mainProduct.product.assignee,
        openedAt: item.mainProduct.product.openedAt,
        city: item.mainProduct.client.city,
        region: item.mainProduct.client.region
      }))
      return stateList || []
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

    async getHardList () {
      this.loading = true
      setTimeout(async () => {
        const res = await api.crm.getClientsList(this.activeTab)
        this.loading = false
        this.list = res.data.clients
        this.counts = Object.assign({}, res.data.counts)
      }, 1250)
    },
    setActiveTab (payload) {
      this.activeTab = payload
    },
    setOpened (id) {
      const item = this.get(id)
      if (item && item.mainProduct && item.mainProduct.product) {
        item.mainProduct.product.openedAt = date.formatDate(Date.now(), 'YYYY-MM-DDTHH:mm:ssZ')
        this.update(item)
      }
    }
  }
}
