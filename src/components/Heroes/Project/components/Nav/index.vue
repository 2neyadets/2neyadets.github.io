<template lang="pug">
  .nav-big
    NavSmallArrows(:arrows="arrows" @click="click")
    .nav-big__content(ref="content")
      .nav-big__content-wrapper(
        ref="wrapper"
        v-touch-swipe.mouse.right.left="handleSwipe"
      )
        q-btn(
          :class="{active: tab.name === current}"
          :disable="tab.name !== 'culture'"
          v-for="tab in tabs"
          :ref="'btn_' + tab.name"
          :key="tab.name"
          :name="tab.name"
          :label="tab.label"
          flat
          @click="tab.name !== current && click(tab.name)"
        )

</template>

<script>
import { dom } from 'quasar'
import NavSmallArrows from './Arrows'
import sections from '../../data/sections'

export default {
  name: 'Nav',
  components: { NavSmallArrows },
  data () {
    return {
      arrows: {
        left: '',
        right: ''
      },
      sections: [],
      swipeInfo: null
    }
  },
  mounted () {
    this.sections = [...sections.map(({ name, label }) => ({ name, label }))]
    this.setCurrent(this.current)
    setTimeout(() => this.setCurrent(this.current), 150)
  },
  computed: {
    tabs () {
      return this.sections
    },
    current () {
      return this.$heroes.route.params.section
    }
  },
  methods: {
    handleSwipe ({ evt, ...info }) {
      this.swipeInfo = info
    },
    setCurrent (v) {
      const sections = [...this.sections]
      const index = sections.findIndex(i => i.name === v)
      const removed = sections.splice(index - 1)
      this.sections = [...removed, ...sections]
      this.arrows = Object.assign({}, { left: this.sections[0].name, right: this.sections[2].name })

      this.$nextTick(function () {
        const prevName = this.sections[0].name
        const prevEl = this.$refs['btn_' + prevName][0].$el
        const diff = (dom.width(prevEl)) * -1
        dom.css(this.$refs.wrapper, { left: diff + 'px' })
      })
    },
    click (v) {
      this.setCurrent(v)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
