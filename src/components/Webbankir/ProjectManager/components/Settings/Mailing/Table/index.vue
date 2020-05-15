<template lang="pug">
  .mailing__table
    q-table(
      :data="$managerWB.mailing.tableData"
      :columns="columns"
      :pagination.sync="pagination"
      :loading="$managerWB.mailing.loadings.sending"
      loading-label="Запрашиваются данные"
      no-data-label="Список не сформирован"
      :rows-per-page-label="$managerWB.mailing.tableData.length > 0 ? `Общее количество клиентов: ${$managerWB.mailing.tableData.length}` : ''"
      :rowsPerPageOptions="[3, 5, 7, 10, 15, 20, 25, 30, 35, 50, 0]"
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
            template(v-if="col.name === 'state'") {{$t('sms.table.state.' + col.value)}}
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
  name: 'MailingTable',
  data () {
    return {
      visibleColumns: LocalStorage.getItem('mailingTableVisibleColumns') || ['clientFullName', 'contract', 'groupName', 'delay', 'debt'],
      pagination: {
        page: 1,
        rowsPerPage: 10
      },
      columns: [
        { name: 'clientFullName', field: 'clientFullName', label: 'ФИО', align: 'start', sortable: true, required: true, disable: true },
        { name: 'contract', field: 'contract', label: 'Договор', align: 'center', sortable: true },
        { name: 'groupName', field: 'groupName', label: 'Группа', align: 'center', sortable: true },
        { name: 'delay', field: 'delay', label: 'Просрочка', align: 'center', sortable: true },
        { name: 'debt', field: 'debt', format: (v) => money(v, true), label: 'Задолженность', align: 'right', sortable: true },
      ]
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    setNewColumnsToLocalStorage () {
      LocalStorage.set('mailingTableVisibleColumns', this.visibleColumns)
    }
  }
}
</script>

<style lang="stylus">
  .mailing__table
    .q-table--dense .q-table__bottom-item
      margin-right 20px
</style>
