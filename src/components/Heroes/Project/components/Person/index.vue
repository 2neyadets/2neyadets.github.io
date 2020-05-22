<template lang="pug">
  .hero.col.row.relative-position.full-height
    q-dialog(v-model="dialog" content-class="heroes__dialog" persistent full-height full-width)
      HeroMediaItem(@onClose="update" :item="media")

    .hero__left.col.relative-position.full-height.cursor-pointer(
      @click="openVideo('about', `0${ index + 1 }`, index)"
      v-ripple
    )
      q-img.full-height(:src="`statics/heroes/face/${$heroes.route.params.section}/${hero.photo}`")
      .absolute-bottom-left
        .play.relative-position
          .play__img.absolute-left.flex.justify-center.items-center
            q-img(:src="`statics/heroes/face/triangleNormal.png`")
    .hero__separator
      q-separator.full-height(vertical color="white")
    .hero__right.col.q-pa-md.full-height
      .hero__right_names.bg-white.q-px-md.q-py-sm.rounded
        .hero__right_firstname {{hero.firstname}}
        .hero__right_lastname {{hero.lastname}}
      .hero__right_life.bg-white.q-px-md.q-py-sm.rounded
        span {{hero.life}}
      .hero__right_select
        q-btn.full-width(
          label="Вопросы"
          outline
          color="white"
          align="between"
          :icon-right="open ? 'keyboard_arrow_down' : 'keyboard_arrow_left'"
          @click="open = !open"
        )

      transition(name="fade")
        .hero__right_numbers(v-if="open")
          .row.justify-start.gutter
            template(v-for="(item, i) in arrayOfQuestions")
              Button(:label="i" :questionValue="item" @onClick="openVideo('question', `0${ index + 1 }`, i)" :hero="`0${ index + 1 }`")
</template>

<script>
import Button from './Button'
import HeroMediaItem from './Media'

export default {
  name: 'Person',
  components: { HeroMediaItem, Button },
  props: {
    hero: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  },
  data () {
    return {
      open: false,
      dialog: false,
      media: null,
      arrayOfQuestions: [],
      options: []
    }
  },
  mounted () {
    this.update()
  },
  methods: {
    openVideo (type, heroIndex, questionsIndex) {
      this.media = { type, heroIndex, questionsIndex }
      this.dialog = true
    },
    update () {
      this.dialog = false
      this.arrayOfQuestions = []
      this.$nextTick(() => {
        this.arrayOfQuestions = this.$heroes.culture[`0${this.index + 1}`]
      })
    },
    address () {
      return `$app.questions.${this.$heroes.route.params.section}`
    }
  },
  watch: {
    '$heroes.route.params.section' (v) {
      this.open = false
      this.update()
    }
  }
}
</script>

<style lang="stylus">
  .hero
    color black
    overflow hidden
    line-height 1

    .fade-enter-active, .fade-leave-active
      transition opacity .5s
    .fade-enter, .fade-leave-to
      opacity 0

    &__left

      .play
        margin 0 0 10px 10px
        border-radius 50%
        background rgba(0, 0, 0, 0.5)
        transition background .2s linear
        width 110px
        height 110px

        &__img
          left 35px

          .q-img
            width 56px

      .play:hover
        background black

    &__separator

      .q-separator
        margin-top 35px

      .q-separator--vertical
        width 2px

    &__right

      .rounded
        border-radius 3px

      &_names
        margin-top 35px
        margin-bottom 10px
        padding 14px 16px 19px

      &_firstname
        margin-bottom 13px

      &_firstname, &_life
        font-size 21px

      &_lastname
        text-transform uppercase
        font-weight bold
        font-size 19px

      &_life
        display: inline-block
        background rgba(white, 0.9)
        margin-bottom: 20px
      &_life > span
        .app-win &
          position: relative
          top 2px

      &_select
        .q-btn

          &--outline
            background-color rgba(0, 0, 0, 0.25) !important

          &--rectangle
            border-radius 3px

          &__wrapper
            padding 0 13px
            min-height 44px
            line-height 44px

          &__content
            font-weight bold
            font-size 21px
            & > span
              .app-win &
                position: relative
                top 2px

      &_numbers
        margin-top 12px

        .q-btn__wrapper
          min-height 47px
          min-width 47px
          line-height 1

  .hero:last-child

    .hero__right
      padding-right 0
</style>
