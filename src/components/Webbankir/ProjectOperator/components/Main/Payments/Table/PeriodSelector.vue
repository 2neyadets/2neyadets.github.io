<template lang="pug">
  .row.items-center
    span.q-mr-sm {{$t('global.date.from')}}:
    q-input.comments__calc-date.date-picker.q-mr-md(
      v-model="fromVal"
      :format="format"
      :dark="false"
      dense
      outlined
      readonly
    )
      q-popup-proxy(
        ref="qDateProxyFrom"
        transition-show="scale"
        transition-hide="scale"
      )
        q-date(
          v-model="fromVal"
          @input="() => $refs.qDateProxyFrom.hide()"
          :options="canChooseDates"
          :mask="format"
          color="WB-primary"
          :dark="false"
        )
      template(slot="append")
        q-icon.cursor-pointer(name="event")
    span.q-mr-sm {{$t('global.date.to')}}:
    q-input.comments__calc-date.date-picker.q-mr-md(
      v-model="toVal"
      :format="format"
      :dark="false"
      dense
      outlined
      readonly
    )
      q-popup-proxy(
        ref="qDateProxyTo"
        transition-show="scale"
        transition-hide="scale"
      )
        q-date(
          v-model="toVal"
          @input="() => $refs.qDateProxyTo.hide()"
          :options="canChooseDates"
          :mask="format"
          color="WB-primary"
          :dark="false"
        )
      template(slot="append")
        q-icon.cursor-pointer(name="event")
    q-btn(
      :label="$t('global.buttons.load')"
      @click="submit"
      size="sm"
      color="WB-primary"
    )
</template>

<script>
import { date } from 'quasar'
const { formatDate, extractDate } = date

export default {
  name: 'PeriodSelector',
  props: {
    min: {
      type: Date,
      required: true
    },
    max: {
      type: Date,
      required: true
    },
    from: {
      type: Date,
      required: true
    },
    to: {
      type: Date,
      required: true
    },
    format: {
      type: String,
      default: 'DD.MM.YYYY'
    },
  },
  computed: {
    fromVal: {
      get () {
        return formatDate(this.from, this.format)
      },
      set (v) {
        this.$emit('change', 'from', extractDate(v, this.format))
      }
    },
    toVal: {
      get () {
        return formatDate(this.to, this.format)
      },
      set (v) {
        this.$emit('change', 'to', extractDate(v, this.format))
      }
    },

  },
  methods: {
    submit () {
      this.$emit('submit')
    },
    canChooseDates (date) {
      if (date.includes('.')) {
        date = date.split('.')
        date = '20' + date[2] + '/' + date[1] + '/' + date[0]
      }
      return date >= formatDate(this.min, 'YYYY/MM/DD') &&
        date <= formatDate(this.max, 'YYYY/MM/DD')
    }
  }
}
</script>

<style scoped>
</style>
