<template lang="pug">

  .comments__result-calc
    .comments__calc
      .comments__calc-content
        .comments__calc-title {{ $t('communications.headings.calcRenewal') }}

        q-input.comments__calc-days(
          type="number"
          min="1"
          max="$operatorWB.clients.currentClient.restrictions.renewalDays"
          v-model.number="$operatorWB.communication.form.renewal.daysDuration"
          :suffix="$t('communications.placeholders.days')"
          :hint="$t('communications.labels.daysDuration')"
          outlined
          color="WB-primary"
          :dark="false"
        )
        .comments__calc-payments
          span
            | на дату:
            strong {{future}}
        .comments__calc-payments
          span
            | {{ $t('communications.labels.paymentForRenewal') }}:
            strong  {{interest}}
</template>

<script>
import PaymentSchedule from '../InstallmentCalculator/PaymentSchedule/index'
import { date } from 'quasar'
import { money } from 'src/utils/helpers'

const { addToDate, formatDate } = date

export default {
  name: 'RenewalCalculator',
  components: { PaymentSchedule },
  computed: {
    interest () {
      return money(this.$operatorWB.loans.currentLoanInterest, true)
    },
    future () {
      return formatDate(addToDate(new Date(), { days: this.$operatorWB.communication.form.renewal.daysDuration }), 'DD.MM.YYYY')
    }
  }

}
</script>

<style lang="stylus">
  .comments__calc-content .q-field__bottom
    padding-top: 0

</style>
