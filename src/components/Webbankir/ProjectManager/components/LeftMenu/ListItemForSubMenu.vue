<template lang="pug">
  .list-item-for-sub-menu
    q-item(
      @click="$managerWB.layout.changeRoute(`/${properties.subMenu}/${properties.item}`)"
      :active="$managerWB.layout.route.path === `/${properties.subMenu}/${properties.item}`"
      active-class="text-WB-text-active-color"
      clickable
      v-ripple
    )
      q-item-section.q-pl-xl(avatar)
        q-icon(
          name="fiber_smart_record"
          size="16px"
          v-if="$managerWB.layout.route.path.includes(properties.item)"
        )
        q-icon(
          name="fiber_manual_record"
          size="16px"
          v-else
        )
      q-item-section
        q-item-label {{$t(`menu.` + properties.subMenu + '.' + properties.item)}}
</template>

<script>
export default {
  name: 'ListItemForSubMenu',
  props: {
    properties: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
