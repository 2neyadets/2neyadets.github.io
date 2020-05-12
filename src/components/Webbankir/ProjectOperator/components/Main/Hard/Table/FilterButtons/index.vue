<template lang="pug">
  .table__top-buttons
    FilterButton.q-mr-sm(
      v-for="(f, index) in filters"
      :key="index"
      :name="f.name"
      :label="f.label"
      :active="$operatorWB.hard.activeTab"
      :count="$operatorWB.hard.counts && $operatorWB.hard.counts[f.name]"
      :disable="$operatorWB.hard.loading"
      @change="change"
    )
</template>

<script>
import FilterButton from './FilterButton'

export default {
  name: 'FilterButtons',
  components: { FilterButton },
  data () {
    return {
      filters: [
        {
          name: 'all',
          label: this.$t('hard.filters.all')
        },
        {
          name: 'new',
          label: this.$t('hard.filters.new')
        },
        {
          name: 'unhandled',
          label: this.$t('hard.filters.unhandled')
        },
        {
          name: 'promises',
          label: this.$t('hard.filters.promises')
        },
        {
          name: 'modified',
          label: this.$t('hard.filters.modified')
        },
        {
          name: 'agreements',
          label: this.$t('hard.filters.agreements')
        },
      ]
    }
  },
  methods: {
    change (v) {
      this.$emit('change', v)
    }
  }
}
</script>
