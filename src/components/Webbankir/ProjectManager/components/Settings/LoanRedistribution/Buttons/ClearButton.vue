<template lang="pug">
  .to-form__button
    q-btn(
      :color="($managerWB.loanRedistribution.dataForTable && $managerWB.loanRedistribution.dataForTable.length) ? 'WB-secondary' : ''"
      :disable="!($managerWB.loanRedistribution.dataForTable && $managerWB.loanRedistribution.dataForTable.length) || loading"
      :loading="loading"
      @click="$managerWB.loanRedistribution.dataForTable = []"
      icon-right="clear"
    ) {{$t('loanRedistribution.filters.labels.clear')}}
      template(#loading)
        q-skeleton.full-width.full-height
</template>

<script>
export default {
  name: 'ClearButton',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    loading () {
      return this.$managerWB.loanRedistribution.loading.toFormMethod || this.$managerWB.loanRedistribution.loading.redistributeMethod
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
</style>
