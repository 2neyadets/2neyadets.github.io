<template lang="pug">
  .nav-neighbors.row.justify-between.items-end.full-width
    .col-1.flex.justify-start.items-end
      NavSmallButtonBack
    .col-11.neighbors
      q-btn-group(stretch spread unelevated)
        template(v-for="(neighbor, index) in neighbors")
          template(v-if="neighbor === ''")
            .empty.q-mx-xs
          template(v-else)
            q-btn.q-mx-xs(
              :label="$heroes.route.params.category === 'persons' ? getAbbreviatedName(neighbor) : neighbor"
              :class="className(neighbor)"
              :style="{ minHeight: '68px' }"
              no-caps
              @click="() => click(neighbor)"
            )
          q-separator(v-if="index < neighbors.length - 1" vertical inset)
</template>

<script>
import NavSmallButtonBack from '../NavSmall/ButtonBack'
import data from '../../data'

export default {
  name: 'NavNeighbors',
  components: { NavSmallButtonBack },
  props: {
    neighbors: {
      type: Array,
      required: true
    }
  },
  computed: {
    parentPath () {
      const arr = this.$route.fullPath.split('/')
      arr.splice(arr.length - 1, 1)
      return arr.join('/')
    }
  },
  methods: {
    className (neighbor) {
      const { big } = data[this.$heroes.route.params.category][this.$heroes.route.params.section].find(item => item.name === neighbor)
      return (Number(this.$heroes.route.params.item) === this.findIndexOfItem(neighbor) ? 'active-item' : '') +
        (big ? ' big-title' : '')
    },
    click (neighbor) {
      const arr = this.$heroes.route.path.split('/')
      arr.pop()
      this.$heroes.route.path = arr.join('/') + '/' + this.findIndexOfItem(neighbor)
    },
    findIndexOfItem (name) {
      return data[this.$heroes.route.params.category][this.$heroes.route.params.section].findIndex(item => item.name === name)
    },
    getAbbreviatedName (name) {
      if (name) {
        const arr = name.split(' ')
        return `${arr[0]} ${arr[1][0]}.${arr[2][0]}.`
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
