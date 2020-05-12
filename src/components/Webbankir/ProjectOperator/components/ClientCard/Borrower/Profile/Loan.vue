<template lang="pug">

  .card__right-loan.full-height(v-if="loan" :class="isApplicationCard ? 'wide-loan' : ''")
    .card__row.flex.items-center.bg-profile
      .card__row-left.card__loan-left.text-left.card__loan-text Данные по {{isApplicationCard ? 'заявке' : 'займу'}}
      .card__row-right.card__loan-right.text-right.info(v-if="!isApplicationCard")
        b Основной
    .card__row.flex.items-center
      .card__row-left.card__loan-left.text-left Сумма займа
      .card__row-right.card__loan-right.text-right.info
        b {{money(loan.amount, true)}}
    .card__row.flex.items-center
      .card__row-left.card__loan-left.text-left Срок
      .card__row-right.card__loan-right.text-right {{loan.duration || loan.term}} дней
    .card__row.flex.items-center
      .card__row-left.card__loan-left.text-left Ставка (%)
      .card__row-right.card__loan-right.text-right
        span.link {{isApplicationCard ? loan.baseRate * 100 : loanRates.current}}%
          RateList(v-if="!isApplicationCard" :rate="loanRates" :delay="$operatorWB.loans.currentDelay")
    .card__row.flex.items-center(v-if="!isApplicationCard")
      .card__row-left.card__loan-left.text-left Дата выдачи
      .card__row-right.card__loan-right.text-right {{getShortDate(loan.issueDate)}}
    .card__row.flex.items-center(v-if="!isApplicationCard")
      .card__row-left.card__loan-left.text-left Срок до
      .card__row-right.card__loan-right.text-right {{getShortDate(loan.maturityDate)}}
    .card__row.flex.items-center(v-if="isApplicationCard")
      .card__row-left.card__loan-left.text-left
        .text-black Максимальная сумма
      .card__row-right.card__loan-right.text-right.info {{money(loan.maxAmount, true)}}
    .card__row.flex.items-center.card__right-product(v-else)
      .card__row-left.card__loan-left.text-left Продукт
      .card__row-right.card__loan-right.text-right {{$t('loans.product.' + loan.product)}}
    .card__row.flex.items-center(v-if="isApplicationCard")
      .card__row-left.card__reliability-left.text-left {{$t('clients.reliability.amount')}}
        span.card__reliability-text.card__reliability-amount {{$operatorWB.clients.currentLoansHistory && $operatorWB.clients.currentLoansHistory.length}}
      .card__row-right.card__reliability-right.text-right
        span.card__reliability-link.link(@click="() => setView('loans')") {{ $t('clients.reliability.history') }}
    .card__row.flex.items-center.bg-blue-2(v-if="isApplicationCard")
      .card__row-left.card__loan-left.text-left.card__loan-text Результат анализа данных
      q-scroll-area.q-mt-sm.full-width.analysis-result
        div {{loan.analytics}}

</template>

<script>
import { getShortDate, money } from 'src/utils/helpers'
import RateList from '../../Tooltip/RateList'

export default {
  name: 'Loan',
  components: { RateList },
  data () {
    return {
      money,
      getShortDate
    }
  },
  computed: {
    isApplicationCard () {
      return this.$operatorWB.layout.isApplicationCard
    },
    loan () {
      return this.isApplicationCard ? this.$operatorWB.applications.get('item') : this.$operatorWB.loans.currentLoan || null
    },
    loanRates () {
      if (!this.loan) {
        return {
          base: 0,
          current: 0,
          annual: 0
        }
      }
      if (this.isApplicationCard) return { current: this.loan.baseRate }
      let { base, current, annual } = this.loan.rate
      if (base !== 0) base = base * 100
      if (current !== 0) current = current * 100
      if (annual !== 0) annual = annual * 100
      const curr = current === 0 && this.$operatorWB.loans.currentDelay > 0 ? 1 : current
      return {
        base: Number(base).toFixed(2),
        current: Number(curr).toFixed(2),
        annual: Number(curr > 0 ? curr * 365 : annual).toFixed(2)
      }
    }
  },
  methods: {
    setView (val) {
      this.$operatorWB.layout.view = val
    },
  }
}
</script>

<style scoped lang="stylus">
  .wide-loan
    min-width 300px !important

  .analysis-result
    height 165px
</style>
