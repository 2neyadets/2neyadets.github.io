<template lang="pug">
  q-btn.q-mr-sm.no-wrap(
    flat
    size="small"
    exact
    :disable="disable"
    :class="{active: isActive}"
    @click="click"
  )
    .flex.no-wrap
      q-icon.q-mr-sm(:name="icon")
      | {{label}}
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
    to: {
      type: Object,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    disable: {
      type: Boolean
    }
  },
  computed: {
    isActive () {
      return this.$operatorWB.layout.route.path === this.to.path
    }
  },
  methods: {
    click () {
      !this.disable && this.$operatorWB.layout.changeRoute(this.to.path)
    }
  }

}
</script>

<style scoped lang="stylus">
  .q-btn
    & .q-btn__content
      flex-wrap nowrap
  .active
    border 1px solid white
</style>
