<template lang="pug">
  .gps__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.GPS')}}
    .flex.justify-around.items-center.q-ma-xs
      q-checkbox.q-mx-xs(
        v-model="$managerWB.loanRedistribution.filters.trash.all"
        @input="uncheck3('all')"
        :label="$t('loanRedistribution.filters.labels.all')"
        color="WB-primary"
        keep-color
      )
      q-checkbox.q-mx-xs(
        v-model="$managerWB.loanRedistribution.filters.trash.auto"
        @input="uncheck3('auto')"
        :label="$t('loanRedistribution.filters.labels.auto')"
        color="WB-primary"
        keep-color
      )
      q-checkbox.q-mx-xs(
        v-model="$managerWB.loanRedistribution.filters.trash.forced"
        @input="uncheck3('forced')"
        :label="$t('loanRedistribution.filters.labels.forced')"
        color="WB-primary"
        keep-color
      )
</template>

<script>
export default {
  name: 'GPSBlock',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    uncheck3 (source) {
      switch (source) {
        case 'all':
          this.$managerWB.loanRedistribution.filters.trash.auto = false
          this.$managerWB.loanRedistribution.filters.trash.forced = false
          break
        case 'auto':
          this.$managerWB.loanRedistribution.filters.trash.all = false
          this.$managerWB.loanRedistribution.filters.trash.forced = false
          break
        case 'forced':
          this.$managerWB.loanRedistribution.filters.trash.all = false
          this.$managerWB.loanRedistribution.filters.trash.auto = false
          break
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
