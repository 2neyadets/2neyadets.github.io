<template lang="pug">
  q-table.my-sticky-header-table(
    :columns="_columns"
    :data="schedules"
    row-key="id"
    :pagination="pagination"
    hide-bottom
  )
    q-tr(
      slot="body"
      slot-scope="props"
      :data-prop="props"
      :class="{'text-positive': props.row.status === 'paid', 'text-negative': props.row.status !== 'paid' && Date.parse(props.row.date) < Date.now()}"
    )
      q-td(v-for="col in props.cols" :key="col.name" :props="props")
        span {{ col.value }}

    template(slot="bottom-row" slot-scope="props")
      q-tr
        q-td(colspan="2")
          strong Просроченные:
        q-td.text-negative.text-right
          strong {{overdueSum}}

</template>

<script>
import { getShortDate, money } from 'src/utils/helpers'
import sortBy from 'lodash/sortBy'

export default {
  name: 'PosScheduleList',
  props: {
    schedule: {
      type: Array,
      required: true
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      pagination: {
        page: 1,
        rowsPerPage: 10
      },
      columns: [
        {
          name: 'index',
          label: '№',
          field: row => row.__index + 1,
          required: true,
          align: 'left'
        },
        {
          name: 'date',
          label: this.$t('histories.schedule.date'),
          field: row => getShortDate(row.date),
          required: true,
          align: 'right'
        },
        {
          name: 'sum',
          label: this.$t('histories.schedule.sum'),
          field: row => money(row.amount.expected),
          required: true,
          align: 'right'
        },
        {
          name: 'paid',
          label: this.$t('histories.schedule.paid'),
          field: row => row.amount.paid > 0 ? money(row.amount.paid) : '––––',
          required: true,
          align: 'right'
        },
        {
          name: 'overdued',
          label: this.$t('histories.schedule.overdueShort'),
          field: row => row.status !== 'paid' && Date.parse(row.date) < Date.now() && row.amount.expected - row.amount.paid > 0
            ? money(row.amount.expected - row.amount.paid)
            : '––––',
          required: true,
          align: 'right'
        },
        {
          name: 'status',
          label: this.$t('histories.schedule.status'),
          field: row => row.status !== 'not_paid' ? this.$t('clients.debt.paymentSchedule.statuses.' + row.status) : '––––',
          required: true,
          align: 'right'
        },
      ]
    }
  },
  computed: {
    _columns () {
      return this.columns.filter(item => this.simple ? !['paid', 'status'].includes(item.name) : true)
    },
    overdueSum () {
      const sum = this.schedule
        .filter(item => item.status !== 'paid' && Date.parse(item.date) < Date.now())
        .reduce((acc, item) => {
          return acc + (item.amount.expected - item.amount.paid)
        }, 0)
      return sum > 0 ? money(sum) : '––'
    },
    paidSum () {
      const sum = this.schedule
        .reduce((acc, item) => {
          return acc + item.amount.paid
        }, 0)
      return sum > 0 ? money(sum) : '––'
    },
    totalSum () {
      const sum = this.schedule
        .reduce((acc, item) => {
          return acc + item.amount.expected
        }, 0)
      return sum > 0 ? money(sum) : '––'
    },
    debtSum () {
      const sum = this.schedule
        .reduce((acc, item) => {
          return acc + item.amount.expected
        }, 0)
      return sum > 0 ? money(sum) : '––'
    },
    schedules () {
      return sortBy(this.schedule, ['date'])
    }
  }
}
</script>

<style scoped>
</style>
