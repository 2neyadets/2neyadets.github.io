<template lang="pug">
  q-page
    q-intersection(
      v-for="index in 4"
      :key="index"
      :ref="'intersection' + index"
      :id="'intersection' + index"
      transition="fade"
      class="intersection-item"
      once
    )
      Start

    q-page-sticky(
      v-if="$app.layout.scroll.position.current + 5 >= $app.layout.getCurrentHeight()"
      position="top"
      :offset="[0, 2]"
    )
      q-btn.full-width(
        @click="goToSection(false)"
        :class="bounce.top ? 'bounce-down' : ''"
        :color="$app.layout.activeColor"
        :disable="!$app.layout.scroll.ready"
        size="sm"
        flat
        round
      )
        q-icon(name="keyboard_arrow_up" style="font-size: 28px;")

    q-page-sticky(
      v-if="$app.layout.scroll.position.current - 5 <= $app.layout.scroll.position.max - $app.layout.getCurrentHeight()"
      position="bottom"
      :offset="[0, 2]"
    )
      q-btn.full-width(
        @click="goToSection(true)"
        :class="bounce.bottom ? 'bounce-up' : ''"
        :color="$app.layout.activeColor"
        :disable="!$app.layout.scroll.ready"
        size="sm"
        flat
        round
      )
        q-icon(name="keyboard_arrow_down" style="font-size: 28px;")

</template>

<script>
import Start from '../components/Start/index'

export default {
  name: 'PageIndex',
  components: { Start },
  data () {
    return {
      bounce: {
        top: true,
        bottom: true,
      }
    }
  },
  methods: {
    goToSection (downDirection) {
      if (downDirection) {
        this.bounce.bottom = false
      } else {
        this.bounce.top = false
      }
      this.$app.layout.goToSection(downDirection)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bounce
    &-up
      animation bounceBtnUp .5s ease-in-out 0s 6
      &:hover
        animation-play-state: paused
    &-down
      animation bounceBtnDown .5s ease-in-out 0s 6
      &:hover
        animation-play-state: paused

  @keyframes bounceBtnUp {
    0% {
      bottom: 0
    }
    50% {
      bottom: 5px
    }
    100% {
      bottom: 0
    }
  }

  @keyframes bounceBtnDown {
    0% {
      bottom: 0
    }
    50% {
      bottom: -5px
    }
    100% {
      bottom: 0
    }
  }
</style>
