<template lang="pug">
  .settings-sub-menu
    q-list.text-WB-bg-profile-color.font-size-medium(no-border link inset-delimiter)
      ListItemForSubMenu(:properties="{ subMenu: 'settings', item: 'mailing' }" v-if="$managerWB.user.isUserHaveRoles('operatorHard')")
      ListItemForSubMenu(:properties="{ subMenu: 'settings', item: 'loanRedistribution' }")
      ListItemForSubMenu(:properties="{ subMenu: 'settings', item: 'coefficients' }")
      ListItemForSubMenu(:properties="{ subMenu: 'settings', item: 'payments' }")
</template>

<script>
import ListItemForSubMenu from '../ListItemForSubMenu'

export default {
  name: 'SettingsSubMenu',
  components: { ListItemForSubMenu }
}
</script>

<style scoped lang="stylus">
</style>
