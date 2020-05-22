<template lang="pug">
  .chronic__item.full-width.full-height.q-pl-xs.q-pb-xs
    .column.full-width.full-height
      .col.flex.justify-center.items-center.chronic__item_media-container.q-mb-md(ref="testItemMediaContainer")
        video.full-width(
          :src="path"
          :style="{ maxHeight: `${height}px` }"
          autoplay
          controls
          controlsList="nodownload"
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
</template>

<script>
export default {
  name: 'HeroMediaItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      height: 0,
    }
  },
  computed: {
    path () {
      const { type, heroIndex, questionsIndex } = this.item
      const base = `statics/heroes/videos/persons/${this.$heroes.route.params.section}/${heroIndex}/`
      if (type === 'about') {
        return base + 'about.mp4'
      } else {
        return base + `question-${questionsIndex + 1}.mp4`
      }
    }
  },
  mounted () {
    this.height = this.$refs.testItemMediaContainer.clientHeight
  },
  methods: {
    close () {
      this.$emit('onClose')
    },
  },
  watch: {
    '$q.screen.height' (v) {
      this.height = this.$refs.testItemMediaContainer.clientHeight
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
