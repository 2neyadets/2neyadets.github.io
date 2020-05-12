import { i18n } from 'boot/i18n'
import { camelCase, maxBy } from 'lodash'
import { LocalStorage } from 'quasar'
import { getShortDate } from 'src/utils/helpers'
import moment from 'moment/moment'

moment.locale('ru')

export default {
  name: 'CallsController',
  data () {
    return {
      list: [],
      currentCall: null,
      timeOfLastCall: null,
      startTimeOfCall: null,
      timer: null
    }
  },
  computed: {
    lastCall () {
      return maxBy(this.list, 'call_end') || undefined
    },
  },
  methods: {
    get (id) {
      return this.list.find(item => item.call_id === id)
    },
    getIndex (id) {
      return this.list.findIndex(item => item.call_id === id)
    },
    setList () {
      const list = LocalStorage.getItem('calls-list')
      if (list) {
        this.list = list.filter(item => item.call_start >= getShortDate()) || []
      }
    },
    lastCallOfClient (cid) {
      return this.list && maxBy(this.list.filter(call => call.client_id === cid), 'call_start')
    },
  },
  watch: {
    currentCall (v) {
      if (v) {
        if (this.$operatorWB.layout.clientCardModalOpened && this.$operatorWB.clients.current !== parseInt(v.client_id)) {
          if (this.$operatorWB.layout.isCallingCard) {
            this.$operatorWB.layout.closeClientCard({
              ready: true,
              closing: 'call'
            })
          } else {
            this.$operatorWB.layout.returnToListOfClients()
          }
        }
        const dealId = parseInt(v.deal_id)
        const productId = parseInt(v.product_id)
        const clientId = parseInt(v.client_id)
        const callId = parseInt(v.call_id)
        if (this.$operatorWB.clients.current !== parseInt(v.client_id)) {
          this.$operatorWB.layout.openClientCard({
            clientId,
            source: 'call',
            cardType: 'classic',
            productId,
            callId
          })
        }
        const form = this.$operatorWB.communication.form
        const options = {
          clientId,
          productId,
          dealId,
          callId,
          action: v.direction
            ? (v.direction.includes('autodial') || v.direction.includes('incoming'))
              ? 'autoDial'
              : 'manualDial'
            : 'callEnd',
          channel: {
            phone: {
              variant: camelCase(v.direction) + 'Call',
              number: v.phone_number
            }
          },
          contactedAt: v.call_start,
        }
        this.$operatorWB.communication.form = Object.assign({}, form, options)

        this.$operatorWB.messages.show({
          message: i18n.t('calls.messages.callStarted'),
          color: 'positive',
          icon: 'call',
          position: 'top',
        })
      } else {
        if (!this.$operatorWB.user.isUserSupervisor) {
          if (this.lastCall && this.lastCall.direction &&
            (this.lastCall.direction.includes('autodial') || this.lastCall.direction.includes('incoming'))) {
            this.$operatorWB.communication.clearTimeout()
            this.$operatorWB.communication.startTimeout()
          }
          this.$operatorWB.messages.show({
            message: `<div>${i18n.t('calls.messages.callEnded')}</div><div style="font-size: 11px">${i18n.t('calls.messages.needResult')}</div>`,
            html: true,
            icon: 'call_end',
            position: 'center',
          })
        }
      }
    }
  },
  created () {
    this.$nextTick(function () {
      this.setList()
    })
  }
}
