<template lang="pug">
  .nav-small.full-width
    template(v-if="!$app.heroes.route.params.category")
      .row.items-center.justify-between
        .col
          NavSmallButtonBack
          template(v-for="tab in items")
            NavSmallButtonItem(:item="tab" :key="tab.name")
    template(v-else)
      .row.items-center.justify-start
        .col
          NavSmallButtonBack
          template(v-for="tab in items")
            NavSmallButtonItem(:item="tab" :key="tab.name")
        .col-auto(v-if="$app.heroes.route.params.category === 'chronic'")
          FilterForChronic(
            @onFilterChange="changeFilter"
            :filter="filter"
          )
        .col-auto(v-if="$app.heroes.route.params.category === 'maps'")
          q-btn.nav-small__button(
            @click="changeDesignations"
            label="Обозначения"
            :color="!designations ? '' : 'white'"
            :text-color="!designations ? 'white' : 'black'"
            :outline="!designations"
            unelevated
          )
</template>

<script>
import NavSmallButtonBack from './ButtonBack'
import NavSmallButtonItem from './ButtonItem'
import FilterForChronic from '../FilterForChronic/index'
import data from '../../data'

export default {
  name: 'NavSmall',
  components: { FilterForChronic, NavSmallButtonItem, NavSmallButtonBack },
  props: {
    filter: {
      type: String,
      required: false
    },
    designations: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    items () {
      if (this.$app.heroes.route.params.category) {
        return data.sections
      }
      return data.categories
    }
  },
  methods: {
    changeFilter (item) {
      this.$emit('onFilterChange', item)
    },
    changeDesignations () {
      this.$emit('onDesignationsChange')
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
