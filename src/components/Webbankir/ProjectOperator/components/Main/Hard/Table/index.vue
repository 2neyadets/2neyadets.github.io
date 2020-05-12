<template lang="pug">
  .pretty-table__wrapper.q-pa-xs
    FilteredTable(
      :items="items"
      :table-options="options"
      :loading="$operatorWB.hard.loading"
      :title="$t('hard.table.title')"
    )
      template.fixed-body(slot="ft-body" slot-scope="data")
        q-tr.pretty-table__row.cursor-pointer(
          :props="data.props"
          :data-prop="data.props"
          :class="{'last-opened': lastOpened(data.props.row), opened: isOpenedToday(data.props.row)}"
          @dblclick.native="onRowClick(data.props.row)"
        )
          q-td(
            v-for="col in data.props.cols"
            :key="col.name"
            :props="data.props"
            row-key="clientId"
          )
            template(v-if="col.name === 'status'")
              span(:class="colorClass(col.value)") {{ col }}
            template(v-else-if="col.name === 'lastCommunicationDepartment' && col.value")
              span {{ col.value.includes('(') ? col.value.split('(')[0] : col.value }}
                template(v-if="col.value.includes('(')")
                  q-tooltip {{col.value.split('(')[1].substring(0, col.value.split('(')[1].length - 1)}}
            template(v-else)
              template(v-if="['string', 'text'].includes(col.type)")
                TextHighlight(:queries="queries(data.props.filters, col.name, col.value)") {{ col.value }}
              template(v-else-if="col.type === 'datetime'")
                span(v-if="!!col.value")
                  | {{col.value.split(' ')[0]}}
                  | &nbsp;
                  small.text-blue-grey-9 {{col.value.split(' ')[1]}}
              template(v-else)
                span {{ col.value }}

      template(slot="ft-filters" slot-scope="props" :props="props")
        .row.full-width.justify-end.items-center
          q-select.q-mr-sm(
            transition-show="fade"
            transition-hide="fade"
            :options="translatedColumns"
            :display-value="$q.lang.table.columns"
            color="WB-secondary"
            v-model="visibleColumns"
            multiple
            borderless
            dense
            options-dense
            emit-value
            map-options
            option-value="name"
            popup-content-style="color: black;"
            :dark="false"
          )
    HardTableBottomLine(:info-block="infoBlock")

</template>

<script>
import TextHighlight from 'vue-text-highlight'
import options from './options'
import FilteredTable from '../../FilteredTable/index'
import { date, LocalStorage } from 'quasar'
import { colorClass } from 'src/utils/mappers'
import HardTableBottomLine from './BottomLine'
import FilterButtons from './FilterButtons/index'
import { queries } from 'src/utils/helpers'

const { isSameDate } = date

export default {
  name: 'HardTable',
  components: {
    FilterButtons,
    HardTableBottomLine,
    FilteredTable,
    TextHighlight
  },
  data () {
    return {
      options: options,
      colorClass,
      queries,
      openedNow: null
    }
  },
  computed: {
    items () {
      return this.$operatorWB.hard.hardList
    },
    visibleColumns: {
      get () {
        return this.options.visibleColumns
      },
      set (cols) {
        this.options = Object.assign({}, this.options, { visibleColumns: cols })
      }
    },
    translatedColumns () {
      return this.options.columns
    },
    infoBlock () {
      let summLoan = 0
      let summPercent = 0
      let avrDelay = 0
      let avrDebt = 0
      let avrLoan = 0
      const size = this.$operatorWB.hard.hardList.length || 0
      if (this.$operatorWB.hard.hardList && this.$operatorWB.hard.hardList.length > 0) {
        this.$operatorWB.hard.hardList.forEach(element => {
          summLoan += +element.summLeft
          summPercent += +element.summPercent
          avrDelay += +element.daysDelay
          avrDebt += +element.summTotal
          avrLoan += +element.amount
        })
      }
      return {
        size: size,
        summLoan: summLoan.toFixed(0),
        summPercent: summPercent.toFixed(0),
        avrDelay: isFinite(avrDelay / size) ? (avrDelay / size).toFixed(0) : 0,
        avrDebt: isFinite(avrDebt / size) ? (avrDebt / size).toFixed(0) : 0,
        avrLoan: isFinite(avrLoan / size) ? (avrLoan / size).toFixed(0) : 0,
      }
    },

  },
  methods: {
    isOpenedToday (row) {
      return isSameDate(row.openedAt, new Date(), 'day')
    },
    lastOpened (row) {
      return this.openedNow === row.id
    },
    onRowClick (row) {
      if (!this.$operatorWB.hard.loading) {
        this.openedNow = row.id
        this.$operatorWB.hard.setOpened(row.id)
        this.$operatorWB.layout.openClientCard({
          clientId: row.id,
          source: 'hardList',
          cardType: 'classic'
        })
      }
    },
    changeActiveTab (name) {
      this.$operatorWB.hard.setActiveTab(name)
      this.$operatorWB.hard.getHardList()
    },
    openCard (id) {
      alert(JSON.stringify(id, null, 4))
    }
  },
  created () {
    const cols = LocalStorage.getItem('hard-list-columns')
    if (cols) {
      this.options = Object.assign({}, this.options, { visibleColumns: cols })
    }
    this.$operatorWB.hard.loading = true
    this.$operatorWB.hard.setActiveTab('all')
    this.$operatorWB.hard.getHardList()
  },
  watch: {
    visibleColumns (v) {
      LocalStorage.set('hard-list-columns', v)
    }
  },

}
</script>

<style scoped>
</style>
