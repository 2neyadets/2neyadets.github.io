<template lang="pug">
  HistoryBlock
    template(slot="title-left")
      span {{$t('histories.purchases.title')}}

    q-table(
      :columns="columns"
      :data="deals"
      :pagination.sync="pagination"
      row-key="id"
      color="WB-secondary"
      hide-bottom
      separator="cell"
      :dark="false"
    )
      template.fixed-body(slot="body" slot-scope="props")
        q-tr.cursor-pointer(:data-prop="props")
          q-td(v-for="col in props.cols" :key="col.name" :props="props")
            template(v-if="col.name === 'status'")
              strong(
                :class="{'text-positive': col.value === 'active', 'text-negative': col.value === 'completed'}"
              ) {{ $t('histories.purchases.status.' + col.value) }}

            template(v-else-if="col.name === 'summ_period'")
              span {{ summPeriod(props.row) }}

            template(v-else-if="col.name === 'paid'")
              span {{ paid(props.row) }}

            template(v-else-if="col.name === 'products'")
              q-icon(name="far fa-file-alt" size="1.5em" color="blue")
                q-tooltip(
                  anchor="top left"
                  self="bottom right"
                  :offset="[5, 5]"
                )
                  ProductsList(:products="col.value")

            template(v-else-if="col.name === 'shop_address'")
              span.link.text-blue-grey {{ col.value }}
                q-tooltip(
                  anchor="top left"
                  self="bottom right"
                  :offset="[5, 5]"
                )
                  span {{props.row.merchant.name}} (ИНН: {{props.row.merchant.inn}})

            template(v-else-if="col.name === 'next_payment'")
              .row.items-baseline.justify-center
                span.q-mr-lg
                  strong.q-mr-sm(
                    :class="{'text-negative': overdue(props.row).length}"
                  ) {{money(nextAmount(props.row), true)}}
                    q-tooltip(
                      v-if="overdue(props.row).length"
                      anchor="top left"
                      self="bottom right"
                      :offset="[5, 5]"
                    )
                      span Просрочено платежей: {{overdue(props.row).length}}
                  span.q-mr-sm.text-profile до
                  span {{getShortDate(nextDate(props.row))}}
                q-icon(name="fa fa-signal" color="blue")
                  q-tooltip(
                    anchor="top left"
                    self="bottom right"
                    :offset="[5, 5]"
                  )
                    PosScheduleList(:schedule="props.row.schedules")
            template(v-else)
              span {{ col.value }}

</template>

<script>
import HistoryBlock from '../HistoryBlock'
import options from './options'
import ProductsList from './ProductsList'
import PosScheduleList from '../../Borrower/Debt/PosScheduleList/index'
import { sortBy, maxBy } from 'lodash'
import { getShortDate, money } from 'src/utils/helpers'

export default {
  name: 'PurchacesHistory',
  components: {
    PosScheduleList,
    ProductsList,
    HistoryBlock
  },
  data () {
    return {
      ...options,
      getShortDate,
      money
    }
  },
  computed: {
    deals () {
      return this.$operatorWB.loans.currentLoan.deals
    }
  },
  methods: {
    notPaid (row) {
      return sortBy(row.schedules, ['date']).filter(item => item.status !== 'paid')
    },
    overdue (row) {
      return sortBy(row.schedules, ['date']).filter(item => !['paid', 'not_paid'].includes(item.status))
    },
    nextDate (row) {
      const next = this.notPaid(row)
        .filter(item => Date.parse(item.date) > Date.now())
      return (next[0] && next[0].date) || new Date()
    },
    summPeriod (row) {
      return `${money(row.fund.loan, true)} / ${row.schedules.length ? getShortDate(maxBy(row.schedules, 'date').date) : '---'}`
    },
    nextAmount (row) {
      const amount = this.notPaid(row)
        .filter(item => Date.parse(item.date) <= Date.parse(this.nextDate(row)))
        .reduce((acc, item) => acc + (item.amount.expected - item.amount.paid), 0)
      return amount
    },
    paid (row) {
      const paided = sortBy(row.schedules, ['date'])
        .reduce((acc, item) => {
          return acc + item.amount.paid
        }, 0)
      return money(paided, true)
    }
  }
}
</script>

<style scoped lang="stylus">
  .active td
    font-weight: bold

  .alarm
    font-weight: bold
    color: red
</style>
