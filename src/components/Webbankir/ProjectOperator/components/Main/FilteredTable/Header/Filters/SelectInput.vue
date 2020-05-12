<template lang="pug">
  .filter-select-input
    .q-px-sm(dense)
      q-checkbox(
        :value="all"
        :label="labelAll"
        @input="changeAll"
        :dark="false"
        color="WB-primary"
      )
    q-separator
    q-list.q-pt-none
      q-scroll-area.bg-grey-2(style="height: 200px;width: 350px")
        template(v-for="item in list")
          q-item.q-pl-sm(:key="item.id" dense)
            q-checkbox(
              :color="countFiltered(item) > 0 ? 'WB-primary' : 'grey-5'"
              v-model="selected"
              :val="item.label"
              :label="`${item.label || '<Пусто>'} (${countFiltered(item)} из ${count(item)})`"
              :dark="false"
            )
    q-separator
</template>

<script>
import { sortBy, uniqBy } from 'lodash'

export default {
  name: 'SelectInput',
  props: {
    filters: {
      type: Object
    },
    columns: {
      type: Array
    },
    columnName: {
      type: String
    },
    items: {
      type: Array
    },
    itemsFiltered: {
      type: Array
    }
  },
  data () {
    return {
      selected: [],
      all: false
    }
  },
  computed: {
    list () {
      const list = uniqBy(this.items, this.columnName)
      return sortBy(list
        .map(i => ({
          label: i[this.columnName],
          value: !!i[this.columnName],
          [this.columnName]: i[this.columnName]
        })), [this.columnName])
    },
    labelAll () {
      return `Все (${this.itemsFiltered.length} из ${this.items.length})`
    }
  },
  methods: {
    count (val) {
      const list = this.items.filter(item => item[this.columnName] === val[this.columnName])
      return list.length
    },
    countFiltered (val) {
      const list = this.itemsFiltered.filter(item => {
        return item[this.columnName] === val[this.columnName]
      })
      return list.length
    },
    changeAll (val) {
      this.all = val
      if (val === true) {
        this.selected = this.list.map(i => i.label)
      } else if (val === false) {
        this.selected = []
      }
    }
  },
  watch: {
    selected (v, old) {
      if (v.length) {
        this.$emit('setFilter', { [this.columnName]: v })
        if (v.length === this.list.length) {
          this.all = true
        } else {
          this.all = null
        }
      }
      if (!v.length && old.length) {
        this.all = false
        this.$emit('resetFilter', this.columnName)
      }
    },
    filters (v) {
      if (v[this.columnName] === undefined) {
        this.selected = []
      }
    }
  },
  mounted () {
    if (this.filters[this.columnName] !== undefined) {
      this.selected = this.filters[this.columnName]
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
