<template lang="pug">
  q-btn.nav-big__arrows(
    :class="className"
    :icon="iconName"
    size="xl"
    flat
    @click="$emit('click')"
  )
</template>

<script>
export default {
  name: 'NavBigButtonArrow',
  props: {
    dir: {
      type: String,
      required: true
    }
  },
  computed: {
    className () {
      return `nav-big__arrow-${this.dir}`
    },
    iconName () {
      return 'img:statics/heroes/nav/arrow/navArrow.svg'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
