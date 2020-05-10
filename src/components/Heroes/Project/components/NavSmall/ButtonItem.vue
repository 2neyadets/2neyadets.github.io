<template lang="pug">

  q-btn.nav-small__button.nav-small__button_right-margin(
    :class="{ active: item.name === current, 'app-win': $app.layout.getOS === 'win' }"
    :label="item.label"
    :color="item.name !== current ? '' : 'white'"
    :text-color="item.name !== current ? 'white' : 'black'"
    :outline="item.name !== current"
    :disable="$app.heroes.route.params.category ? item.label !== 'Культура' : false"
    unelevated
    @click="click"
  )

</template>

<script>
export default {
  name: 'NavSmallButtonItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    current () {
      if (this.$app.heroes.route.params.category) {
        return this.$app.heroes.route.params.section
      }
      return this.$app.heroes.route.params.category
    }
  },
  methods: {
    click () {
      if (this.item.name === this.current) return false
      if (this.$app.heroes.route.params.category) {
        this.$app.heroes.route.path = `/section/${this.item.name}/${this.$app.heroes.route.params.category}`
      } else {
        this.$app.heroes.route.path = `/section/${this.$app.heroes.route.params.section}/${this.item.name}`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .q-btn
    &.active
      cursor: default
</style>
