<template lang="pug">
  q-toolbar(inverted).width-100.flex.items-center.justify-between.bg-WB-primary-color
    .row
      .flex.flex-center
        q-btn(
          @click="$managerWB.layout.leftDrawerOpen = !$managerWB.layout.leftDrawerOpen"
          flat
          dense
          round
          aria-label="Menu"
          icon="menu"
        )
      .flex.justify-between.items-center.bg-WB-primary-color.text-WB-bg-profile-color.max-h-50px.q-pr-none
        q-item.q-py-xs
          q-item-section
            q-item-label.font-size-medium {{ $managerWB.user.shortName }}
            q-item-label.text-WB-bg-profile-color(caption) {{ $managerWB.user.department }}
    q-btn(
      @click="$managerWB.user.logout"
      label="Выйти"
      color="negative"
      icon-right="exit_to_app"
    )
</template>

<script>
export default {
  name: 'WBManagerToolbar',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style scoped lang="stylus">
  .width-100
    width 100%
</style>
