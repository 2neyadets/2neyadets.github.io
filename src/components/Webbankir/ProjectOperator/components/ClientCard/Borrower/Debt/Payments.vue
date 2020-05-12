<template lang="pug">
  .debt__payments.bg-profile(v-if="currentPaymentsLength")
    .deb__payments-date.flex.justify-between.items-center
      p {{ $t('clients.debt.lastPaymentDate') }}
      p {{currentLastPaymentPaidAt}}
    .debt__payments-sum.flex.justify-between.items-center
      p {{ $t('clients.debt.paymentSum') }}
      p {{currentLastPaymentAmount}}
    .debt__payments-payed.flex.justify-between.items-center
      p {{ $t('clients.debt.partialRepaid') }}
      p
        b {{currentPaymentsTotal}}
    .debt__payments-history
      span.debt__payments-link.link.q-mr-md(
        @click="$operatorWB.layout.set('view', 'payments')"
      ) {{ $t('clients.debt.paymentsHistory') }} ({{currentPaymentsLength}})

</template>

<script>
import { money, getShortDate } from 'src/utils/helpers'

export default {
  name: 'Payments',
  computed: {
    currentLastPaymentAmount () {
      return money(this.$operatorWB.loans.currentLastPayment.amount, true)
    },
    currentLastPaymentPaidAt () {
      return getShortDate(this.$operatorWB.loans.currentLastPayment.paidAt)
    },
    currentPaymentsTotal () {
      return money(this.$operatorWB.loans.currentPaymentsTotal, true)
    },
    currentPaymentsLength () {
      return this.$operatorWB.loans.currentPayments.length
    },

  }
}
</script>

<style scoped>
</style>
