<template lang="pug">

  .comments__result-calc
    .comments__calc
      .comments__calc-content
        .comments__calc-title {{ $t('communications.headings.calcInstallment') }}
        q-input.comments__calc-days(
          type="number"
          v-model.number="_payment"
          debounce="1000"
          suffix="₽"
          :hint="$t('communications.labels.primaryPayment')"
          outlined
          color="WB-primary"
          :dark="false"
        )

        q-input.comments__calc-days(
          type="number"
          min="1"
          max="6"
          v-model.number="_months"
          debounce="1000"
          :suffix="$t('communications.placeholders.months')"
          :hint="$t('communications.labels.installmentPeriod')"
          outlined
          color="WB-primary"
          :dark="false"
        )
        .comments__calc-payments
          q-spinner(v-if="loading")
          span.comments__link.link
            | {{ $t('communications.headings.paymentsSchedule') }}
            | ({{$operatorWB.communication.schedule.length}})
            q-menu(
              anchor="center left"
              self="bottom right"
              :offset=[10, 0]
              max-height="850px"
            )
              PaymentSchedule.tooltip-schedule.q-pa-xs(:schedule="$operatorWB.communication.schedule" simple)
</template>

<script>
import PaymentSchedule from './PaymentSchedule/index'

export default {
  name: 'InstallmentCalculator',
  components: { PaymentSchedule },
  data () {
    return {
      months: 1,
      payment: 0,
      loading: false
    }
  },
  computed: {
    _schedule () {
      return this.$operatorWB.communication.schedule
    },
    _months: {
      get () {
        return this.months
      },
      set (v) {
        if (!v) v = 1
        if (v < 1) v = 1
        if (v > 6) v = 6
        this.months = null
        this.$nextTick(function () {
          this.months = v
        })
        this.$operatorWB.communication.form.installment.installmentPeriod = v
        this.$operatorWB.communication.getSchedule(v)
      }
    },
    _payment: {
      get () {
        return this.payment
      },
      set (v) {
        const payment = this.$operatorWB.communication.calculatePrimaryPayment(v)
        this.payment = null
        this.$nextTick(function () {
          this.payment = payment
        })

        if (this.$operatorWB.communication.form.installment.primaryPayment !== payment) {
          this.$nextTick(function () {
            this.$operatorWB.communication.form.installment.primaryPayment = payment
            this.$operatorWB.communication.getSchedule(this.months)
          })
        }
      }
    }
  },
  created () {
    this.$operatorWB.communication.form.installment.installmentPeriod = 1
    this.payment = this.$operatorWB.communication.calculatePrimaryPayment(0)
    this.$operatorWB.communication.getSchedule(this.months)
  }
}
</script>

<style lang="stylus">
  .comments__calc-content .q-field__bottom
    padding-top: 0

</style>
