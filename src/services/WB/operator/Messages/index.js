import { uid } from 'quasar'

export default {
  name: 'MessagesController',
  data () {
    return {
      list: []
    }
  },
  methods: {
    show (msg) {
      this.list.push({ id: uid(), ...msg })
    },
    hide (msgId) {
      const i = this.list.findIndex(v => v.id === msgId)
      if (i >= 0) this.list.splice(i, 1)
    }

  },
  watch: {
    list: function (v) {
      for (let msg of v) {
        if (msg.l18nKey) {
          msg = {
            ...msg,
            message: this.$app.$t(msg.l18nKey, msg.args)
          }
        }
        // eslint-disable-next-line no-prototype-builtins
        if (!msg.hasOwnProperty('color')) msg.color = 'negative'
        this.$q.notify(msg)
        this.hide(msg.id)
      }
    },
  },
}
