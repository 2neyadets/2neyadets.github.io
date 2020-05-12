<template lang="pug">
  .debt__content
    .card__row.flex.items-center
      .card__row-left.card__row-left_w60p.text-left {{ $t('clients.debt.currentSum') }}
      .card__row-right.card__row-right_w40p.text-right
        b {{accrual && money(accrual.sum_total, true)}}
    .card__row.flex.items-center
      .card__row-left.card__row-left_w60p.text-left {{ $t('clients.debt.od') }}
      .card__row-right.card__row-right_w40p.text-right {{accrual && money(accrual.sum_main_debt, true)}}
    .card__row.flex.items-center
      .card__row-left.card__row-left_w60p.text-left %
      .card__row-right.card__row-right_w40p.text-right {{accrual && money(accrual.sum_total_interest, true)}}
    .card__row.flex.items-center
      .card__row-left.card__row-left_w60p.text-left {{ $t('clients.debt.penalty') }}
      .card__row-right.card__row-right_w40p.text-right {{accrual && money(accrual.sum_total_fines, true)}}

</template>

<script>
import { money } from 'src/utils/helpers'

export default {
  name: 'Current',
  data () {
    return {
      money
    }
  },
  computed: {
    accrual () {
      const accrual = this.$operatorWB.loans.currentAccruals[this.$operatorWB.loans.currentAccruals.length - 1]
      return accrual
    }
  }
}
</script>

<style scoped>
</style>
