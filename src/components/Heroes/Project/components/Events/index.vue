<template lang="pug">
  .events.row.content-between.full-width.full-height
    .col-auto.flex.justify-start.items-center
      .scroll-control
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
    .col.flex.justify-center.items-center
      q-timeline.border-for-scroll.q-mr-lg.q-my-none(
        layout="comfortable"
        side="right"
        color="white"
        :class="'changing-size-md'"
      )
        q-scroll-area.text-shadow(
          ref="scrollAreaEvents"
          :thumb-style="$app.layout.thumbStyle"
          :style="height"
        )
          template(v-for="(event, index) in data.events[$app.heroes.route.params.section]")
            q-timeline-entry(
              :key="event.date + index"
              :title="event.event"
            )
              template(slot="subtitle")
                span.date( v-html="event.date")
</template>

<script>
import data from '../../data'

export default {
  name: 'Events',
  data () {
    return {
      data,
      scrollPosition: 0
    }
  },
  computed: {
    height () {
      return { height: `${768 * 0.71}px` }
    }
  },
  methods: {
    animateScroll (topDirection = true) {
      const el = this.$refs.scrollAreaEvents
      const containerHeight = el.containerHeight
      this.scrollPosition = el.getScrollPosition()
      this.scrollPosition += topDirection ? -(containerHeight * 0.75) : containerHeight * 0.75
      el.setScrollPosition(this.scrollPosition, 500)
    },
    goToStartScroll () {
      this.$nextTick(() => {
        const el = this.$refs.scrollAreaEvents
        if (el.setScrollPosition) el.setScrollPosition(0)
      })
    },
  },
  watch: {
    '$app.heroes.route.params.section' (v) {
      this.goToStartScroll()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
