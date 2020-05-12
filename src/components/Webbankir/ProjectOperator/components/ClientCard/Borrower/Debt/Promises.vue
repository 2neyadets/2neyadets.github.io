<template lang="pug">
  .debt__promises(v-if="promisesLength")
    .debt__promises-pay.flex.justify-between.items-center
      .q-pa-none {{ $t('communications.result.' + (lastPromise ? lastPromise.type : 'simple')) }}
      .q-pa-none
        b {{lastPromiseDate}}
    .debt__promises-sum.sum.flex.justify-between.items-center
      p {{ $t('clients.debt.sum') }}
      p {{lastPromiseAmount}}
    .debt__promises-status.flex.justify-between.items-center
      p {{ $t('clients.debt.status') }}
      p
        strong(:class="colorClass(lastPromiseStatus)")
          | {{lastPromiseStatusText}}

    .debt__promises-history
      span.debt__promises-link.link(@click="$operatorWB.layout.set('view', 'promises')")
        | {{ $t('clients.debt.promisesHistory') }} ({{promisesLength}})

</template>

<script>
import { getShortDate, money } from 'src/utils/helpers'
import camelCase from 'lodash/camelCase'

export default {
  name: 'Promises',
  computed: {
    promisesLength () {
      return this.$operatorWB.loans.currentPromises && this.$operatorWB.loans.currentPromises.length
    },
    lastPromise () {
      return this.$operatorWB.loans.lastPromise
    },
    lastPromiseDate () {
      return this.lastPromise && getShortDate(this.lastPromise.promisedAt)
    },
    lastPromiseAmount () {
      return this.lastPromise && money(this.lastPromise.promisedAmount, true)
    },
    lastPromiseStatus () {
      return this.lastPromise && this.lastPromise.status
    },
    lastPromiseStatusText () {
      let text = this.$t('communications.promises.unknown')
      if (this.lastPromiseStatus) {
        text = this.$t('communications.promises.' + camelCase(this.lastPromiseStatus))
      }
      return text
    }

  },
  methods: {
    colorClass (val) {
      let css = ''
      if (camelCase(val) === 'notFulfilled') {
        css = 'text-negative'
      }
      if (camelCase(val) === 'partiallyFulfilled') {
        css = 'text-warning'
      }
      return css
    }
  }
}
</script>

<style lang="stylus">
</style>
