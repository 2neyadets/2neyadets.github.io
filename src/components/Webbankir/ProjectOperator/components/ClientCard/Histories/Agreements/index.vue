<template lang="pug">
  HistoryBlock
    template(slot="title-left")
      span {{$t('histories.agreements.title')}}

    q-table(
      :columns="columns"
      :data="agreements"
      :pagination.sync="pagination"
      row-key="id"
      color="WB-secondary"
      hide-bottom
      separator="cell"
      :dark="false"
    )
      template.fixed-body(#body="props")
        template(v-if="props.row.type === 'amnesty' || props.row.type === 'finInsurance' || props.row.type === 'creditHolidays'")
          q-tr.cursor-pointer(
            :props="props"
            :data-prop="props"
            :class="{active: isActiveDS(props.row.id)}"
          )
            q-td(v-for="col in props.cols" :key="col.name" :props="props")
              span
                | {{ columnValue(col, props.row) }}

        template(v-else-if="props.row.type === 'renewal'")
          q-tr.cursor-pointer(
            :props="props"
            :data-prop="props"
            :class="{active: isActiveDS(props.row.id)}"
          )
            q-td(v-for="col in props.cols" :key="col.name" :props="props")
              template(v-if="col.name === 'status'")
                span(:class="{alarm: col.value === 'signTermExpired', warning: col.value === 'paidTermExpired' }")
                  | {{ columnValue(col, props.row) }}
              template(v-else)
                span
                  | {{ columnValue(col, props.row) }}

        template(v-else-if="props.row.type === 'installment'" :props="props")
          q-tr.cursor-pointer(
            :data-prop="props"
            :class="{active: isActiveDS(props.row.id)}"
          )
            q-td(v-for="col in props.cols" :key="col.name" :props="props" :class="{active: isActiveDS(props.row.id)}")
              template(v-if="col.name === 'status'")
                span(:class="{alarm: col.value === 'signTermExpired', warning: col.value === 'paidTermExpired' }")
                  | {{ columnValue(col, props.row) }}
              template(v-else-if="col.name === 'paymentAmount'")
                q-checkbox.q-mr-md(
                  size="xs"
                  color="WB-primary"
                  v-model="props.expand"
                  checked-icon="remove"
                  unchecked-icon="add"
                  v-if="isActiveDS(props.row.id)"
                )
                span
                  | {{ columnValue(col, props.row) }}
              template(v-else)
                span
                  | {{ columnValue(col, props.row) }}
          q-tr(v-show="props.expand && isActiveDS(props.row.id)" :props="props")
            q-td(colspan="100%")
              .row
                .schedule.q-mr-md
                  PaymentScheduleFull
                .payments
                  InstallmentPayments

        template(v-else)
          q-tr.cursor-pointer(
            :props="props"
            :data-prop="props"
            :class="{active: isActiveDS(props.row.id)}"
          )
            q-td(v-for="col in props.cols" :key="col.name" :props="props")
              span
                | {{ columnValue(col, props.row) }}
</template>

<script>
import HistoryBlock from '../HistoryBlock'
import { getShortDate, money } from 'src/utils/helpers'
import PaymentSchedule
  from '../../Communication/Forms/ResultForm/Calculators/InstallmentCalculator/PaymentSchedule/index'
import PaymentScheduleFull from './PaymentScheduleFull/index'
import InstallmentPayments from './InstallmentPayments'
import options from './options'
import { date } from 'quasar'

export default {
  name: 'AgreementsHistory',
  components: {
    InstallmentPayments,
    PaymentScheduleFull,
    PaymentSchedule,
    HistoryBlock
  },
  data () {
    return {
      ...options,
      schedule: [],
    }
  },
  computed: {
    agreements () {
      const list = this.$operatorWB.loans.currentAgreements.map(item => {
        let payments = item.payments
        if (item.type === 'renewal') {
          if (payments[0]) {
            item.paymentAmount = payments[0].amount
            item.paymentAt = payments[0].paidAt
          }
        }

        if ((item.type === 'amnesty' || item.type === 'finInsurance') && item.status === 'paid') {
          item.paymentAmount = item.obligatoryPayment
          item.paymentAt = item.paidAt
        }

        if (item.type === 'installment') {
          payments = this.$operatorWB.loans.currentActiveAgreementPayments
          const sum = Array.from(payments).reduce((acc, item) => {
            acc += item.amount
            return acc
          }, 0)
          const nextPayment = this.$operatorWB.loans.currentActiveAgreementNextPayment
          if (this.isActiveDS(item.id)) {
            item.amountToPay = this.$operatorWB.loans.currentLoanDebt
            item.paidAt = nextPayment
            item.paymentAmount = sum
            item.paymentAt = payments.length > 0 ? payments[payments.length - 1].paidAt : null
          }
        }
        return item
      })
      return list
    },
  },
  methods: {
    isActiveDS (id) {
      if (!this.$operatorWB.loans.currentActiveAgreement) return false
      return id === this.$operatorWB.loans.currentActiveAgreement.id
    },
    columnValue (col, row) {
      let value = col.value
      switch (col.name) {
        case 'obligatoryPayment':
        case 'paymentAmount':
          value = col.value && money(col.value)
          break
        case 'createdAt':
        case 'enteredIntoForceAt':
        case 'expiredAt':
        case 'terminatedAt':
        case 'signedAt':
        case 'paidAt':
        case 'paymentAt':
          value = col.value && getShortDate(col.value)
          break
        case 'status':
          value = col.value && this.$t('histories.agreements.status.' + col.value)
          if (col.value === 'terminated') {
            value = value + ' (' + getShortDate(row.terminatedAt) + ')'
          }
          break
        case 'type':
          value = col.value && this.$t('histories.agreements.type.' + col.value)
          break
        case 'period':
          value = col.value + ' дн.'
          if (row && row.type === 'installment') {
            const diff = date.getDateDiff(row.expiredAt, row.createdAt, 'months')
            value = diff + ' мес.'
          }
          if (row && row.type === 'creditHolidays') {
            const TZ = -new Date().getTimezoneOffset() / 60,
              expiredAt = date.subtractFromDate(row.expiredAt, { hours: TZ > 3 ? TZ - 3 : 0 }),
              enteredIntoForceAt = date.subtractFromDate(row.enteredIntoForceAt, { hours: TZ > 3 ? TZ - 3 : 0 }),
              monthsDiff = date.getDateDiff(expiredAt, enteredIntoForceAt, 'months'),
              daysDiff = Number(date.formatDate(expiredAt, 'DD')) - Number(date.formatDate(enteredIntoForceAt, 'DD')),
              daysString = (daysDiff >= 0
                ? daysDiff
                : new Date(
                  Number(date.formatDate(expiredAt, 'YYYY')),
                  Number(date.formatDate(expiredAt, 'MM')),
                  0).getDate() - Math.abs(daysDiff)) +
                ' дн.'
            value = daysDiff >= 0 ? `${monthsDiff} мес.${daysDiff > 0 ? ' ' + daysString : ''}` : `${monthsDiff - 1} мес. ${daysString}`
          }
          break
        default:
          value = col.value
          break
      }
      if (!value) return 'Нет данных'
      return value
    },

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
