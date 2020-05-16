import { LocalStorage } from 'quasar'

export default {
  name: 'LayoutService',
  data () {
    return {
      leftDrawerOpen: true, // this.$q.platform.is.desktop,
      leftDrawerMini: false,
      route: {
        path: '',
      },
      cancelWBManagerStartNotify: LocalStorage.getItem('cancelWBManagerStartNotify') || false,
      dialogs: {
        settings: {
          changeCoefficient: false
        }
      },
      schedule: {
        hoursAndNoteModal: false,
        autoFillGraphicsModal: false,
        employeeModal: {
          add: false,
          delete: false
        }
      },
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    changeRoute (routePath) {
      if (this.route.path !== routePath) this.route.path = routePath
    },
    leftDrawerHover () {
      this.leftDrawerMini = false
    },
    leftDrawerOut () {
      this.leftDrawerMini = false
    },
  },
  watch: {
    'route.path' (v) {
      // console.log('managerWB route.path: ', v)
    }
  }

}
