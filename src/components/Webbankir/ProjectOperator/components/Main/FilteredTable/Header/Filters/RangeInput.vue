<template lang="pug">
  .filter-range-input
    .row.justify-between
      q-checkbox(
        v-if="hasNull"
        v-model="notNull"
        label="Не равно 0"
        @input="onInputNull"
        :dark="false"
        color="WB-primary"
      )
    .row.q-px-md
      q-range(
        v-if="list.length"
        v-model="range"
        :min="min"
        :max="max"
        :step="step"
        :color="color"
        @change="onInputRange"
        drag-range
        label
        snap
        :dark="false"
        color="WB-primary"
      )

    .row.justify-between.gutter-x-sm.q-my-md
      .col.q-pr-sm
        q-input(
          type="number"
          v-model.number="range.min"
          :placeholder="min"
          :bg-color="colorValueMin"
          :clearable="isClearableMin"
          @clear="onValueMinClear"
          @click.stop
          @input="onInputRange"
          standout="bg-WB-primary text-white"
          class="filter-range-inputs__search"
          no-icon
          :dark="false"
        )
      .col.q-pl-sm
        q-input(
          type="number"
          v-model.number="range.max"
          :placeholder="max"
          :bg-color="colorValueMax"
          standout="bg-WB-primary text-white"
          :clearable="isClearableMax"
          @clear="onValueMaxClear"
          @click.stop
          @input="onInputRange"
          class="filter-range-inputs__search filter-range-inputs__search-bottom"
          no-icon
          :dark="false"
        )
</template>

<script>
import _ from 'lodash'

export default {
  name: 'RangeInput',
  props: {
    columnName: {
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
  created () {
    this.byStep = false
    this.debouncFilter = 300
    this.doDebouncedFilter = _.debounce(this.doFilter, this.debouncFilter)
    this.list = [...this.items]
    this.doRefreshList()
  },
  mounted () {
    if (this.filters[this.columnName] !== undefined) {
      this.range.min = this.filters[this.columnName].min
      this.range.max = this.filters[this.columnName].max
    }
  },
  computed: {
    min () {
      return this.hasValueList.length ? Math.floor(_.min(this.hasValueList)) : null
    },
    max () {
      return this.hasValueList.length ? Math.ceil(_.max(this.hasValueList)) : null
    },
    step () {
      let step = 1
      if (this.byStep) {
        const length = this.max - this.min
        if (length < 1) {
          step = length / 10
        } else if (length > 10) {
          step = Math.round(length / 10)
        }
      }
      return step
    },
    isActive () {
      return this.isActiveValueMin || this.isActiveValueMax
    },
    isActiveValueMin () {
      return this.range.min !== null &&
        !_.eq(this.range.min * 1, this.min)
    },
    isActiveValueMax () {
      return this.range.max !== null &&
        !_.eq(this.range.max * 1, this.max)
    },
    color () {
      return this.getColor(this.isActive)
    },
    colorValueMin () {
      return this.getColor(this.isActiveValueMin)
    },
    colorValueMax () {
      return this.getColor(this.isActiveValueMax)
    },
    isValid () {
      return 1 &&
        this.min != null &&
        this.max != null &&
        _.gte(this.max, this.min + this.step)
    },
    isClearableMin () {
      return this.isActiveValueMin
    },
    isClearableMax () {
      return this.isActiveValueMax
    },
    hasNull () {
      const list = this.items
        .map(item => item[this.columnName])
        .filter(item => {
          return item === 0 || item === null || item === undefined
        })
      return list.length
    },
    hasValueList () {
      const list = this.items
        .map(item => item[this.columnName] ? Number(item[this.columnName]) : null)
        .filter(item => {
          return !(item === null || item === undefined)
        })
      return list
    },
  },
  watch: {
    isActive (v, old) {
      if (old && !v) {
        this.doEmitSearchClear()
      }
    },
    min () {
      if (this.range.min == null || _.lt(this.range.min, this.min)) {
        this.doSetWideMin()
      }
      if (this.min === undefined) this.doEmitSearchClear()
    },
    max () {
      if (this.range.max == null || _.gt(this.range.max, this.max)) {
        this.doSetWideMax()
      }
      if (this.max === undefined) this.doEmitSearchClear()
    },
    filters (v) {
      if (v[this.columnName] === undefined) {
        this.range = Object.assign({}, {
          min: null,
          max: null
        })
        this.notNull = false
        this.list = [...this.items]
        this.doRefreshList()
      }
    },
    isWide () {
      return !this.isActive
    },
    isValid (v) {
      if (!v) this.doEmitSearchClear()
    },
    'range.min' (v) {
      if (0 ||
        _.lt(v * 1, this.min) ||
        _.gt(v * 1, this.max)
      ) {
        this.doSetWideMin()
      }
    },
    'range.max' (v) {
      if (0 ||
        _.lt(v * 1, this.min) ||
        _.gt(v * 1, this.max)
      ) {
        this.doSetWideMax()
      }
    },
  },
  methods: {
    doRefreshList () {
      const list = !this.list.length ? [] : [...this.items]
      this.list = _.uniq(list
        .filter(item => {
          return item[this.columnName] !== null
        })
        .map(item => item[this.columnName])
      )
      this.list.sort()
    },
    getColor (isActive) {
      return isActive ? 'WB-primary' : 'faded'
    },
    doSetWideMax () {
      this.range.max = this.max
      this.doEmitChange()
    },
    doSetWideMin () {
      this.range.min = this.min
      this.doEmitChange()
    },
    doSetClearRange () {
      this.range.max = null
      this.range.min = null
      this.doEmitChange()
    },
    doFilter () {
      this.doEmitChange()
    },
    doEmitSearchClear () {
      this.doSetClearRange()
      this.$emit('resetFilter', this.columnName)
    },
    onInputRange (v) {
      this.range.min !== null && this.range.max !== null && this.doDebouncedFilter()
    },
    onInputNull (v) {
      this.notNull = v
      this.doDebouncedFilter()
    },
    doEmitChange () {
      const range = this.range
      const filter = { notNull: this.notNull, ...range }
      if (this.isActive || !!this.notNull) {
        this.$emit('setFilter', { [this.columnName]: filter })
      } else if (!this.isActive || !this.notNull) {
        this.$emit('resetFilter', this.columnName)
      }
    },
    onValueMinClear () {
      this.doSetWideMin()
      if (this.isWide) this.doEmitSearchClear()
    },
    onValueMaxClear () {
      this.doSetWideMax()
      if (this.isWide) this.doEmitSearchClear()
    },
  },
}
</script>

<style lang="stylus">
</style>
