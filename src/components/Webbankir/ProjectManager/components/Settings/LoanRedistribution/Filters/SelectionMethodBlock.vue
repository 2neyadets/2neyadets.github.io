<template lang="pug">
  .selection-method__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.selectionMethod')}}
    .flex.justify-center.items-center.full-width
      q-select.max-h-75px.min-w-200px.full-width.q-px-md(
        transition-show="fade"
        transition-hide="fade"
        v-model="$managerWB.loanRedistribution.filters.selectionMethodObj"
        :options="optionsForSelectionMethod"
        standout="bg-WB-secondary text-WB-secondary"
        dense
        dark
        outlined
        color="WB-secondary"
        popup-content-class="bg-WB-dark text-white"
        options-dense
      )
</template>

<script>
export default {
  name: 'SelectionMethodBlock',
  data () {
    return {}
  },
  created () {
  },
  computed: {
    optionsForSelectionMethod () {
      return ['risingDebt', 'descendingDebt', 'risingDelay', 'descendingDelay', 'withoutSort'].map(string => {
        return {
          label: this.$t('loanRedistribution.filters.selectionMethod.' + string),
          value: string
        }
      })
    },
  },
  methods: {}
}
</script>

<style lang="stylus">
</style>
