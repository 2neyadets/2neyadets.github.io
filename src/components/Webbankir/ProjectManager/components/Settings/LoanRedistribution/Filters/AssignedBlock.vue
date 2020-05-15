<template lang="pug">
  .assigned__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.assigned')}}
    .flex.justify-around.items-center.q-ma-xs
      q-checkbox.q-mx-xs(
        v-model="$managerWB.loanRedistribution.filters.assigned.yes"
        @input="uncheckAssigned(true)"
        :label="$t('loanRedistribution.filters.labels.yes')"
        color="positive"
        keep-color
      )
      q-checkbox.q-mx-xs(
        v-model="$managerWB.loanRedistribution.filters.assigned.no"
        @input="uncheckAssigned(false)"
        :label="$t('loanRedistribution.filters.labels.no')"
        color="negative"
        keep-color
      )
</template>

<script>
export default {
  name: 'AssignedBlock',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    uncheckAssigned (source) {
      if (source) {
        this.$managerWB.loanRedistribution.filters.assigned.no = false
      } else {
        this.$managerWB.loanRedistribution.filters.assigned.yes = false
      }
    },
  }
}
</script>

<style scoped lang="stylus">
</style>
