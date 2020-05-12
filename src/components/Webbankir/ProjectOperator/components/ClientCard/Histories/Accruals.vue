<template lang="pug">

  HistoryBlock
    template(slot="title-left")
      span {{$t('histories.accruals.title')}}
    template(slot="title-right")
      .accruals__date.flex.items-center
        .accruals__date-title Выбрать период
        span.accruals__date-text с
        q-input.accruals__date-from.brs3.q-mr-md.date-picker(
          v-model="periodFrom"
          :default-value="dateFrom"
          format="DD.MM.YY"
          dense
          outlined
          readonly
          :dark="false"
          color="WB-primary"
        )
          q-popup-proxy(
            ref="qDateProxy1"
            transition-show="scale"
            transition-hide="scale"
          )
            q-date(
              v-model="periodFrom"
              @input="() => $refs.qDateProxy1.hide()"
              :options="canChooseDates"
              mask="DD.MM.YY"
              :dark="false"
              color="WB-primary"
            )
          template(slot="append")
            q-icon.cursor-pointer(name="event")
        span.accruals__date-text до
        q-input.accruals__date-to.brs3.q-mr-md.date-picker(
          v-model="periodTo"
          :default-value="dateTo"
          format="DD.MM.YY"
          dense
          outlined
          readonly
          :dark="false"
          color="WB-primary"
        )
          q-popup-proxy(
            ref="qDateProxy3"
            transition-show="scale"
            transition-hide="scale"
          )
            q-date(
              v-model="periodTo"
              @input="() => $refs.qDateProxy3.hide()"
              :options="canChooseDates"
              mask="DD.MM.YY"
              :dark="false"
              color="WB-primary"
            )
          template(slot="append")
            q-icon.cursor-pointer(name="event")
    q-table(
      :columns="columns"
      :data="data"
      :pagination.sync="pagination"
      row-key="name"
      color="WB-secondary"
      hide-bottom
      separator="cell"
      :dark="false"
    )
      template.fixed-body(slot="body" slot-scope="props")
        q-tr.cursor-pointer(:props="props" :data-prop="props")
          q-td(v-for="col in props.cols" :key="col.name" :props="props")
            | {{ columnValue(col) }}
</template>

<script>
import HistoryTable from './HistoryTable'
import HistoryBlock from './HistoryBlock'
import { getShortDate, money } from 'src/utils/helpers'
import { maxBy, minBy } from 'lodash'
import { date } from 'quasar'
const { formatDate, extractDate } = date

export default {
  name: 'AccrualsHistory',
  components: {
    HistoryTable,
    HistoryBlock
  },
  data () {
    return {
      pagination: {
        sortBy: 'date',
        descending: false,
        page: 1,
        rowsPerPage: 0
      },
      periodFrom: null,
      periodTo: null,
      columns: [
        { name: 'index', field: row => row.index, label: '№', align: 'center', required: true, sortable: true },
        { name: 'date', field: 'date', label: 'Дата', align: 'center', required: true, sortable: true },
        { name: 'sum_main_debt', field: 'sum_main_debt', label: 'Сумма ОД, ₽', align: 'center', required: true, sortable: true },
        { name: 'sum_interest', field: 'sum_interest', label: 'Сумма процентов, ₽', align: 'center', required: true, sortable: true },
        { name: 'sum_fines', field: 'sum_fines', label: 'Сумма пени, ₽', align: 'center', required: true, sortable: true },
        { name: 'payment', field: 'payment', label: 'Сумма оплаты, ₽', align: 'center', required: true, sortable: true },
        { name: 'payment_main_debt', field: 'payment_main_debt', label: 'Оплачено ОД, ₽', align: 'center', required: true, sortable: true },
        { name: 'payment_interest', field: 'payment_interest', label: 'Оплачено процентов, ₽', align: 'center', required: true, sortable: true },
        { name: 'payment_fines', field: 'payment_fines', label: 'Оплачено пени, ₽', align: 'center', required: true, sortable: true },
        { name: 'sum_total', field: 'sum_total', label: 'Общий долг, ₽', align: 'center', required: true, sortable: true }
      ],
    }
  },
  computed: {
    currentLoanAccruals () {
      return this.$operatorWB.loans.currentAccruals
    },
    data () {
      const list = Array.from(this.currentLoanAccruals || [])
        .filter(item => {
          const date = new Date(Date.parse(item.date))
          if (this.periodFrom && date < extractDate(this.periodFrom, 'DD.MM.YY')) {
            return false
          }
          let to = extractDate(this.periodTo, 'DD.MM.YY')
          to = to.setDate(to.getDate() + 1)
          if (this.periodTo && date > to) {
            return false
          }
          return true
        })
      return list
    },
    dateFrom () {
      const min = minBy(this.currentLoanAccruals, 'date')
      return min && new Date(Date.parse(min.date))
    },
    dateTo () {
      const max = maxBy(this.currentLoanAccruals, 'date')
      return max && new Date(Date.parse(max.date))
    },
  },
  methods: {
    columnValue (col) {
      let value = col.value
      switch (col.name) {
        case 'sum_main_debt':
        case 'sum_interest':
        case 'sum_fines':
        case 'payment':
        case 'payment_main_debt':
        case 'payment_interest':
        case 'payment_fines':
        case 'sum_total':
          value = col.value ? money(col.value, true) : ''
          break
        case 'date':
          value = getShortDate(col.value)
          break
      }
      return value
    },
    canChooseDates (date) {
      if (date.includes('.')) {
        date = date.split('.')
        date = '20' + date[2] + '/' + date[1] + '/' + date[0]
      }
      return date >= formatDate(this.dateFrom, 'YYYY/MM/DD') &&
        date <= formatDate(this.dateTo, 'YYYY/MM/DD')
    }

  }
}
</script>

<style scoped lang="stylus">

</style>
