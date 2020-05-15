<template lang="pug">
  .mailing-debt__block.filter__block.full-width.q-mx-xs
    .flex.justify-center.items-center.text-center.q-mt-xs
      span Задолженность
    .row.justify-around.items-center
      q-input.col-2.q-mx-xs.max-w-75px(
        v-model.number="$managerWB.mailing.filters.debt.min"
        type="number"
        @change="validateRange($managerWB.mailing.filters.debt)"
        input-class="text-center text-WB-bg-profile-color q-pa-none"
        standout="bg-WB-secondary text-WB-secondary"
        dense
        outlined
        color="WB-secondary"
      )
      q-range.w-50.q-pa-none(
        v-model="$managerWB.mailing.filters.debt"
        :min="1"
        :max="150000"
        color="positive"
      )
      q-input.col-2.q-mx-xs.max-w-100px(
        v-model.number="$managerWB.mailing.filters.debt.max"
        type="number"
        @change="validateRange($managerWB.mailing.filters.debt)"
        input-class="text-center text-WB-bg-profile-color q-pa-none"
        standout="bg-WB-secondary text-WB-secondary"
        dense
        outlined
        color="WB-secondary"
      )
</template>

<script>
export default {
  name: 'MailingDebtBlock',
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
        this.$managerWB.mailing.filters.debt.min = 1
      }
      if (debtObj.max < 1 || debtObj.max > 150000 || debtObj.max === '') {
        this.$managerWB.mailing.filters.debt.max = 150000
      }
      if (debtObj.max < debtObj.min) {
        this.$managerWB.mailing.filters.debt.min = 1
        this.$managerWB.mailing.filters.debt.max = 150000
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
