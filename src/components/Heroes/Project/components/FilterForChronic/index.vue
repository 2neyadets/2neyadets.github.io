<template lang="pug">
  .filter-for-chronic.row
    template(v-for="tab in items")
      FilterForChronicButtonItem(
        @click="changeFilter"
        :item="tab"
        :key="tab"
        :filter="filter"
      )
</template>

<script>
import FilterForChronicButtonItem from './ButtonItem'

export default {
  name: 'FilterForChronic',
  components: { FilterForChronicButtonItem },
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      items: [
        'ВСЕ',
        'headset',
        'videocam',
        'photo'
      ]
    }
  },
  methods: {
    changeFilter (item) {
      this.$emit('onFilterChange', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
