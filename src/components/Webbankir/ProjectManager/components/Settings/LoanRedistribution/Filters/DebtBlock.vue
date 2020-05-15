<template lang="pug">
  .debt__block.filter__block.full-width.q-mx-xs
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.debt')}}
    .row.justify-around.items-center
      q-input.col-2.q-mx-xs.max-w-75px(
        v-model.number="$managerWB.loanRedistribution.filters.debt.min"
        type="number"
        @change="validateRange($managerWB.loanRedistribution.filters.debt)"
        input-class="text-center text-WB-bg-profile-color q-pa-none"
        standout="bg-WB-secondary text-WB-secondary"
        dense
        outlined
        color="WB-secondary"
      )
      q-range.w-50.q-pa-none(
        v-model="$managerWB.loanRedistribution.filters.debt"
        :min="1"
        :max="150000"
        color="positive"
      )
      q-input.col-2.q-mx-xs.max-w-100px(
        v-model.number="$managerWB.loanRedistribution.filters.debt.max"
        type="number"
        @change="validateRange($managerWB.loanRedistribution.filters.debt)"
        input-class="text-center text-WB-bg-profile-color q-pa-none"
        standout="bg-WB-secondary text-WB-secondary"
        dense
        outlined
        color="WB-secondary"
      )
</template>

<script>
export default {
  name: 'DebtBlock',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    validateRange (debtObj) {
      if (debtObj.min < 1 || debtObj.min > 150000 || debtObj.min === '') {
        this.$managerWB.loanRedistribution.filters.debt.min = 1
      }
      if (debtObj.max < 1 || debtObj.max > 150000 || debtObj.max === '') {
        this.$managerWB.loanRedistribution.filters.debt.max = 150000
      }
      if (debtObj.max < debtObj.min) {
        this.$managerWB.loanRedistribution.filters.debt.min = 1
        this.$managerWB.loanRedistribution.filters.debt.max = 150000
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
