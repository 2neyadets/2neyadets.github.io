<template lang="pug">
  .heroes-page.category-index.column.top-padding-for-header(:class="$heroes.route.params.category === 'chronic' ? 'no-x-padding-page'  : ''")
    .col-auto(:class="$heroes.route.params.category === 'chronic' ? 'left-padding right-padding' : ''")
      .header-top {{header}}
    .col.flex(:class="($heroes.route.params.category === 'maps' || $heroes.route.params.category === 'events' || $heroes.route.params.category === 'chronic') ? 'items-end' : 'items-start'")
      Events(v-if="$heroes.route.params.category === 'events'")
      TermsList(v-if="$heroes.route.params.category === 'terms'")
      PersonsList(v-if="$heroes.route.params.category === 'persons'")
      Maps(v-if="$heroes.route.params.category === 'maps'" :designationsProp="designations")
      ChronicleList(v-if="$heroes.route.params.category === 'chronic'" :filter="currentFilter")
    .navigation.col-auto.flex.items-end(:class="$heroes.route.params.category === 'chronic' ? 'left-padding right-padding' : ''")
      NavSmall(
        @onFilterChange="changeFilter"
        @onDesignationsChange="changeDesignations"
        :filter="currentFilter"
        :designations="designations"
      )
</template>

<script>
import NavSmall from '../components/NavSmall/index'
import Nav from '../components/Nav/index'
import TermsList from '../components/Terms/index'
import Events from '../components/Events/index'
import data from '../data'
import PersonsList from '../components/Persons/index'
import Maps from '../components/Maps/index'
import ChronicleList from '../components/Chronicle/index'

export default {
  name: 'HeroesProjectCategoryPage',
  components: { ChronicleList, Maps, PersonsList, Events, TermsList, Nav, NavSmall },
  data () {
    return {
      currentFilter: 'ВСЕ',
      designations: false
    }
  },
  computed: {
    header () {
      const title = data.categories.find(i => i.name === this.$heroes.route.params.category)
      return title ? title.label : ''
    }
  },
  methods: {
    changeFilter (item) {
      this.currentFilter = item
    },
    changeDesignations () {
      this.designations = !this.designations
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
