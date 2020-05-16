<template lang="pug">
  .chronic__item.full-width.full-height.q-pl-xs.q-pb-xs
    .column.full-width.full-height
      .col.flex.justify-center.items-center.chronic__item_media-container.q-mb-md(ref="chronicItemMediaContainer")
        template(v-if="contentObj.type === 'photo'")
          q-img(
            :src="`statics/heroes/chronic/${$app.heroes.route.params.section}/${contentObj.content}`"
            :style="{ maxHeight: `${height}px` }"
            contain
          )
        template(v-else)
          video.full-width(
            :src="`statics/heroes/chronic/${$app.heroes.route.params.section}/${contentObj.content}`"
            :style="{ maxHeight: `${height}px` }"
            autoplay
            controls
          )
      .col-auto.row
        .col-auto.flex.justify-start.items-end
          q-btn.close-btn(
            @click="close"
            icon="close"
            color="white"
            outline
            unelevated
          )
        .col.flex.justify-center.items-end
          .q-pa-none.text-white {{contentObj.caption}}
</template>

<script>
import data from '../../data'

export default {
  name: 'ChronicItem',
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      height: 0,
    }
  },
  mounted () {
    this.height = this.$refs.chronicItemMediaContainer.clientHeight
  },
  computed: {
    contentObj () {
      return data[this.$app.heroes.route.params.category][this.$app.heroes.route.params.section][this.index]
    }
  },
  methods: {
    close () {
      this.$emit('onClose')
    },
  },
  watch: {
    '$q.screen.height' (v) {
      this.height = this.$refs.chronicItemMediaContainer.clientHeight
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
