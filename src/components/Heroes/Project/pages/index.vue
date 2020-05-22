<template lang="pug">
  .video(@click="onVideoEnded")
    video(
      @ended="onVideoEnded"
      src="statics/heroes/videos/start.mp4"
      autoplay
    )
</template>

<script>
export default {
  name: 'HeroesProjectIndexPage',
  created () {
    this.$heroes.route.path = '/'
  },
  methods: {
    onVideoEnded () {
      this.$heroes.route.path = '/title'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
