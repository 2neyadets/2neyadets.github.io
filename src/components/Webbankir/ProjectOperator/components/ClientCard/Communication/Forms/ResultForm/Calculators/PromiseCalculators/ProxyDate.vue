<template lang="pug">
  q-popup-proxy(
    ref="qDateProxy"
    transition-show="scale"
    transition-hide="scale"
  )
    q-date(
      v-model="formattedDate"
      @input="() => $refs.qDateProxy.hide()"
      :options="canChooseDates"
      mask="DD.MM.YY"
      color="WB-primary"
      :dark="false"
    )
</template>

<script>
import { date } from 'quasar'

const { formatDate, extractDate } = date

export default {
  name: 'ProxyDate',
  data () {
    return {
      formattedDate: null
    }
  },
  created () {
    this.formattedDate = formatDate(this.variable, 'DD.MM.YY')
  },
  props: {
    type: {
      type: String,
      required: true
    },
    entity: {
      type: Object,
      required: true
    },
    stringKey: {
      type: String,
      required: true
    },
    min: {
      type: Date,
      required: true
    },
    max: {
      type: String,
      required: true
    },
    dataDateFormat: {
      type: String,
      default: 'YYYY-MM-DDTHH:mm:ssZ'
    }
  },
  computed: {
    variable () {
      return this.entity[this.stringKey]
    }
  },
  methods: {
    canChooseDates (date) {
      if (date.includes('.')) {
        date = date.split('.')
        date = '20' + date[2] + '/' + date[1] + '/' + date[0]
      }
      return date >= formatDate(this.min, 'YYYY/MM/DD') &&
        date <= formatDate(this.max, 'YYYY/MM/DD')
    }
  },
  watch: {
    formattedDate (v) {
      this.$emit('dateChanged', v)
    },
    variable (v) {
      this.formattedDate = formatDate(extractDate(v, this.dataDateFormat), 'DD.MM.YY')
    }
  }
}
</script>

<style scoped>
</style>
