<template lang="pug">
  q-tr.table-filters
    ThCustom.q-py-xs(
      v-for="col in props.cols"
      :props="props"
      :key="col.name"
    )
      .flex.justify-between.items-center.no-wrap
        span.icon-wrapper(
          @click="col.sortable && props.sort(col)"
        )
          IconCustom(
            v-if="col.sortable"
            :props="iconProps(col)"
            size="1.1em"
          )
        .text-wrapper(
          @click="col.sortable && props.sort(col)"
        ) {{ col.label }}

        span.icon-wrapper(
          v-if="!col.type"
        )
        span.icon-wrapper(
          v-else
          @click="show = col.name"
        )
          q-icon.cursor-pointer(
            :color="filters[col.name] ? 'WB-primary': 'grey-6'"
            name="fa fa-filter"
          )
          q-menu(:value="show === col.name")
            q-card(style="min-width: 300px" bordered :dark="false")
              q-card-section.q-py-sm
                .row.justify-between.items-center
                  .flex.justify-center.items-center
                    .text-subtitle2 {{ col.label }}
                  .flex.justify-center.items-center
                    q-btn(
                      icon="close"
                      flat
                      round
                      dense
                      v-close-popup
                    )

              q-card-section
                StringInput(
                  v-if="['text', 'string'].includes(col.type)"
                  :columns="columns"
                  :column-name="col.name"
                  :items-filtered="itemsFiltered"
                  :items="items"
                  :filters="filters"
                  @setFilter="setFilter"
                  @resetFilter="resetFilter"
                )

                RangeInput(
                  v-if="['range'].includes(col.type)"
                  :columns="columns"
                  :column-name="col.name"
                  :items-filtered="itemsFiltered"
                  :items="items"
                  :filters="filters"
                  @setFilter="setFilter"
                  @resetFilter="resetFilter"
                )

                DateInput(
                  v-if="['date', 'datetime'].includes(col.type)"
                  :columns="columns"
                  :column-name="col.name"
                  :column-type="col.type || 'date'"
                  :items-filtered="itemsFiltered"
                  :items="items"
                  :filters="filters"
                  @setFilter="setFilter"
                  @resetFilter="resetFilter"
                )

                SelectInput(
                  v-if="['select'].includes(col.type)"
                  :columns="columns"
                  :column-name="col.name"
                  :items-filtered="itemsFiltered"
                  :items="items"
                  :filters="filters"
                  @setFilter="setFilter"
                  @resetFilter="resetFilter"
                )

              q-card-actions.flex.justify-end.q-py-sm
                q-btn(
                  flat
                  dense
                  @click="resetFilter(col.name)"
                  :disable="!filters[col.name]"
                ) Сбросить

</template>

<script>
import ThCustom from './Custom/ThCustom.js'
import IconCustom from './Custom/IconCustom'
import StringInput from './Filters/StringInput'
import SelectInput from './Filters/SelectInput'
import RangeInput from './Filters/RangeInput'
import DateInput from './Filters/DateInput'
import DateTimeInput from './Filters/DateTimeInput'

export default {
  name: 'TableFilters',
  components: { DateInput, DateTimeInput, StringInput, RangeInput, IconCustom, SelectInput, ThCustom },
  props: {
    props: {
      type: Object,
      required: true
    },
    filters: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    itemsFiltered: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    column: {
      type: Object
    }
  },
  data () {
    return {
      show: null
    }
  },
  watch: {
    show (v) {
      if (this.show === v) {
        this.show = null
      }
    }
  },
  methods: {
    toggleFilters (v) {
      this.show = v
    },
    iconProps (col) {
      const props = {
        name: 'fa fa-sort',
        color: 'grey'
      }
      const classes = col.__thClass.split(' ')
      const desc = classes.includes('sort-desc')
      const sorted = classes.includes('sorted')
      if (sorted) {
        props.name = (desc ? 'fa fa-sort-up' : 'fa fa-sort-down')
        props.color = 'black'
      }
      return props
    },
    setFilter (filter) {
      this.$emit('setFilter', filter)
    },
    resetFilter (field) {
      this.$emit('resetFilter', field)
    }
  }

}
</script>

<style scoped lang="stylus">
  .text-wrapper
    text-align: center
    width: calc(100% - 48px)

  .icon-wrapper
    width: 24px
</style>
