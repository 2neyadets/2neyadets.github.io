<template lang="pug">
  .term.row.content-between.full-width(ref="termWrapper")
    .col-1.flex.justify-start.items-center
      .scroll-control(v-show="needScroll")
        .q-mb-lg.flex.justify-start.items-center
          q-btn(
            @click="animateScroll(true)"
            color="white"
            text-color="black"
            icon="arrow_drop_up"
            round
          )
        .flex.justify-start.items-center
          q-btn(
            @click="animateScroll(false)"
            color="white"
            text-color="black"
            icon="arrow_drop_down"
            round
          )
    .col-11.border-for-scroll
      q-scroll-area.text-shadow(
        ref="scrollAreaTerm"
        :thumb-style="$app.layout.thumbStyle"
        :style="height"
      )
        .q-pr-sm(
          v-html="item.description"
          ref="scrollAreaTermContent"
        )
</template>

<script>
import data from '../../data'
import { dom } from 'quasar'

export default {
  name: 'TermItem',
  data () {
    return {
      data,
      scrollPosition: 0,
      needScroll: false,
      realHeight: 0
    }
  },
  computed: {
    item () {
      return data[this.$heroes.route.params.category][this.$heroes.route.params.section][this.$heroes.route.params.item]
    },
    height () {
      return { height: `${768 * 0.68}px` }
    }
  },
  methods: {
    animateScroll (topDirection = true) {
      const el = this.$refs.scrollAreaTerm
      const containerHeight = el.containerHeight
      this.scrollPosition = el.getScrollPosition()
      this.scrollPosition += topDirection ? -(containerHeight * 0.85) : containerHeight * 0.85
      el.setScrollPosition(this.scrollPosition, 500)
    },
    goToStartScroll () {
      this.$nextTick(() => {
        const el = this.$refs.scrollAreaTerm
        const content = this.$refs.scrollAreaTermContent
        this.needScroll = dom.height(content) > el.containerHeight
        if (el.setScrollPosition) el.setScrollPosition(0)
      })
    }
  },
  watch: {
    '$heroes.route.params.item': {
      handler: function (v) {
        this.goToStartScroll()
      },
      immediate: true
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
