<template lang="pug">
  .filter-date-time-input
    .row
      q-input(
        v-model="valueForQSearch"
        :placeholder="placeholderValue"
        :color="color"
        :bg-color="bgcolor"
        :clearable="isClearable"
        standout="bg-gray-10 text-white"
        @clear="onValueClear"
        @input="onInput"
        no-icon
        dense
        :dark="false"
      )
        template(#prepend)
          q-icon.cursor-pointer(name="event")
            q-popup-proxy(
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            )
              q-date(
                v-model="valueForQDatetime"
                :options="canChooseDates"
                :mask="formatOuter"
                :default-year-month="getDefault(formatDate(valueData && valueData._d, 'YYYY/MM'))"
                @input="onInputDate"
                :dark="false"
                color="WB-primary"
              )
        template(#append v-if="type === 'datetime'")
          q-icon.cursor-pointer(name="access_time")
            q-popup-proxy(
              ref="qTimeProxy"
              transition-show="scale"
              transition-hide="scale"
            )
              q-time(
                v-model="valueForQDatetime"
                format24h
                :mask="formatOuter"
                @input="onInputTime"
                @dblclick="onInputTime"
                :dark="false"
                color="WB-primary"
              )
</template>

<script>
import { mask } from 'vue-the-mask'
import { date } from 'quasar'

const { formatDate, extractDate, isSameDate, adjustDate } = date

export default {
  name: 'FilterDateInput',
  props: {
    label: {
      type: String
    },
    type: {
      type: String,
    },
    purpose: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null,
    },
    valueDefault: {
      type: String,
    },
    filters: {
      type: Object,
    },
    min: {
      type: String,
    },
    max: {
      type: String,
    },
  },
  data () {
    return {
      valueData: this.value || this.valueDefault,
    }
  },
  directives: {
    mask,
  },
  created () {
    this.formatView = this.type === 'date' ? 'DD.MM.YYYY' : 'DD.MM.YYYY HH:mm:ss'
    this.formatOuter = 'YYYY-MM-DDTHH:mm:ssZ'
    this.mask = {
      mask: [
        '0D.1D.29DD 20:2D:DD',
      ],
      tokens: {
        0: { pattern: /[0-3]/ },
        1: { pattern: /[0,1]/ },
        2: { pattern: /[1,2]/ },
        9: { pattern: /[0,9]/ },
        D: { pattern: /\d/ },
      }
    }
  },
  mounted () {
    if (this.valueData == null && this.filters === undefined) {
      this.doSetWide()
    }
    // eslint-disable-next-line no-prototype-builtins
    if (this.filters !== undefined && this.filters.hasOwnProperty('min') && this.filters.hasOwnProperty('max')) {
      this.valueData = formatDate(this.filters[this.purpose], this.formatView)
    }
  },
  computed: {
    placeholderValue () {
      return formatDate(this.valueData, this.formatView)
    },
    valueForQDatetime: {
      get () {
        return this.valueData
      },
      set (val) {
        let date = new Date(val)
        if (this.type === 'date') {
          if (this.purpose === 'min') {
            date = adjustDate(date, {
              hours: 0,
              minutes: 0,
              seconds: 0
            })
          } else {
            date = adjustDate(date, {
              hours: 23,
              minutes: 59,
              seconds: 59
            })
          }
        }
        this.valueData = formatDate(date, this.formatOuter)
      }
    },
    valueForQSearch: {
      get () {
        return this.valueData && this.valueData !== this.valueDefault
          ? formatDate(extractDate(this.valueData, this.formatView), this.formatView) === this.valueData
            ? this.valueData
            : formatDate(this.valueData, this.formatView)
          : null
      },
      set (val) {
        if (val && val.length === 19) {
          this.valueData = formatDate(val, this.formatOuter)
        } else if (val === null) {
          this.doSetWide()
        }
      }
    },
    minForQDatetime () {
      return this.min
    },
    maxForQDatetime () {
      return this.max
    },
    isActive () {
      return this.valueData != null &&
        !isSameDate(this.valueData, this.valueDefault, 'second')
    },
    isWide () {
      return isSameDate(this.valueData, this.valueDefault, 'second')
    },
    color () {
      return this.getColor(this.isActive)
    },
    bgcolor () {
      return this.getBgColor(this.isActive)
    },
    isClearable () {
      return this.isActive
    },

  },
  watch: {
    filters (v, old) {
      if (v === undefined) {
        this.valueData = this.valueDefault
      }
    },
    valueDefault () {
      if (this.valueData == null) {
        this.doSetWide()
      }
    },
    isValid () {
      if (!this.isValid) this.doEmitSearchClear()
    }
  },
  methods: {
    formatDate,
    getColor (isActive) {
      return isActive ? 'white' : 'black'
    },
    getBgColor (isActive) {
      return isActive ? 'WB-primary' : 'grey-2'
    },
    doSetWide () {
      this.valueData = this.valueDefault
      this.doEmitChange()
    },
    doEmitSearchClear () {
      this.$emit('clear')
    },
    onInput (v) {
    },
    onInputDate (value, reason, details) {
      this.$refs.qDateProxy.hide()
      if (this.type === 'date') {
        this.doEmitChange()
      } else {
        this.$refs.qTimeProxy.show()
      }
    },
    onInputTime (value, reason, details) {
      this.doEmitChange()
      setTimeout(this.$refs.qTimeProxy.hide, 250)
    },
    doEmitChange () {
      this.$emit('input', this.valueData)
    },
    onValueClear () {
      this.doSetWide()
    },
    canChooseDates (date) {
      if (date.includes('.')) {
        date = date.split('.')
        date = date[2] + '/' + date[1] + '/' + date[0]
      }
      return date >= formatDate(this.min, 'YYYY/MM/DD') &&
        date <= formatDate(this.max, 'YYYY/MM/DD')
    },
    getDefault (string) {
      if (string && string.length >= 7) {
        return formatDate(string, 'YYYY/MM')
      }
      return formatDate(new Date(), 'YYYY/MM')
    }
  }
}
</script>

<style lang="stylus">
</style>
