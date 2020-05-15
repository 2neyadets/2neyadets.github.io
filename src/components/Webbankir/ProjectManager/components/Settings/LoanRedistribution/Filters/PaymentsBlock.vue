<template lang="pug">
  .payments__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.payments')}}
    .flex.justify-around.items-center
      q-checkbox.q-mx-xs(
        v-model="$managerWB.loanRedistribution.filters.payments.isPaid.yes"
        @input="uncheckPayments(true)"
        :label="$t('loanRedistribution.filters.labels.yes')"
        color="positive"
        keep-color
      )
      q-checkbox.q-mx-xs(
        v-model="$managerWB.loanRedistribution.filters.payments.isPaid.no"
        @input="uncheckPayments(false)"
        :label="$t('loanRedistribution.filters.labels.no')"
        color="negative"
        keep-color
      )
      .q-ma-xs
        .text-center
          span {{$t('loanRedistribution.filters.labels.oldestDate')}}
        .flex.justify-center.items-center.q-my-xs.q-mx-sm
          q-input.q-px-xs(
            v-model="rusDate"
            mask="##.##.####"
            color="WB-secondary"
            input-class="text-center text-WB-bg-profile-color q-pa-none"
            standout="bg-WB-secondary"
            dense
            dark
            outlined
            readonly
          )
            q-popup-proxy(
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            )
              q-date(
                v-model="$managerWB.loanRedistribution.filters.payments.oldestDate"
                @input="() => $refs.qDateProxy.hide()"
                color="WB-modal-bg-color"
                :dark="false"
              )
            template(#append)
              q-icon.cursor-pointer(name="event")
</template>

<script>
import { changeDateFormat } from 'src/utils/helpers'

export default {
  name: 'PaymentsBlock',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    rusDate: {
      get () {
        return changeDateFormat(this.$managerWB.loanRedistribution.filters.payments.oldestDate)
      },
      set (v) {
        this.$managerWB.loanRedistribution.filters.payments.oldestDate = changeDateFormat(v, 'DD.MM.YYYY', 'YYYY/MM/DD')
      }
    },
  },
  methods: {
    uncheckPayments (source) {
      if (source) {
        this.$managerWB.loanRedistribution.filters.payments.isPaid.no = false
      } else {
        this.$managerWB.loanRedistribution.filters.payments.isPaid.yes = false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
