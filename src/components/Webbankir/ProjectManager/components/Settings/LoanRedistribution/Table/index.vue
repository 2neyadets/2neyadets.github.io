<template lang="pug">
  .redistribution__table
    q-table(
      :data="$managerWB.loanRedistribution.dataForTable"
      :columns="columns"
      :pagination.sync="pagination"
      :loading="$managerWB.loanRedistribution.loading.toFormMethod"
      :loading-label="$t('loanRedistribution.table.fetchingData')"
      :no-data-label="$t('loanRedistribution.table.noData')"
      :rows-per-page-label="longLongString"
      :visible-columns="visibleColumns"
      separator="cell"
      row-key="name"
      color="WB-secondary"
      bordered
      dense
      dark
    )
      template(#top="props")
        q-space
        q-select(
          transition-show="fade"
          transition-hide="fade"
          :options="columns"
          :display-value="$q.lang.table.columns"
          v-model="visibleColumns"
          color="WB-secondary"
          popup-content-class="bg-WB-dark text-white"
          multiple
          outlined
          dense
          dark
          options-dense
          emit-value
          map-options
          option-value="name"
          style="min-width: 150px"
          @input="setNewColumnsToLocalStorage"
        )
      template(#body="props")
        q-tr
          q-td.q-pa-none(v-for="col in props.cols" :key="col.name" :props="props")
            template(v-if="col.name === 'state'") {{$t('loanRedistribution.table.state.' + col.value)}}
            template(v-else) {{col.value}}
      template(#pagination="props")
        .row.flex-center
          q-btn.q-mr-sm(
            round
            dense
            size="sm"
            icon="undo"
            color="WB-legend-color-info"
            :disable="props.isFirstPage"
            @click="props.prevPage"
          )
          .q-mr-sm
            span {{ props.pagination.page }} / {{ props.pagesNumber }}
          q-btn(
            round
            dense
            size="sm"
            icon="redo"
            color="WB-legend-color-info"
            :disable="props.isLastPage"
            @click="props.nextPage"
          )
      template(#loading)
        q-inner-loading(showing dark)
</template>

<script>
import { LocalStorage } from 'quasar'
import { money } from 'src/utils/helpers'

export default {
  name: 'RedistributionTable',
  data () {
    return {
      visibleColumns: LocalStorage.getItem('redistributionTableVisibleColumns') || ['client', 'contract', 'groupName', 'newGroupName', 'delay', 'debt'],
      pagination: {
        page: 1,
        rowsPerPage: 10
      },
      columns: [
        { name: 'client', field: 'client', label: 'ФИО', align: 'start', sortable: true, required: true, disable: true },
        { name: 'contract', field: 'contract', label: 'Договор', align: 'center', sortable: true },
        { name: 'groupName', field: 'groupName', label: 'Группа-донор', align: 'center', sortable: true },
        { name: 'newGroupName', field: 'newGroupName', label: 'Группа-реципиент', align: 'center', sortable: true },
        { name: 'delay', field: 'delay', label: 'Просрочка', align: 'center', sortable: true },
        { name: 'debt', field: 'debt', format: (v) => money(v, true), label: 'Задолженность', align: 'right', sortable: true },
      ]
    }
  },
  created () {
  },
  computed: {
    longLongString () {
      return this.$t('loanRedistribution.table.quantityOfLoans') + this.quantityOfLoans +
        '\u00A0\u00A0\u00A0\u00A0' + this.$t('loanRedistribution.table.totalSumOfDebts') + this.totalSumOfDebts +
        '\u00A0\u00A0\u00A0\u00A0' + this.$t('loanRedistribution.table.loansPerPage')
    },
    quantityOfLoans () {
      return this.$managerWB.loanRedistribution.dataForTable.length
    },
    totalSumOfDebts () {
      let sum = 0
      for (let i = 0; i < this.$managerWB.loanRedistribution.dataForTable.length; i++) {
        sum += this.$managerWB.loanRedistribution.dataForTable[i].debt
      }
      return Number(sum).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
    }
  },
  methods: {
    setNewColumnsToLocalStorage () {
      LocalStorage.set('redistributionTableVisibleColumns', this.visibleColumns)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
