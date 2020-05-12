<template lang="pug">
  .filtered-table
    q-table.my-sticky-header-table(
      :data="itemsFiltered"
      :columns="tableOptions.columns"
      :pagination.sync="tableOptions.pagination"
      :visible-columns="tableOptions.visibleColumns"
      color="WB-secondary"
      :loading="loading"
      row-key="id"
      separator="cell"
      :sort-method="mySort"
      :rowsPerPageOptions="[3, 5, 7, 10, 15, 20, 25, 30, 35, 50, 0]"
      :dark="false"
    )
      template(v-slot:top="props")
        .row.items-center.full-width
          .col-1
            .table__top-title
              span {{title}}

          .col
            slot(name="ft-filters" :props="props")

      template(v-slot:top-row="props")
        slot(name="ft-top-row" :props="localProps(props)" :items="itemsFiltered")
          q-tr.hidden
            q-td(colspan="100%") &nbsp;

      template(v-slot:header="props")
        TableFilters(
          :props="props"
          :filters="filters"
          :columns="columns"
          :data-prop="props"
          :items="items"
          :itemsFiltered="itemsFiltered"
          @setFilter="setFilter"
          @resetFilter="resetFilter"
        )
      template(v-slot:body="props")
        slot(name="ft-body" :props="localProps(props)")
          q-tr.hidden
            q-td(colspan="100%") &nbsp;
      template(v-slot:bottom-row="props")
        slot(name="ft-bottom" :props="localProps(props)")
          q-tr.hidden
            q-td(colspan="100%") &nbsp;

      template(v-if="customLoading" v-slot:loading)
        slot(name="loading")
          q-inner-loading(showing)
</template>

<script>
import {
  getShortDate,
  isNumeric,
  isRelevantRangeValueDateString,
  isRelevantRangeValueNumber,
  isRelevantStringValue,
  sortDate
} from 'src/utils/helpers'
import TableFilters from './Header'
import { date, debounce } from 'quasar'

const { isValid } = date

export default {
  name: 'FilteredTable',
  components: { TableFilters },
  props: {
    title: String,
    tableOptions: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    loading: Boolean,
    customLoading: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  data () {
    return {
      ...this.tableOptions,
      getShortDate,
      filters: {},
      itemsFiltered: []
    }
  },
  created () {
    this.debounceFilter = debounce(this.doFilter, 300)
  },
  watch: {
    items: {
      handler: function (v, old) {
        this.itemsFiltered = [...v]
        if (v && old && v.length !== old.length) {
          this.clearFilters()
        } else {
          this.doFilter()
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    localProps (props) {
      return {
        ...props,
        filters: this.filters
      }
    },
    mySort (data, sortBy, descending) {
      const col = this.columns.find(def => def.name === sortBy)
      // eslint-disable-next-line no-void
      if (col === null || col.field === void 0) {
        return data
      }

      const
        dir = descending ? -1 : 1,
        val = typeof col.field === 'function'
          ? v => col.field(v)
          : v => v[col.field]

      return data.sort((a, b) => {
        let
          A = val(a),
          B = val(b)

        // eslint-disable-next-line no-void
        if (A === null || A === void 0) {
          return 1
        }
        // eslint-disable-next-line no-void
        if (B === null || B === void 0) {
          return -1
        }
        if (col.sort) {
          return col.sort(A, B) * dir
        }
        if (isNumeric(A) && isNumeric(B)) {
          return (A - B) * dir
        }
        if (isValid(A) && isValid(B)) {
          return sortDate(A, B) * dir
        }
        if (typeof A === 'boolean' && typeof B === 'boolean') {
          return (a - b) * dir
        }

        [A, B] = [A, B].map(s => (s + '').toLowerCase())

        return A < B
          ? -1 * dir
          : (A === B ? 0 : dir)
      })
    },

    doFilter () {
      let list = this.items
      const filters = this.filters
      for (const f in filters) {
        const type = this.columns.find(i => i.name === f).type
        switch (type) {
          case 'number':
          case 'range':
            list = list.filter(item => {
              return isRelevantRangeValueNumber(item[f], filters[f])
            })
            break
          case 'date':
          case 'datetime':
          case 'time':
            list = list.filter(item => {
              return isRelevantRangeValueDateString(item[f], filters[f])
            })
            break
          case 'select':
            list = list.filter(item => filters[f].includes(item[f]))
            break
          case 'string':
          case 'text':
            list = list.filter(item => {
              return isRelevantStringValue(item[f], filters[f])
            })
            break
          default:
            break
        }
      }
      this.itemsFiltered = list
    },
    setFilter (filter) {
      const filters = Object.assign({}, this.filters)
      this.filters = Object.assign({}, filters, filter)
      this.debounceFilter()
    },
    resetFilter (field) {
      const filters = this.filters
      if (filters[field] !== undefined) {
        delete filters[field]
        this.filters = Object.assign({}, filters)
        this.debounceFilter()
      }
    },
    clearFilters () {
      this.filters = Object.assign({}, {})
    },
  },
}
</script>

<style scoped lang="stylus">
  /*@import '~variables'*/
  .green
    background: $green-1

  .orange
    background: $orange-1

  .red
    background: $red-1

  .yellow
    background: $yellow-1

  .promised-clients-table .q-table.middle.scroll
    overflow: none
</style>
