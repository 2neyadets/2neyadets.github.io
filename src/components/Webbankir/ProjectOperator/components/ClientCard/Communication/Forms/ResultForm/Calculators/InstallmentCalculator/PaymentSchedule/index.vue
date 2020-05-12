<template lang="pug">
  .payments-schedule
    q-table.my-sticky-header-table(
      :data="_schedule"
      :columns="_columns"
      :loading="$operatorWB.communication.loading.schedule"
      :pagination.sync="pagination"
      row-key="index"
      separator="cell"
      hide-bottom
    )
      template(#header="props")
        q-tr
          q-td.q-px-md(v-for="col in props.cols" :key="col.name" :props="props") {{ col.label }}
    .PaymentScheduleFull__leftToPay
      span.q-mr-sm {{$t('loans.schedule.amountLeftToPay')}}:
      span.PaymentScheduleFull__leftToPay__value(v-text="totalLeftToPay")

</template>

<script>
import { money } from 'src/utils/helpers'
import { date } from 'quasar'

const { formatDate } = date

export default {
  name: 'PaymentSchedule',
  props: {
    simple: {
      type: Boolean
    },
  },
  data () {
    return {
      columns: [
        {
          name: 'index',
          field: row => row.index,
          required: true,
          align: 'center',
          label: 'communications.schedule.index'
        },
        {
          name: 'paymentDate',
          field: 'date',
          required: true,
          align: 'center',
          label: 'communications.schedule.paymentDate'
        },
        {
          name: 'paymentAmount',
          field: 'amount',
          required: true,
          align: 'center',
          label: 'communications.schedule.paymentAmount'
        },
        {
          name: 'paymentFact',
          field: 'fact',
          required: true,
          align: 'center',
          label: 'communications.schedule.paymentFact'
        },
        {
          name: 'paymentStatus',
          field: 'status',
          required: true,
          align: 'center',
          label: 'communications.schedule.paymentStatus'
        },
      ],
      pagination: {
        sortBy: 'index',
        descending: false,
        page: 1,
        rowsPerPage: 10
      }
    }
  },
  computed: {
    totalLeftToPay () {
      const amount = this.$operatorWB.loans.currentLoan.current.total - this.$operatorWB.communication.form.installment.primaryPayment
      return amount && money(amount, true)
    },

    _columns () {
      const cols = this.columns.map(i => ({
        ...i,
        label: this.$t(i.label)
      }))
      return this.simple ? Array.from(cols).slice(0, 3) : cols
    },
    _schedule () {
      const schedule = this.$operatorWB.communication.schedule
      return schedule.map((item, index) => ({
        index: index + 1,
        date: formatDate(item.date, 'DD.MM.YYYY'),
        amount: money(item.amount, true)
      }))
    }
  }
}
</script>

<style lang="stylus">
</style>
