<template lang="pug">
  .filter-date-input

    .row.justify-between
      q-checkbox(
        v-if="hasNull"
        v-model="notNull"
        label="Не пустое"
        @input="onInputRange"
        :dark="false"
      )
    .row.justify-between.q-gutter-sm
      DateTimeInput.col(
        v-model="range.min"
        :type="columnType"
        :min="min"
        :max="max"
        :valueDefault="min"
        :value="range.min"
        @input="onInputRange"
        @clear="onValueMinClear"
        :filters="currentFilters"
        purpose="min"
      )
      DateTimeInput.col(
        v-model="range.max"
        :type="columnType"
        :min="min"
        :max="max"
        :valueDefault="max"
        :value="range.max"
        @input="onInputRange"
        @clear="onValueMaxClear"
        :filters="currentFilters"
        purpose="max"
      )

</template>

<script>
import _ from 'lodash'
import DateTimeInput from './DateTimeInput.vue'
import { date } from 'quasar'

const { isValid, formatDate, getMinDate, getMaxDate, isSameDate } = date

export default {
  name: 'DateInput',
  props: {
    columnName: {
      type: String,
    },
    columnType: {
      type: String,
    },
    filters: {
      type: Object,
    },
    columns: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    itemsFiltered: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      range: {
        min: null,
        max: null,
      },
      notNull: false,
      list: [],
    }
  },
  components: {
    DateTimeInput,
  },
  created () {
    this.debouncFilter = 300
    this.doDebouncedFilter = _.debounce(this.doFilter, this.debouncFilter)

    this.formatOuter = 'YYYY-MM-DDTHH:mm:ssZ'
    this.formatView = 'DD.MM.YYYY HH:mm:ss'
    this.list = this.items
  },
  computed: {
    rangeDefault () {
      return {
        notNull: false,
        min: this.moment2formatOuter(this.min),
        max: this.moment2formatOuter(this.max),
      }
    },
    hasNull () {
      const list = this.list
        .map(item => item[this.columnName])
        .filter(item => !item)
      return list.length
    },
    hasDateList () {
      const list = this.list
        .map(item => item[this.columnName])
        .filter(item => !!item)
        .sort((a, b) => {
          if (a < b) return -1
          if (a > b) return 1
          return 0
        })
        .map(item => {
          let d = new Date()
          if (isValid(item)) {
            d = new Date(item)
          }
          return d
        })
      return list
    },
    currentFilters () {
      return this.filters[this.columnName]
    },
    min () {
      return this.hasDateList.length ? this.format2Date(getMinDate(...this.hasDateList)) : null
    },
    max () {
      return this.hasDateList.length ? this.format2Date(getMaxDate(...this.hasDateList)) : null
    },
    isActive () {
      return 0 ||
        this.isActiveValueMin ||
        this.isActiveValueMax
    },
    isActiveValueMin () {
      return this.range.min !== null &&
        !isSameDate(this.range.min, this.min, 'day')
    },
    isActiveValueMax () {
      return this.range.max !== null &&
        !this.range.max.isSame(this.max, 'day')
    },
    isValid () {
      return 1 &&
        this.min != null &&
        this.max != null
    },
  },
  watch: {
    min () {
      if (this.min === undefined) this.doEmitSearchClear()
    },
    max () {
      if (this.max === undefined) this.doEmitSearchClear()
    },
    isValid () {
      if (!this.isValid) this.doEmitSearchClear()
    },
    items (v) {
      this.list = [...v]
      this.doRefreshList()
    },
    currentFilters (v, old) {
      if (v === undefined) {
        this.notNull = false
      }
    }
  },
  methods: {
    format2Date (val) {
      return formatDate(val, this.formatOuter)
    },
    doRefreshList () {
      if (!this.list.length) {
        this.list = this.list
          .map(item => item[this.columnName])
        this.list.sort()
      }
    },
    moment2formatOuter (m) {
      return m ? formatDate(m, this.formatOuter) : ''
    },
    getClearRange () {
      return {
        min: null,
        max: null,
      }
    },
    doSetWideMax () {
      this.range.max = this.max
      this.range.max && this.doEmitChange()
    },
    doSetWideMin () {
      this.range.min = this.min
      this.range.min && this.doEmitChange()
    },
    doSetWideRange () {
      this.range.min = this.min
      this.range.max = this.max
      this.doEmitChange()
    },
    doSetClearRange () {
      this.range.min = null
      this.range.max = null
      this.doEmitChange()
    },
    doFilter () {
      this.doEmitChange()
    },
    doEmitSearchClear () {
      this.$emit('resetFilter', this.columnName)
    },
    onInputRange () {
      this.doDebouncedFilter()
    },
    doEmitChange () {
      const filters = this.filters[this.columnName]
      if (this.range.min === null) {
        // eslint-disable-next-line no-prototype-builtins
        this.range.min = filters && filters.hasOwnProperty('min') ? filters.min : null
      }
      if (this.range.max === null) {
        // eslint-disable-next-line no-prototype-builtins
        this.range.max = filters && filters.hasOwnProperty('max') ? filters.max : null
      }
      const range = {
        notNull: this.notNull,
        min: this.range.min ? this.moment2formatOuter(this.range.min) : this.moment2formatOuter(this.min),
        max: this.range.max ? this.moment2formatOuter(this.range.max) : this.moment2formatOuter(this.max),
      }
      JSON.stringify(range) !== JSON.stringify(this.rangeDefault) ? this.$emit('setFilter', { [this.columnName]: range }) : this.doEmitSearchClear()
    },
    onValueMinClear () {
      this.doSetWideMin()
      if (!this.isActive) this.doEmitSearchClear()
    },
    onValueMaxClear () {
      this.doSetWideMax()
      if (!this.isActive) this.doEmitSearchClear()
    },
  },
}
</script>

<style lang="stylus">
</style>
