<template lang="pug">

  .comments__result-calc(v-if="amnesty")
    .comments__calc
      .comments__calc-content
        .comments__calc-title {{ $t('communications.headings.amnesty') }}
        q-input.comments__calc-days(
          type="number"
          v-model.number="amnesty.discount"
          @input="v => debounced('rate', v)"
          :loading="loading"
          :disable="loading"
          :hint="$t('communications.labels.discount')"
          suffix="%"
          outlined
          color="WB-primary"
          :dark="false"
        )
          q-spinner(slot="loading" size="20px")

        q-input.comments__calc-days(
          type="number"
          v-model.number="amnesty.newPrincipalDebt"
          @input="v => debounced('debt', v)"
          :loading="loading"
          :disable="loading"
          :hint="$t('communications.labels.newPrincipalDebt')"
          suffix="₽"
          outlined
          color="WB-primary"
          :dark="false"
        )
          q-spinner(slot="loading" size="20px")

        q-input.comments__calc-days(
          type="number"
          v-model.number="amnesty.amountOfForgiveness"
          :loading="loading"
          :hint="$t('communications.labels.amountOfForgiveness')"
          readonly
          disable
          suffix="₽"
          outlined
          color="WB-primary"
          :dark="false"
        )
          q-spinner(slot="loading" size="20px")
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'AmnestyCalculator',
  data () {
    return {
      debounced: null
    }
  },
  created () {
    this.debounced = debounce(this.check, 1000)
  },
  computed: {
    loading () {
      return this.$operatorWB.communication.loading.saveCommunication
    },
    amnesty () {
      return this.$operatorWB.communication.form.amnesty
    },
    totalPdlDebt () {
      return this.$operatorWB.loans.currentPdlLoan.current.total
    }
  },
  methods: {
    async getCalculation (type, amount) {
      amount = Number(amount)
      const obj = { type, clientId: this.$operatorWB.clients.current }
      switch (type) {
        case 'rate': obj.amount = amount
          break
        case 'debt': obj.amount = ((this.totalPdlDebt * 100) - (amount * 100)) / 100
          break
      }
      this.$operatorWB.communication.form.amnesty = await this.$operatorWB.clients.getCalculationOfAmnesty(obj)
    },
    numberOfSymbolsAfterComma (x) {
      return x.toString().includes('.') ? x.toString().split('.').pop().length : 0
    },
    async check (type, v) {
      if (this.numberOfSymbolsAfterComma(v) > 2) v = Number(v.toFixed(2))
      switch (type) {
        case 'rate': {
          if (v === null || v <= 0 || v > 30) {
            this.amnesty.discount = null
          } else {
            await this.getCalculation(type, v)
          }
          break
        }
        case 'debt': {
          if (v === null || v < this.totalPdlDebt * 0.7 || v >= this.totalPdlDebt) {
            this.amnesty.newPrincipalDebt = null
          } else {
            await this.getCalculation(type, v)
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus">
  .comments__calc-content .q-field-bottom
    padding-top: 0

</style>
