<template lang="pug">

  .debt__content

    .row.flex.items-center.justify-between.q-pa-md
      span.text-profile Просроченная:
      strong.text-negative {{overduePaymentsAmount && money(overduePaymentsAmount.total, true)}}
    .row.flex.items-center.justify-between.q-px-md.q-mb-md
      span.text-profile Просрочено с:
      strong.text-negative {{firstOverduePaymentDate}}

    q-separator

    .row.flex.items-center.q-pa-md
      span.text-profile Платеж по графику:
    .row.flex.items-center.justify-between.q-px-md.q-py-xs.q-pl-xl
      span.text-profile Срок до:
      strong {{nextPaymentDate}}
    .row.flex.items-center.justify-between.q-px-md.q-py-xs.q-pl-xl
      span.text-profile Сумма:
      strong {{nextPaymentAmount}}

    .row.q-pa-md
      span.debt__payments-link.link.q-mr-md График платежей ({{$operatorWB.loans.currentLoan.schedules.length}})
        q-tooltip(
          anchor="center left"
          self="center right"
          :offset="[10, 0]"
        )
          PosScheduleList(:schedule="$operatorWB.loans.currentLoan.schedules")

    q-separator

    .row.flex.items-center.justify-between.q-pa-md
      span.text-profile Оплачено:
      strong {{paidPaymentsAmount && money(paidPaymentsAmount.paid, true)}}

    .row.q-pa-md
      span.debt__payments-link.link.q-mr-md(
        @click="$operatorWB.layout.set('view', 'payments')"
      ) {{ $t('clients.debt.paymentsHistory') }} ({{currentPaymentsLength}})

</template>

<script>
import { getShortDate, money } from 'src/utils/helpers'
import RateList from '../../Tooltip/RateList'
import AmountDetails from './AmountDetails'
import { first } from 'lodash'
import PosScheduleList from './PosScheduleList/index'

const amount = () => ({
  principal: 0,
  interests: 0,
  fines: 0,
  total: 0,
  paid: 0
})

export default {
  name: 'Pos',
  components: {
    PosScheduleList,
    AmountDetails,
    RateList
  },
  data () {
    return {
      money
    }
  },
  computed: {

    schedules () {
      return this.$operatorWB.loans.currentLoan && this.$operatorWB.loans.currentLoan.schedules
    },

    overduePayments () {
      return this.schedules && this.schedules.filter(item => item.status !== 'paid' && Date.parse(item.date) < Date.now())
    },
    paidPayments () {
      return this.schedules && this.schedules.filter(item => item.amount.paid && item.amount.paid > 0)
    },
    firstOverduePaymentDate () {
      return this.overduePayments.length ? getShortDate(first(this.overduePayments).date) : '–'
    },
    notPaidPayments () {
      return this.schedules && this.schedules.filter(item => item.status !== 'paid')
    },
    overduePaymentsAmount () {
      return this.paymentsAmount(this.overduePayments)
    },
    notPaidPaymentsAmount () {
      return this.paymentsAmount(this.notPaidPayments)
    },
    paidPaymentsAmount () {
      return this.paymentsAmount(this.paidPayments)
    },
    nextPayment () {
      return first(this.notPaidPayments.filter(item => Date.parse(item.date) > Date.now()))
    },
    nextPaymentAmount () {
      const sumNotPaid = this.notPaidPayments
        .filter(item => Date.parse(item.date) < Date.now())
        .reduce((acc, item) => {
          return acc + (item.amount.expected - item.amount.paid)
        }, 0)

      return this.nextPayment && money(this.nextPayment.amount.expected + sumNotPaid, true)
    },
    nextPaymentDate () {
      return (this.nextPayment && getShortDate(this.nextPayment.date)) || getShortDate(new Date())
    },
    currentPaymentsLength () {
      return this.$operatorWB.loans.currentPayments.length
    },

  },
  methods: {
    paymentsAmount (list) {
      return list
        .reduce((acc, item) => {
          acc.principal += item.debt.principal
          acc.interests += item.debt.interests
          acc.fines += item.debt.fines
          acc.total += item.debt.total
          acc.paid += item.amount.paid
          return acc
        }, amount())
    },

  }
}
</script>

<style scoped>
</style>
