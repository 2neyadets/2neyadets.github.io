<template lang="pug">
  .chronicle-list.full-width(ref="chronicleList")
    q-scroll-area(
      horizontal
      ref="scrollAreaChronicle"
      :thumb-style="$app.layout.thumbStyle"
      :style="scrollStyle"
    )
      .full-height.flex.items-center.left-padding.right-padding
        .media__container(ref="mediaContainer" :style="containerStyle")
          template(v-for="(item, index) in items")
            template(v-if="item.type === filter || filter === 'ВСЕ'")
              .media__block.inline.q-ml-xl.relative-position(@click="openDialog(index)")
                q-img.cursor-pointer(
                  :src="`statics/heroes/chronic/${$app.heroes.route.params.section}/${item.prev}`"
                  :key="item.caption + index"
                  :style="{ height: `${sideSize}px`, width: `${sideSize}px` }"
                )
                  .caption.absolute-bottom.flex.justify-start.items-center {{item.caption}}
                .media__block_type.cursor-pointer
                  .media__block_helper.flex.justify-center.items-center
                    q-icon(:name="item.type" color="white")
    .scroll-control.left-padding
      .q-pt-sm.row.justify-start.items-center
        q-btn.q-mr-lg(
          @click="animateScroll(true)"
          color="white"
          text-color="black"
          icon="arrow_left"
          round
        )
        q-btn(
          @click="animateScroll(false)"
          color="white"
          text-color="black"
          icon="arrow_right"
          round
        )
    q-dialog(v-model="dialog" content-class="heroes__dialog" full-width full-height persistent)
      ChronicItem(:index="mediaIndex" @onClose="dialog = !dialog")
</template>

<script>
import data from '../../data'
import ChronicItem from './ChronicItem'

export default {
  name: 'ChronicleList',
  components: { ChronicItem },
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      mounted: false,
      dialog: false,
      mediaIndex: 0,
      itemsCount: 0
    }
  },
  mounted () {
    this.mounted = true
    this.itemsCount = this.$refs.mediaContainer.childElementCount
  },
  computed: {
    sideSize () {
      return 480
    },
    scrollStyle () {
      return {
        height: `${this.sideSize}px`,
        // width: `${this.$q.screen.width * 0.916}px`
      }
    },
    containerStyle () {
      return {
        height: `${this.sideSize}px`,
        width: `${((this.sideSize) * (this.mounted ? this.itemsCount : this.items.length)) + (((this.mounted ? this.itemsCount : this.items.length) - 1) * 48)}px`
      }
    },
    items () {
      return data[this.$app.heroes.route.params.category][this.$app.heroes.route.params.section]
    }
  },
  methods: {
    animateScroll (topDirection = true) {
      const el = this.$refs.scrollAreaChronicle
      const containerWidth = el.containerWidth
      let scrollPosition = el.getScrollPosition()
      scrollPosition += topDirection ? -(containerWidth * 0.333) : containerWidth * 0.333
      el.setScrollPosition(scrollPosition, 500)
    },
    goToStartScroll () {
      this.$nextTick(() => {
        const el = this.$refs.scrollAreaChronicle
        if (el.setScrollPosition) el.setScrollPosition(0)
      })
    },
    updateItemsCount () {
      this.$nextTick(() => {
        this.itemsCount = this.$refs.mediaContainer.childElementCount
      })
    },
    openDialog (index) {
      this.mediaIndex = index
      this.dialog = true
    }
  },
  watch: {
    filter (v) {
      this.updateItemsCount()
      this.goToStartScroll()
    },
    '$app.heroes.route.params.section' (v) {
      this.updateItemsCount()
      this.goToStartScroll()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
