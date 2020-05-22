<template lang="pug">
  .heroes-page.column
    .col.relative-position
      .heroes.absolute-top-left.full-width.full-height.row
        Person(
          v-for="(hero, index) in heroes"
          :hero="hero"
          :index="index"
          :key="index"
        )
    .col-auto
      Nav
    .col-auto
      NavSmall
</template>

<script>
import data from '../data'
import Person from '../components/Person/index'
import Nav from '../components/Nav/index'
import NavSmall from '../components/NavSmall/index'
export default {
  name: 'HeroesProjectSectionPage',
  components: { NavSmall, Nav, Person },
  data () {
    return {
    }
  },
  computed: {
    heroes () {
      const heroes = data.heroes[this.$heroes.route.params.section]
      return heroes || []
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
</style>
