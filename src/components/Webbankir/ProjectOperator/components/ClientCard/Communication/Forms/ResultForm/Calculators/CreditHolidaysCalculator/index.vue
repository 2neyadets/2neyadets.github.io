<template lang="pug">

  .comments__result-calc(v-if="creditHolidays")
    .comments__calc
      .comments__calc-content
        .comments__calc-title {{ $t('communications.headings.gracePeriod') }}
        q-input.comments__calc-date.date-picker(
          :value="startDate"
          mask="##.##.##"
          :hint="$t('communications.labels.startDate')"
          :loading="loading"
          :disable="loading"
          dense
          outlined
          readonly
          color="WB-primary"
          :dark="false"
        )
          ProxyDate(
            @dateChanged="changedStartDate"
            :type="'creditHolidays'"
            :entity="creditHolidays"
            :stringKey="'startDate'"
            dataDateFormat="YYYY-MM-DD"
            :min="minStartDate"
            :max="maxStartDate"
          )
          template(slot="append")
            q-icon.cursor-pointer(name="event")
        q-input.comments__calc-date.date-picker(
          :value="expirationDate"
          mask="##.##.##"
          :hint="$t('communications.labels.expirationDate')"
          :loading="loading"
          :disable="loading"
          dense
          outlined
          readonly
          color="WB-primary"
          :dark="false"
        )
          ProxyDate(
            @dateChanged="changedExpirationDate"
            :type="'creditHolidays'"
            :entity="creditHolidays"
            :stringKey="'expirationDate'"
            dataDateFormat="YYYY-MM-DD"
            :min="minExpirationDate"
            :max="maxExpirationDate"
          )
          template(slot="append")
            q-icon.cursor-pointer(name="event")
</template>

<script>
import { date } from 'quasar'
import ProxyDate from '../PromiseCalculators/ProxyDate'

const { formatDate, extractDate, addToDate, subtractFromDate, getDateDiff } = date

export default {
  name: 'CreditHolidaysCalculator',
  components: { ProxyDate },
  data () {
    return {
      startDate: formatDate(this.$operatorWB.communication.form.creditHolidays.startDate, 'DD.MM.YY'),
      expirationDate: formatDate(this.$operatorWB.communication.form.creditHolidays.expirationDate, 'DD.MM.YY'),
    }
  },
  computed: {
    creditHolidays () {
      return this.$operatorWB.communication.form.creditHolidays
    },
    loading () {
      return this.$operatorWB.communication.loading.saveCommunication
    },
    minStartDate () {
      return subtractFromDate(new Date(), { days: 14 })
    },
    maxStartDate () {
      const expirationDateMinus1Day = subtractFromDate(extractDate(this.expirationDate, 'DD.MM.YY'), { days: 1 }),
        maxDate = new Date(2020, 8, 30)
      return formatDate(expirationDateMinus1Day > maxDate ? maxDate : expirationDateMinus1Day, 'YYYY-MM-DDTHH:mm:ssZ')
    },
    minExpirationDate () {
      return addToDate(extractDate(this.startDate, 'DD.MM.YY'), { days: 1 })
    },
    maxExpirationDate () {
      const startDatePlus6Month = addToDate(extractDate(this.startDate, 'DD.MM.YY'), { month: 6 }),
        maxDate = new Date(2021, 2, 30)
      return formatDate(startDatePlus6Month > maxDate ? maxDate : startDatePlus6Month, 'YYYY-MM-DDTHH:mm:ssZ')
    },
  },
  methods: {
    changedStartDate (v) {
      this.startDate = v
    },
    changedExpirationDate (v) {
      this.expirationDate = v
    },
  },
  watch: {
    startDate (v) {
      if (v) {
        const start = extractDate(v, 'DD.MM.YY'),
          expiration = extractDate(this.expirationDate, 'DD.MM.YY'),
          isDiffMore6Months = getDateDiff(expiration, start, 'months') > 6 ||
            (getDateDiff(expiration, start, 'months') === 6 &&
              Number(formatDate(expiration, 'DD')) > Number(formatDate(start, 'DD')))
        this.creditHolidays.startDate = formatDate(start, 'YYYY-MM-DD')
        if (isDiffMore6Months) this.expirationDate = formatDate(addToDate(start, { month: 6 }), 'DD.MM.YY')
      } else {
        this.creditHolidays.startDate = null
      }
    },
    expirationDate (v) {
      if (v) {
        this.creditHolidays.expirationDate = formatDate(extractDate(v, 'DD.MM.YY'), 'YYYY-MM-DD')
      } else {
        this.creditHolidays.expirationDate = null
      }
    },
  }
}
</script>

<style lang="stylus">
  .comments__calc-content .q-field-bottom
    padding-top: 0

</style>
