<template lang="pug">
  .schedule__choose-timesheet.font-size-sm.q-ma-xs
    q-table(
      :data="$managerWB.schedule.thisMonthTimesheets"
      :columns="columns"
      :loading="$managerWB.schedule.loading"
      :pagination.sync="pagination"
      separator="cell"
      row-key="name"
      dense
      dark
      color="WB-secondary"
      hide-bottom
    )
      template(#body="props")
        q-tr.cursor-pointer(
          @click.native="changeTimesheet(props.row.id)"
          :class="classOfTr(props.row.id)"
          :props="props"
        )
          template(v-for="(col, index) in props.cols" :props="props")
            q-td(:key="col.name" :props="props")
              span {{col.value}}
          q-tooltip(anchor="center right" self="center left")
            span Загрузить табель
</template>

<script>
import moment from 'moment/moment'
moment.locale('ru')

export default {
  name: 'ChooseTimesheet',
  data () {
    return {
      columns: [
        {
          name: 'createdAt',
          label: 'Дата создания',
          align: 'center',
          field: row => this.getShortDate(row.createdAt),
          sortable: false,
          type: 'string'
        },
        {
          name: 'id',
          label: 'Номер',
          align: 'center',
          field: row => row.id,
          sortable: true,
          type: 'number'
        },
        {
          name: 'start',
          label: 'Дата начала',
          align: 'center',
          field: row => this.getShortDate(row.period),
          sortable: false,
          type: 'string'
        },
        {
          name: 'end',
          label: 'Дата окончания',
          align: 'center',
          field: row => this.endOfMonth(row.period),
          sortable: false,
          type: 'string'
        },
        {
          name: 'creator',
          label: 'Создатель',
          align: 'center',
          field: row => row.creator.fullName,
          sortable: true,
          type: 'string'
        },

      ],
      pagination: {
        sortBy: 'id',
        descending: true,
        page: 1,
        rowsPerPage: 10
      },
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    async changeTimesheet (id) {
      this.$managerWB.schedule.idOfThisMonthTimesheet = id
      await this.$managerWB.schedule.getOneTimesheet({ id: id })
    },
    getShortDate (date) {
      return moment(date).format('DD.MM.YYYY')
    },
    endOfMonth (string) {
      return moment(string).endOf('month').format('DD.MM.YYYY')
    },
    classOfTr (id) {
      return id === this.$managerWB.schedule.idOfThisMonthTimesheet ? 'today-row' : ''
    }
  }
}
</script>

<style scoped lang="stylus">
  .today-row
    background $grey-10
</style>
