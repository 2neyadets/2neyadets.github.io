<template lang="pug">
  q-drawer(
    v-model="$managerWB.layout.leftDrawerOpen"
    :mini="$managerWB.layout.leftDrawerMini"
    @mouseover="$managerWB.layout.leftDrawerHover"
    @mouseout="$managerWB.layout.leftDrawerOut"
    content-class="bg-WB-modal-bg-color"
  )
    q-scroll-area(
      style="height: calc(100vh - 82px)"
      :thumb-style="thumbStyle"
      :dark="false"
    )
      q-list.text-WB-bg-profile-color.font-size-large(no-border inset-delimiter :dark="false")

        q-item(
          @click="$managerWB.layout.changeRoute('/')"
          :active="$managerWB.layout.route.path === '/'"
          active-class="text-WB-text-active-color"
          clickable
          v-ripple
        )
          q-item-section(avatar)
            q-icon(name="home")
          q-item-section
            q-item-label {{$t('menu.general.home')}}

        q-item(
          v-if="$managerWB.user.isUserHaveRoles('operatorHard')"
          @click="$managerWB.layout.changeRoute('/schedule')"
          :active="$managerWB.layout.route.path === '/schedule'"
          active-class="text-WB-text-active-color"
          clickable
          v-ripple
        )
          q-item-section(avatar)
            q-icon(name="date_range")
          q-item-section
            q-item-label {{$t('menu.general.schedule')}}

        q-item(
          @click="$managerWB.layout.changeRoute('/settings')"
          :active="$managerWB.layout.route.path === '/settings'"
          active-class="text-WB-text-active-color"
          clickable
          v-ripple
        )
          q-item-section(avatar)
            q-icon(name="settings")
          q-item-section
            q-item-label {{$t('menu.general.settings')}}
        SettingsSubMenu(v-if="$managerWB.layout.route.path.includes('/settings')")

        .q-mt-xl(v-if="$managerWB.user.isUserHaveRoles('operatorHard')")

          q-item-label.text-WB-bg-profile-color(header) {{$t('menu.employees')}}:
          q-separator(:dark="false")
          q-list.text-WB-bg-profile-color.font-size-large(
            v-for="(employee, index) in $managerWB.user.employeesComp"
            bordered
            dense
            :key="employee.id"
            :dark="false"
          )
            q-item()
              q-item-section
                q-item-label.font-size-medium {{index+1}}. {{employee.fullName}}
                q-item-label.text-WB-bg-profile-color.font-size-xs(caption) {{employee.portfolios}}

</template>

<script>
import SettingsSubMenu from './SettingsSubMenu/'

export default {
  name: 'WBManagerLeftMenu',
  components: { SettingsSubMenu },
  data () {
    return {
      menu: [
        { slug: 'monitoring', title: this.$t('menu.general.monitoring'), icon: 'assessment' },
        { slug: 'schedule', title: this.$t('menu.general.schedule'), icon: 'date_range' },
        {
          slug: 'settings',
          title: this.$t('menu.general.settings'),
          icon: 'settings',
          children: {
            slug: 'redistribution',
            title: this.$t('menu.general.schedule')
          }
        },
        { slug: 'security', title: this.$t('menu.general.security'), icon: 'security' },
      ]
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

<style scoped lang="stylus">

</style>
