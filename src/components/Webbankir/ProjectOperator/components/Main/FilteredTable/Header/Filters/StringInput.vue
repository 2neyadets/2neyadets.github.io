<template lang="pug">
  .filter-string-input
    q-input(
      v-model="query"
      @input="onAutocompleteSearch"
      :placeholder="$t('hard.filterRow.value')"
      :inverted="isActive"
      :bg-color="bgcolor"
      standout="bg-gray-5 text-white"
      :clearable="isClearable"
      @clear="onSearchClear"
      dense
      :dark="false"
    )
</template>

<script>
import { isRelevantStringValue } from 'src/utils/helpers'
import _ from 'lodash'

export default {
  name: 'StringInput',
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
      query: null,
      list: [],
    }
  },
  created () {
    this.minLetters = 3
    this.debouncFilter = 300
    this.doDebouncedFilter = _.debounce(this.doFilter, this.debouncFilter)
  },
  mounted () {
    this.query = this.filters[this.columnName] || ''
    this.doRefreshList()
  },
  computed: {
    isActive () {
      if (this.query) return this.query.length >= this.minLetters
      return false
    },
    filterFieldsWithoutSelf () {
      return this.getFilterFieldsWithoutSelf(this.filters)
    },
    bgcolor () {
      return this.getBgColor(this.isActive)
    },
    color () {
      return this.getColor(this.isActive)
    },
    isClearable () {
      return this.isActive
    },
  },
  watch: {
    isActive () {
      this.doDebouncedFilter()
    },
    query (v) {
      if (this.isActive) this.doDebouncedFilter()
      if (!v) this.onSearchClear()
    },
    filters (v, old) {
      if (v[this.columnName] === undefined) {
        this.query = null
      }
    },
  },
  methods: {
    getColor (isActive) {
      return isActive ? 'white' : 'black'
    },
    getBgColor (isActive) {
      return isActive ? 'WB-primary' : 'grey-2'
    },
    getFilterFieldsWithoutSelf (filters) {
      const _filters = Object.assign({}, filters)
      delete _filters[this.columnName]
      return _filters
    },
    doRefreshList () {
      let list = []
      if (this.isActive) {
        list = this.itemsFiltered
          .filter(row => {
            return isRelevantStringValue(row[this.columnName], this.query, 'first')
          })
          .map(item => item[this.columnName])
      }
      this.list = list
    },
    toLower (str) {
      return _.trim(str + '').toLowerCase()
    },
    onAutocompleteSearch (query) {
      query = this.toLower(query)
      const results = this.itemsFiltered
        .filter(row => {
          return isRelevantStringValue(row[this.columnName], query, 'first')
        })
        .map(row => row[this.columnName])
      const uniqResults = _.uniq(results)
      if (uniqResults.length === 1) return []
      const posResults = uniqResults.reduce((posResults, result) => {
        posResults[result] = result.toLowerCase().indexOf(query)
        return posResults
      }, {})
      uniqResults.sort()
      uniqResults.sort((a, b) => posResults[a] - posResults[b])
      const highlightedResults = uniqResults.map(result => {
        const pos = posResults[result]
        return result.substring(0, pos) + '<span class="text-positive">' + result.substr(pos, query.length) + '</span>' + result.substring(pos + query.length)
      })
      const list = uniqResults.map((result, i) => {
        return {
          value: result,
          label: highlightedResults[i],
        }
      })
      return list
    },
    doFilter () {
      this.doEmitChange()
    },
    onSearchClear () {
      this.$emit('resetFilter', this.columnName)
    },
    doEmitChange () {
      const query = this.isActive ? this.toLower(this.query) : false
      !!query && this.$emit('setFilter', { [this.columnName]: query })
    },
  },
}
</script>

<style lang="stylus">
  .filter-string-input
    margin-top: 3px
    margin-bottom: 3px
</style>
