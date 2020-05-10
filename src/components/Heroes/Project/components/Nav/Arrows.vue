<template lang="pug">
  .arrows
    NavBigButtonArrow(dir="left" :item="arrows.left" @click="$emit('click', arrows.left)")
    NavBigButtonArrow(dir="right" :item="arrows.right" @click="$emit('click', arrows.right)")

</template>

<script>
import NavBigButtonArrow from './ButtonArrow'

export default {
  name: 'NavSmallArrows',
  components: { NavBigButtonArrow },
  props: {
    arrows: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
