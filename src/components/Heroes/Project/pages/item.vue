<template lang="pug">
  .heroes-page.category-item.column.top-padding-for-header
    .col-auto
      .header-top(:class="isBigTitle ? 'big-header-title' : ''") {{header}}
    .col(:class="$heroes.route.params.category === 'persons' ? 'items-start' : 'items-end'")
      TermItem(v-if="$heroes.route.params.category === 'terms'")
      PersonItem(v-if="$heroes.route.params.category === 'persons'")
    .col-auto.flex.items-end(:style="{ maxHeight: '68px' }")
      NavNeighbors(:neighbors="neighbors")
</template>

<script>
import sortBy from 'lodash/sortBy'
import TermItem from '../components/Terms/term'
import NavNeighbors from '../components/NavNeighbors/index'
import data from '../data'
import PersonItem from '../components/Persons/person'

export default {
  name: 'HeroesProjectItemPage',
  components: { PersonItem, NavNeighbors, TermItem },
  computed: {
    header () {
      if (this.$heroes.route.params.category === 'terms') {
        return data.terms[this.$heroes.route.params.section][this.$heroes.route.params.item].name
      } else {
        return data.categories.find(i => i.name === this.$heroes.route.params.category).label
      }
    },
    isBigTitle () {
      if (this.$heroes.route.params.category === 'terms') {
        // eslint-disable-next-line no-prototype-builtins
        return (data.terms[this.$heroes.route.params.section][this.$heroes.route.params.item].hasOwnProperty('big') &&
          data.terms[this.$heroes.route.params.section][this.$heroes.route.params.item].big)
      }
      return false
    },
    neighbors () {
      const openedObjName = data[this.$heroes.route.params.category][this.$heroes.route.params.section][this.$heroes.route.params.item].name
      const sortedArr = [...sortBy(data[this.$heroes.route.params.category][this.$heroes.route.params.section], ['name'])]
      const indexOfOpenedInSortedArr = sortedArr.findIndex(item => item.name === openedObjName)
      let arrOfObj = []
      const result = []
      if (indexOfOpenedInSortedArr === 0) {
        arrOfObj = [{ name: '' }].concat(sortedArr.splice(0, 2))
      } else if (indexOfOpenedInSortedArr === (sortedArr.length - 1)) {
        arrOfObj = sortedArr.splice(sortedArr.length - 2, 2).concat([{ name: '' }])
      } else {
        arrOfObj = sortedArr.splice(indexOfOpenedInSortedArr - 1, 3)
      }
      for (const obj of arrOfObj) {
        result.push(obj.name)
      }
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
