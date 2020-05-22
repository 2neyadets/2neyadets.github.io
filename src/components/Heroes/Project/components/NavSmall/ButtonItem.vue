<template lang="pug">

  q-btn.nav-small__button.nav-small__button_right-margin(
    :class="{ active: item.name === current, 'app-win': $app.layout.getOS === 'win' }"
    :label="item.label"
    :color="item.name !== current ? '' : 'white'"
    :text-color="item.name !== current ? 'white' : 'black'"
    :outline="item.name !== current"
    :disable="$heroes.route.params.category ? item.label !== 'Культура' : false"
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
      if (this.$heroes.route.params.category) {
        return this.$heroes.route.params.section
      }
      return this.$heroes.route.params.category
    }
  },
  methods: {
    click () {
      if (this.item.name === this.current) return false
      if (this.$heroes.route.params.category) {
        this.$heroes.route.path = `/section/${this.item.name}/${this.$heroes.route.params.category}`
      } else {
        this.$heroes.route.path = `/section/${this.$heroes.route.params.section}/${this.item.name}`
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
