<template lang="pug">
  .maps.full-width.full-height.row(:style="{ height: height }")
    .col-auto.flex.items-end
      .column.maps-nav__column
        template(v-for="index in offsetArr.length")
          q-btn.map-nav-btn.nav-btn(
            @click="openDialog(index)"
            :label="index"
            :class="index === offsetArr.length ? '' : 'q-mb-lg'"
            color="white"
            outline
            unelevated
          )
    .col.map.flex.justify-start.items-center
      .relative-position.flex.justify-center.items-center(ref="mainMapRelative")
        .map__container.flex.items-end(ref="mapContainer")
          img.mainMap(
            ref="mainMap"
            id="mainMap"
            :src="designationsProp ? `statics/heroes/maps/${$app.heroes.route.params.section}/legend.jpg` : imgSrc"
            :style="{ maxHeight: height }"
          )
          .copyright.absolute-bottom-left.flex.justify-start.items-center.q-px-md.q-py-sm
            span &copy;&nbsp;
            span РОСРЕЕСТР, {{copyright}}
        template(v-for="index in offsetArr.length")
          .clickable-area.cursor-pointer(
            v-if="!designationsProp"
            @click="openDialog(index)"
            :style="getOffsetForMark(index)"
            :class="'small-padding-area'"
          )
            q-btn.my-btn(:label="index")
        .clickable-area.clickable-area__legend.cursor-pointer(
          v-if="!designationsProp"
          @click="openDialog(1, true)"
          :style="getLegendOffset($app.heroes.route.params.section)"
          :class="'small-padding-area'"
        )
    q-dialog(v-model="dialog" content-class="heroes__dialog" full-width full-height persistent)
      DialogMaps(:mapIndex="mapIndex" @onClose="dialog = !dialog" :designationsProp="designations")
</template>

<script>
import data from '../../data'
import DialogMaps from './DialogMaps'
import { dom } from 'quasar'
const { height, width } = dom

export default {
  name: 'Maps',
  components: { DialogMaps },
  props: {
    designationsProp: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      imgWidth: 0,
      imgHeight: 0,
      dialog: false,
      mapIndex: 0,
      designations: false
    }
  },
  created () {
    this.updateImg()
  },
  updated () {
    this.updateImg()
  },
  computed: {
    imgSrc () {
      return `statics/heroes/maps/${this.$app.heroes.route.params.section}.jpg`
    },
    height () {
      return `${768 * 0.7}px`
    },
    offsetArr () {
      return data.markersForMaps[this.$app.heroes.route.params.section].small
    },
    copyright () {
      return data.markersForMaps[this.$app.heroes.route.params.section].copyright
    }
  },
  methods: {
    updateImg () {
      const img = new Image()
      img.onload = () => {
        const el = this.$refs.mainMap
        this.imgWidth = width(el)
        this.imgHeight = height(el)
      }
      img.onerror = function () {
        alert('not a valid file')
      }
      img.src = this.imgSrc
    },
    getOffsetForMark (index) {
      const obj = this.offsetArr[index - 1]
      return {
        left: `${obj.left * this.imgWidth}px`,
        top: `${obj.top * this.imgHeight}px`
      }
    },
    getLegendOffset (section) {
      switch (section) {
        case 'war':
          return {
            left: `${this.imgWidth * 0.722}px`,
            top: `${this.imgHeight * 0.744}px`,
            paddingTop: 0,
            paddingRight: `${this.imgWidth * 0.252}px`,
            paddingBottom: `${this.imgHeight * 0.19}px`,
            paddingLeft: 0
          }
        case 'politics':
          return {
            left: `${this.imgWidth * 0.033}px`,
            top: `${this.imgHeight * 0.795}px`,
            paddingTop: 0,
            paddingRight: `${this.imgWidth * 0.29}px`,
            paddingBottom: `${this.imgHeight * 0.162}px`,
            paddingLeft: 0
          }
        case 'economic':
          return {
            left: `${this.imgWidth * 0.02}px`,
            top: `${this.imgHeight * 0.91}px`,
            paddingTop: 0,
            paddingRight: `${this.imgWidth * 0.961}px`,
            paddingBottom: `${this.imgHeight * 0.08}px`,
            paddingLeft: 0
          }
        case 'culture':
          return {
            left: `${this.imgWidth * 0.513}px`,
            top: `${this.imgHeight * 0.795}px`,
            paddingTop: 0,
            paddingRight: `${this.imgWidth * 0.258}px`,
            paddingBottom: `${this.imgHeight * 0.148}px`,
            paddingLeft: 0
          }
      }
    },
    updateWidthAndHeight () {
      const el = this.$refs.mainMap
      this.imgWidth = width(el)
      this.imgHeight = height(el)
    },
    openDialog (index, designations = false) {
      this.$nextTick(function () {
        this.designations = designations
        this.mapIndex = index
        this.dialog = true
      })
    }
  },
  watch: {
    '$q.screen.width' (v) {
      this.updateWidthAndHeight()
    },
    '$q.screen.height' (v) {
      this.updateWidthAndHeight()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
