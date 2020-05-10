<template lang="pug">
  .title.flex.flex-center(@click="click")
    .column
      q-img.title__logo(
        src="statics/heroes/title/cover_logo.png"
      )
      .title__link.text-center
        .title__dates
          .text-white 1917–1921гг.
      .title__info.text-center
        .title__info
          .text-white Нажмите, чтобы продолжить
</template>

<script>
import { debounce } from 'quasar'

export default {
  name: 'HeroesProjectTitlePage',
  created () {
    this.click = debounce(this.handler, 500)
  },
  methods: {
    handler () {
      this.$app.heroes.route.path = '/section'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    width 100%
    height 100%
    background url("../../../../statics/heroes/title/cover_main.jpg") no-repeat center center
    cursor: pointer
    &__link
      text-decoration none
      width auto
    &__dates
      margin 30px 0
      font-weight 700
      display inline-block
      border 1px solid white
      border-left none
      border-right none
      padding 27px 0
      width 360px
      height 112px
      font-size 45px
      line-height 1.1
      & > div
        .app-win &
          position: relative
          top 9px
    &__info
      text-transform uppercase
    &__logo
      width 752px
      height 290px
</style>
