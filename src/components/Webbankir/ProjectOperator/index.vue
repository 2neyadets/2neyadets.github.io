<template lang="pug">
  .operatorWB__project
    template(v-if="$operatorWB.layout.route.path === '/login'")
      q-layout
        q-page-container
          WBOperatorProjectLogin
    template(v-else)
      q-layout(view="hHh Lpr lFf" container style="height: calc(100vh - 32px); width: 100vw")
        q-header.main-toolbar
          WBOperatorToolbar

        q-page-container
          Modals
          q-page.hard
            Hard(v-if="$operatorWB.layout.route.path === '/'")
            PaymentsReport(v-if="$operatorWB.layout.route.path === '/payments'")
</template>

<script>
import { notify } from 'src/utils/helpers'
import { LocalStorage } from 'quasar'
import WBOperatorToolbar from './components/Toolbar/index'
import WBOperatorProjectLogin from './components/Login/index'
import jwtDecode from 'jwt-decode'
import Hard from './components/Main/Hard/index'
import PaymentsReport from './components/Main/Payments/index'
import Modals from './components/Modals/index'

export default {
  name: 'WBOperatorProject',
  components: { WBOperatorToolbar, Modals, PaymentsReport, Hard, WBOperatorProjectLogin },
  created () {
    const token = LocalStorage.getItem('user-token') || null
    let jwt = null,
      expired = true
    if (token) {
      jwt = jwtDecode(token)
      expired = jwt.exp < Math.round(Date.now() / 1000)
    }
    if (!token || expired) {
      this.$operatorWB.layout.changeRoute('/login')
    } else {
      this.$operatorWB.layout.changeRoute('/')
    }
    if (!this.$operatorWB.layout.cancelWBOperatorStartNotify && this.$q.platform.is.desktop) {
      notify({
        message: this.$t('wb.notify.resolution', { width: this.$q.screen.width, height: this.$q.screen.height }),
        color: this.$app.layout.activeColor,
        textColor: this.$app.layout.activeTextColor,
        icon: 'desktop_mac',
        timeout: 5000,
      }, {
        label: this.$t('notify.dontShowAgain'),
        color: this.$app.layout.activeTextColor,
        handler: () => {
          LocalStorage.set('cancelWBOperatorStartNotify', true)
          this.$operatorWB.layout.cancelWBOperatorStartNotify = true
        }
      })
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
</style>
