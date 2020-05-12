<template lang="pug">

  q-card.card.debt.brs5.ovh.q-mr-xs
    q-card-section.q-pa-none
      .card__title.flex.justify-between.items-center
        .debt__title-text {{ $t('clients.debt.info') }}
        .debt__title-text.flex.items-center
          span.debt__title-delay {{ $t('clients.debt.delay') }}
          span.debt__title-days.text-center {{loan && loan.current.delay}}
    q-card-section.card__content.q-pa-none
      q-scroll-area(style="height: 380px; max-width: inherit")
        template(v-if="loan && loan.product === 'pos'")
          Pos
          Promises
        template(v-else)
          Current
          .debt__content-list
            .card__row.debt__accruals.no-border
              span.debt__accruals-link.link(@click="$operatorWB.layout.set('view', 'accruals')") {{ $t('clients.debt.accrualsHistory') }}

            Agreements

            Promises

            Payments

</template>

<script>
import { money } from 'src/utils/helpers'
import camelCase from 'lodash/camelCase'
import Payments from './Payments'
import Promises from './Promises'
import Agreements from './Agreements'
import Pos from './Pos'
import Current from './Current'

export default {
  name: 'Debt',
  components: {
    Current,
    Pos,
    Agreements,
    Promises,
    Payments
  },
  props: {
    hard: Boolean
  },
  data () {
    return {
      money,
      paymentScheduleList: [],
      camelCase
    }
  },
  computed: {
    loan () {
      return this.$operatorWB.loans.currentLoan
    },
    client () {
      return this.$operatorWB.clients.currentClient
    },
    lastPromise () {
      return this.$operatorWB.loans.lastPromise
    },
    _paymentScheduleList () {
      return this.paymentScheduleList
    },
  },
  methods: {
    colorClass (val) {
      let css = ''
      if (camelCase(val) === 'notFulfilled') {
        css = 'red'
      }
      if (camelCase(val) === 'partiallyFulfilled') {
        css = 'orange'
      }
      return css
    }
  }
}
</script>

<style lang="stylus">
  .red
    color: #f82317
    font-weight: bold

  .orange
    color: #f5a623
    font-weight: bold
</style>
