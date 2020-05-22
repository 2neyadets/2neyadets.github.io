<template lang="pug">
  .item-term
    q-item.q-pa-md.link(
      @click="goToPerson(item)"
      :class="'q-py-md'"
      :key="item.name + index"
      clickable
      v-ripple
    )
      q-item-section {{item.name}}
</template>

<script>
import data from '../../data'

export default {
  name: 'ItemTerm',
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToPerson (item) {
      this.$heroes.route.path = this.$heroes.route.path + '/' + this.findIndexOfItem(item)
    },
    findIndexOfItem (obj) {
      return data[this.$heroes.route.params.category][this.$heroes.route.params.section].findIndex(item => item.name === obj.name)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
