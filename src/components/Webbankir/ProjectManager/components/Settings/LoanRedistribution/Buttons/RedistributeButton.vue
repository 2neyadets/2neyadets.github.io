<template lang="pug">
  .redistribute__button
    q-btn(
      :color="$managerWB.loanRedistribution.dataForTable.length ? 'WB-secondary' : ''"
      :disable="!($managerWB.loanRedistribution.dataForTable.length)"
      :loading="$managerWB.loanRedistribution.loading.toFormMethod || $managerWB.loanRedistribution.loading.redistributeMethod"
      @click="$managerWB.loanRedistribution.sayApprove"
      icon-right="check"
    ) {{$t('loanRedistribution.filters.labels.redistribute')}}
      template(#loading)
        q-skeleton.full-width.full-height
</template>

<script>
export default {
  name: 'RedistributeButton',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
</style>
