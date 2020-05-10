<template lang="pug">
  .persons-list.full-width
    q-carousel(
      ref="carouselForPersons"
      :height="height"
      v-model="slide"
      :transition-prev="transition ? 'slide-right' : 'fade'"
      :transition-next="transition ? 'slide-left' : 'fade'"
      animated
    )
      template(v-for="slideNumber in arrOfSlides")
        q-carousel-slide.q-py-none.q-px-none.text-white.flex.justify-center.items-start(:name="slideNumber")
          q-scroll-area.full-width.text-shadow(
            ref="scrollAreaPersons"
            :thumb-style="$app.layout.thumbStyle"
            :style="{ height: heightForScroll }"
          )
            q-list.row
              .col-6(:class="'q-pr-sm'")
                template(v-for="(item, index) in getItems(itemsForThisSlide(slideNumber), true)")
                  ItemPerson(:item="item" :index="index")
              .col-6(:class="'q-pl-sm'")
                template(v-for="(item, index) in getItems(itemsForThisSlide(slideNumber), false)")
                  ItemPerson(:item="item" :index="index")
    .q-pt-sm.btns(v-if="amountOfSlides > 1")
      q-btn.q-mr-lg(
        @click="$refs.carouselForPersons.previous()"
        color="white"
        text-color="black"
        icon="arrow_left"
        round
      )
      q-btn(
        @click="$refs.carouselForPersons.next()"
        color="white"
        text-color="black"
        icon="arrow_right"
        round
      )
</template>

<script>
import sortBy from 'lodash/sortBy'
import data from '../../data'
import ItemPerson from './item'

export default {
  name: 'PersonsList',
  components: { ItemPerson },
  data () {
    return {
      slide: 0,
      transition: true,
      data
    }
  },
  computed: {
    height () {
      return `${768 * 0.63}px`
    },
    heightForScroll () {
      return `${(768 * 0.63) - 1}px`
    },
    amountOfSlides () {
      return Math.ceil(data[this.$app.heroes.route.params.category][this.$app.heroes.route.params.section].length / 16)
    },
    arrOfSlides () {
      const arr = []
      for (let i = 0; i < this.amountOfSlides; i++) {
        arr.push(i)
      }
      return arr
    }
  },
  methods: {
    itemsForThisSlide (slideNumber) {
      const arr = [...sortBy(data[this.$app.heroes.route.params.category][this.$app.heroes.route.params.section], ['name'])]
      return arr.splice(slideNumber * 16, 16)
    },
    goToStartSlide () {
      this.transition = false
      this.$nextTick(() => {
        this.slide = 0
        this.transition = true
      })
    },
    getItems (itemsArr, even) {
      const arr = []
      if (even) {
        for (let i = 0; i < itemsArr.length; i++) {
          if (i % 2 === 0) arr.push(itemsArr[i])
        }
      } else {
        for (let i = 0; i < itemsArr.length; i++) {
          if (i % 2 !== 0) arr.push(itemsArr[i])
        }
      }
      return arr
    },
    goToStartScroll () {
      this.$nextTick(() => {
        const el = this.$refs.scrollAreaPersons
        if (el.setScrollPosition) el.setScrollPosition(0)
      })
    }
  },
  watch: {
    '$app.heroes.route.params.section' (v) {
      this.goToStartSlide()
    },
    slide (v) {
      this.goToStartScroll()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
