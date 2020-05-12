<template lang="pug">
  .promise-repay-full
    q-input.comments__calc-date.date-picker(
      v-model="formattedDate"
      mask="##.##.##"
      dense
      outlined
      readonly
      color="WB-primary"
      :dark="false"
    )
      ProxyDate(
        @dateChanged="changed"
        :type="'promiseOfInstallment'"
        :entity="$operatorWB.communication.form.promise"
        :stringKey="'promisedAt'"
        :min="$operatorWB.communication.today"
        :max="$operatorWB.communication.futureDate"
      )
      template(slot="append")
        q-icon.cursor-pointer(name="event")
          ProxyDate(
            @dateChanged="changed"
            :type="'promiseOfInstallment'"
            :entity="$operatorWB.communication.form.promise"
            :stringKey="'promisedAt'"
            :min="$operatorWB.communication.today"
            :max="$operatorWB.communication.futureDate"
          )
    .comments__calc-sum.flex.justify-between.items-center
      .comments__calc-text {{ $t('communications.headings.remainedDebt') }}
      .comments__calc-digits
        b {{debt}}

</template>

<script>
import { money } from 'src/utils/helpers'
import { date } from 'quasar'

const { formatDate } = date
import ProxyDate from './ProxyDate'

export default {
  name: 'PromiseToRepayInFull',
  components: { ProxyDate },
  data () {
    return {
      formattedDate: null
    }
  },
  created () {
    this.formattedDate = formatDate(this.$operatorWB.communication.form.promise.promisedAt, 'DD.MM.YY')
  },
  computed: {
    debt () {
      return money(this.$operatorWB.communication.calculated, true)
    }
  },
  methods: {
    changed (v) {
      this.formattedDate = v
    }
  },
  watch: {
    formattedDate (v) {
      if (v) {
        this.$operatorWB.communication.form.promise.promisedAt = formatDate(new Date(Number('20' + v[6] + v[7]), Number(v[3] + v[4]) - 1, Number(v[0] + v[1])), 'YYYY-MM-DDTHH:mm:ssZ')
      } else {
        this.$operatorWB.communication.form.promise.promisedAt = null
      }
    }
  }
}
</script>

<style scoped>
</style>
