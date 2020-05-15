<template lang="pug">
  .managerWB__project
    template(v-if="$q.platform.is.mobile")
      .flex.flex-center.text-center.q-pa-sm
        h4 {{$t('layout.desktopOnly')}}
        q-btn(
          :label="$t('layout.close')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          v-close-popup
        )
    template(v-else)
      template(v-if="$managerWB.layout.route.path === '/login'")
        q-layout
          q-page-container
            WBManagerProjectLogin
      template(v-else)
        q-layout(view="hHh lpR fFf" container style="height: calc(100vh - 32px); width: 100vw")
          q-header(elevated)
            WBManagerToolbar

          WBManagerLeftMenu

          q-page-container.bg-WB-bg-color.text-WB-bg-profile-color
            q-scroll-area(
              style="height: calc(100vh - 82px)"
              :thumb-style="thumbStyle"
              :dark="false"
            )
              q-page.q-px-md.q-pt-md.q-pb-none(padding)
                HardRatings(v-if="$managerWB.layout.route.path === '/'")
                Schedule(v-if="$managerWB.layout.route.path === '/schedule'")
                WBManagerSettingsPage(v-if="$managerWB.layout.route.path === '/settings'")
                WBManagerMailing(v-if="$managerWB.layout.route.path === '/settings/mailing'")
                WBManagerLoanRedistribution(v-if="$managerWB.layout.route.path === '/settings/loanRedistribution'")
                WBManagerCoefficients(v-if="$managerWB.layout.route.path === '/settings/coefficients'")
                WBManagerPayments(v-if="$managerWB.layout.route.path === '/settings/payments'")
</template>

<script>
import { notify } from 'src/utils/helpers'
import { LocalStorage } from 'quasar'
import jwtDecode from 'jwt-decode'
import WBManagerToolbar from './components/Toolbar/index'
import WBManagerProjectLogin from './components/Login/index'
import WBManagerLeftMenu from './components/LeftMenu/index'
import HardRatings from './components/Reports/HardRatings/index'
import Schedule from './components/Schedule/index'
import WBManagerSettingsPage from './components/Settings/index'
import WBManagerMailing from './components/Settings/Mailing/index'
import WBManagerLoanRedistribution from './components/Settings/LoanRedistribution/index'
import WBManagerCoefficients from './components/Settings/Coefficients/index'
import WBManagerPayments from './components/Settings/Payments/index'

export default {
  name: 'WBManagerProject',
  components: {
    WBManagerPayments,
    WBManagerCoefficients,
    WBManagerLoanRedistribution,
    WBManagerMailing,
    WBManagerSettingsPage,
    Schedule,
    HardRatings,
    WBManagerLeftMenu,
    WBManagerProjectLogin,
    WBManagerToolbar
  },
  created () {
    if (this.$managerWB.user.isUserHaveRoles('operatorHard')) this.$managerWB.user.getEmployees()
    this.$managerWB.user.getGroupsForSuper()
    const token = LocalStorage.getItem('manager-user-token') || null
    let jwt = null,
      expired = true
    if (token) {
      jwt = jwtDecode(token)
      expired = jwt.exp < Math.round(Date.now() / 1000)
    }
    if (!token || expired) {
      this.$managerWB.layout.changeRoute('/login')
    } else {
      this.$managerWB.layout.changeRoute('/')
    }
    if (!this.$managerWB.layout.cancelWBManagerStartNotify && this.$q.platform.is.desktop) {
      notify({
        message: this.$t('wb.notify.resolution', {
          width: this.$q.screen.width,
          height: this.$q.screen.height
        }),
        color: this.$app.layout.activeColor,
        textColor: this.$app.layout.activeTextColor,
        icon: 'desktop_mac',
        timeout: 5000,
      }, {
        label: this.$t('notify.dontShowAgain'),
        color: this.$app.layout.activeTextColor,
        handler: () => {
          LocalStorage.set('cancelWBManagerStartNotify', true)
          this.$managerWB.layout.cancelWBManagerStartNotify = true
        }
      })
    }
  },
  computed: {
    thumbStyle () {
      return {
        backgroundColor: '$WB-primary-color',
        width: '8px',
        opacity: 0.5
      }
    }
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
</style>
