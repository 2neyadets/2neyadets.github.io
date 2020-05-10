<template lang="pug">
  .dialog-maps.full-width.full-height.q-pl-xs.q-pb-xs
    .row.full-width.full-height
      .col-auto
        .column.full-height
          .col.column.justify-end.map-nav__column
            template(v-for="index in offsetArr.length")
              q-btn.map-nav-btn.nav-btn.q-mb-lg(
                @click="changeCurrent(index)"
                :label="index"
                :color="current !== index ? '' : 'white'"
                :text-color="current !== index ? 'white' : 'black'"
                :outline="current !== index"
                unelevated
              )
          .col-auto.flex.justify-start.items-end
            q-btn.map-nav-btn.margin-for-nav(
              @click="close"
              icon="close"
              color="white"
              outline
              unelevated
            )
      .col
        .column.full-height
          .col.flex.justify-start.items-end(ref="imgContainer")
            .relative-position.flex.justify-center.items-end
              img(
                :style="{ maxHeight: height }"
                :src="designations ? `statics/heroes/maps/${$app.heroes.route.params.section}/legend.jpg` : `statics/heroes/maps/${$app.heroes.route.params.section}/${current}.jpg`"
              )
              .copyright.absolute-bottom-left.flex.justify-start.items-center.q-px-md.q-py-sm
                span &copy;&nbsp;
                span РОСРЕЕСТР, {{copyright}}
          .col-auto.flex.justify-start.items-end
            q-btn.map-nav-btn.q-px-md.margin-for-nav(
              @click="designations = !designations"
              label="Обозначения"
              :color="!designations ? '' : 'white'"
              :text-color="!designations ? 'white' : 'black'"
              :outline="!designations"
              unelevated
            )
</template>

<script>
import data from '../../data'

export default {
  name: 'DialogMaps',
  props: {
    mapIndex: {
      type: Number,
      required: true
    },
    designationsProp: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      current: this.mapIndex,
      // height: 0,
      designations: false
    }
  },
  mounted () {
    if (this.designationsProp) this.designations = true
  },
  computed: {
    height () {
      return `${768 * 0.8}px`
    },
    offsetArr () {
      return data.markersForMaps[this.$app.heroes.route.params.section].small
    },
    copyright () {
      return data.markersForMaps[this.$app.heroes.route.params.section].copyright
    }
  },
  methods: {
    close () {
      this.$emit('onClose')
    },
    changeCurrent (index) {
      this.$nextTick(function () {
        this.current = index
        this.designations = false
      })
    }
  },
  watch: {
    '$q.screen.height' (v) {
      this.height = this.$refs.imgContainer.clientHeight
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
