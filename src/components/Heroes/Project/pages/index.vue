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
    this.$app.heroes.route.path = '/'
  },
  methods: {
    onVideoEnded () {
      this.$app.heroes.route.path = '/title'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
