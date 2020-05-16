import { i18n } from 'src/boot/i18n'
import { LocalStorage, uid } from 'quasar'

export default {
  name: 'LayoutController',
  data () {
    return {
      route: {
        path: '/',
      },
      cancelWBOperatorStartNotify: LocalStorage.getItem('cancelWBOperatorStartNotify') || false,
      cancelWBOperatorDblClickNotify: LocalStorage.getItem('cancelWBOperatorDblClickNotify') || false,
      cancelWBOperatorActionNotAvailableNotify: LocalStorage.getItem('cancelWBOperatorActionNotAvailableNotify') || false,
      leftDrawer: false,
      clientCardModalOpened: false,
      phoneModalOpened: false,
      areYouSureSendSmsModal: false,
      paymentsReportModalOpened: false,
      view: 'communications',
      size: 'half', // 'full'
      openedCards: [],
      activeCardIndex: null,
      date: null,
      dateTimerId: null,
    }
  },
  created () {
    this.date = new Date()
    this.dateTimerId = setInterval(this.updateTime, 1000)
  },
  beforeDestroy () {
    clearTimeout(this.dateTimerId)
  },
  computed: {
    currentCard () {
      const card = this.activeCardIndex !== null
        ? this.openedCards[this.activeCardIndex]
        : null
      this.logCurrentCard(card)
      return card
    },
    currentCardType () {
      return (this.currentCard && this.currentCard.type) || ''
    },
    currentCardSource () {
      return (this.currentCard && this.currentCard.source) || ''
    },
    isApplicationCard () {
      return this.currentCardType.includes('application')
    },
    isCallingCard () {
      return this.currentCardSource === 'call'
    }
  },
  methods: {
    set (entity, value) {
      this[entity] = value
    },
    changeRoute (routePath) {
      if (this.route.path !== routePath) this.route.path = routePath
    },
    async openClientCard (payload) {
      const { clientId, cardType, source, productId = null } = payload
      this.setDefaults()
      this.size = 'half'
      this.$operatorWB.dialer.hold = false

      const client = await this.$operatorWB.clients.getData(clientId, cardType, source, productId)

      if (client.id) {
        this.$nextTick(function () {
          this.addToOpened({
            id: uid(),
            clientId: client.id,
            type: cardType,
            source,
            isEditing: false
          })
          this.clientCardModalOpened = true
        })
      }
    },
    closeClientCard (props) {
      this.$operatorWB.communication.clearTimeout()

      this.$operatorWB.communication.reset()
      this.removeFromOpened(this.currentCard)
      this.$operatorWB.clients.current = null
      this.$operatorWB.loans.current = null
      this.clientCardModalOpened = false
    },
    switchClientCard ({ id, clientId, cardType, index }) {
      if (this.currentCard && this.currentCard.id === id) return false
      this.setDefaults()
      this.$operatorWB.communication.currentForm = 'result'

      let client = null
      client = this.$operatorWB.clients.get(clientId)

      // eslint-disable-next-line no-prototype-builtins
      const idKey = client && client.hasOwnProperty('id') ? 'id' : 'applicantId'
      if (client[idKey]) {
        this.$nextTick(function () {
          this.$operatorWB.clients.current = client[idKey]
          this.activeCardIndex = index
          if (client.products && client.products.length) {
            this.$operatorWB.loans.current = client.products[0].id
          } else {
            this.$operatorWB.loans.current = null
          }
          this.$operatorWB.communication.reset()
          this.clientCardModalOpened = true
        })
      }
    },
    returnToListOfClients () {
      this.$operatorWB.clients.current = null
      this.$operatorWB.loans.current = null
      this.clientCardModalOpened = false
      this.activeCardIndex = null
    },
    async addToOpened (payload) {
      const { clientId, type } = payload
      if (!this.openedCards.find(card => card.clientId === clientId && card.type === type)) {
        this.openedCards.push(payload)
        this.activeCardIndex = this.openedCards.length - 1
      } else {
        this.activeCardIndex = this.openedCards.findIndex(card => card.clientId === clientId && card.type === type)
      }
    },
    async removeFromOpened (payload) {
      if (!payload) return false
      const { id } = payload
      const index = this.openedCards.findIndex(card => card.id === id)
      this.openedCards.splice(index, 1)
      this.activeCardIndex = null
    },
    logCurrentCard (card) {
    },
    updateTime () {
      this.date.setSeconds((this.date.getSeconds()) + 1)
    },
    setDefaults () {
      this.$operatorWB.dialer.phoneForManualDialSelect = {
        value: 'blank',
        label: i18n.t('dialer.choosePhone')
      }
      this.$operatorWB.dialer.phoneForCallForwardSelect = {
        value: 'blank',
        label: i18n.t('calls.phonesForCallForward.blank')
      }
      this.view = 'communications'
    }
  },
  watch: {
    isApplicationCard (v) {
      this.$operatorWB.communication.updateCommunicationScheme()
    },
    'route.path' (v) {
      // console.log('operatorWB route.path: ', v)
    }
  }
}
