<template lang="pug">
  q-btn.nav-small__button.nav-small__button-back(
    icon="arrow_back"
    text-color="white"
    outline
    unelevated
    @click="click"
  )
</template>

<script>
export default {
  name: 'NavSmallButtonBack',
  methods: {
    click () {
      const arr = this.$heroes.route.path.split('/')
      arr.pop()
      this.$heroes.route.path = arr.join('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
