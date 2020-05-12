<template lang="pug">
  .PaymentScheduleFull
    .PaymentScheduleFull__title(v-text="$t('loans.schedule.title')")
    q-table.PaymentScheduleFull__table(
      :data="schedule"
      :columns="columns"
      row-key="index"
      hide-bottom
      :pagination.sync="pagination"
    )
    .PaymentScheduleFull__leftToPay
      span.q-mr-sm {{$t('loans.schedule.amountLeftToPay')}}:
      span.PaymentScheduleFull__leftToPay__value(
        v-text="totalLeftToPay"
      )
</template>

<script>
import { money } from 'src/utils/helpers'
import options from './options'

export default {
  name: 'PaymentScheduleFull',
  data () {
    return {
      ...options,
    }
  },
  computed: {
    schedule () {
      return (this.$operatorWB.loans.currentActiveAgreementSchedule && this.$operatorWB.loans.currentActiveAgreementSchedule.payments) || []
    },
    totalLeftToPay () {
      return money(this.$operatorWB.loans.currentActiveAgreementSchedule && this.$operatorWB.loans.currentActiveAgreementSchedule.totalLeftToPay, true)
    },
  },
}
</script>

<style lang="stylus">
  .PaymentScheduleFull__table td
    height auto

  .PaymentScheduleFull__title
    margin-bottom: 0.5rem

  .PaymentScheduleFull__leftToPay
    margin: 0.5rem 0.5rem 0.3rem
    text-align: right

  .PaymentScheduleFull__leftToPay__value
    font-weight: bold

  /*color: #E0E1E2*/

  .PaymentScheduleFull__table__row.-isExpired
    color: #DB2828

</style>
