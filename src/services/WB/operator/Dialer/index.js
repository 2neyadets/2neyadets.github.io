import api from 'src/api'
import { i18n } from 'src/boot/i18n'

export default {
  name: 'DialerController',
  data () {
    return {
      ready: false,
      status: null,
      phoneForManualDial: 'blank',
      phoneForManualDialSelect: {
        value: 'blank',
        label: i18n.t('dialer.choosePhone')
      },
      phoneForCallForward: 'blank',
      phoneForCallForwardSelect: {
        value: 'blank',
        label: i18n.t('calls.phonesForCallForward.blank')
      },
      colorForInfinityUserStatus: 'white',
      hold: false,
      directPhone: '7'
    }
  },
  computed: {
    phonesOptions () {
      const phones = this.$operatorWB.clients.currentPhones
      const arr = []
      arr.push({
        value: 'blank',
        label: i18n.t('dialer.choosePhone')
      })
      for (let i = 0; i < phones.length; i++) {
        if (!phones[i].blocked) {
          arr.push({
            value: phones[i].number,
            label: phones[i].number,
            sublabel: i18n.t('clients.phns.' + phones[i].type) + ', ' + this.sourceOfPhone(phones[i].source)
          })
        }
      }
      return arr
    }
  },
  methods: {
    async sayMake (payload) {
      await api.crm.sayMake(payload, this)
    },
    async sayDrop () {
      await api.crm.sayDrop()
    },
    async sayHold () {
      await api.crm.sayHold()
      this.hold = true
    },
    async sayUnhold () {
      await api.crm.sayUnhold()
      this.hold = false
    },
    async sayTransfer (payload) {
      await api.crm.sayTransfer(payload)
    },
    choosePhoneForCallForward (string) {
      switch (string) {
        case 'hardAll':
          return '0001'
        case 'hardMoscow':
          return '0002'
        case 'hardYaroslavl':
          return '0008'
        case 'softAll':
          return '0007'
        case 'callCenter':
          return '0005'
        case 'underwriting':
          return '0006'
        case 'other':
          return this.directPhone
      }
    },
    sourceOfPhone (sourceString) {
      if (sourceString === 'Profile') {
        return i18n.t('clients.source.profile')
      } else {
        return sourceString
      }
    },
  },
  watch: {
    phoneForManualDialSelect (v) {
      this.phoneForManualDial = v.value
    },
    phoneForCallForwardSelect (v) {
      this.phoneForCallForward = v.value
    }
  }
}
