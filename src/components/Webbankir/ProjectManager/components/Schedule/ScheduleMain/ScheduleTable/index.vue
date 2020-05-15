<template lang="pug">
  .schedule__table
    q-table(
      :data="$managerWB.schedule.tableData"
      :columns="columns"
      :loading="$managerWB.schedule.loading"
      :pagination.sync="pagination"
      separator="cell"
      row-key="name"
      dense
      dark
      color="WB-secondary"
    )
      template(#header="props")
        q-tr
          template(v-for="(col, index) in props.cols" :props="props")
            q-th.text-center.q-px-md(:class="classOfTh(col)" :key="col.name" :props="props")
              template(v-if="col.name.includes('day')")
                .font-size-sm.line-height-100(:class="col.label[1] === 'сб' || col.label[1] === 'вс' ? 'text-red' : ''")
                  .q-px-xs {{col.label[0]}}
                  .q-px-xs {{col.label[1]}}
              template(v-else)
                span {{col.label}}
      template(#body="props")
        q-tr
          template(v-for="(col, index) in props.cols" :props="props")
            q-td(:class="classOfTd(col.value)" :key="col.name" :props="props")
              template(v-if="col.hasOwnProperty('value')")
                template(v-if="col.name.includes('day')")
                  .flex.justify-center.items-center()
                    ButtonForSchedule(
                      :properties="{ __index: props.row.__index, index: index-2, col: col }"
                    )
                template(v-else-if="col.name === 'totalShifts'")
                  span {{$managerWB.schedule.totalShifts(col.value)}}
                template(v-else-if="col.name === 'totalHours'")
                  span {{$managerWB.schedule.totalHours(col.value)}}
                template(v-else)
                  span {{col.value}}
</template>

<script>
import { columnsDefault } from './columns'
import ButtonForSchedule from './ButtonForSchedule'

export default {
  name: 'ScheduleTable',
  components: { ButtonForSchedule },
  data () {
    return {
      columnsForTable: [],
      columnsDefault,
      pagination: {
        sortBy: 'employee',
        descending: false,
        page: 1,
        rowsPerPage: 10
      },
    }
  },
  created () {
  },
  computed: {
    columns () {
      return this.$managerWB.schedule.columns
    },
  },
  methods: {
    classOfTd (value) {
      if (typeof value === 'object' && value !== null) {
        // eslint-disable-next-line no-prototype-builtins
        if (value.hasOwnProperty('date')) {
          if (value.date === this.$managerWB.schedule.todayDateDashedFormat) {
            return 'today-column'
          }
        }
      }
      return ''
    },
    classOfTh (col) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.$managerWB.schedule.currentTimesheetObj.hasOwnProperty('period') || this.$managerWB.schedule.currentTimesheetObj.hasOwnProperty('timesheet')) {
        if (this.$managerWB.schedule.firstDayOfChangingMonthString === this.$managerWB.schedule.startOfCurrentMonthDashedFormat) {
          if (typeof col.label !== 'string' && typeof col.label !== 'number' && col.label !== null) {
            if (col.label[0] === Number(this.$managerWB.schedule.todayDateDashedFormat[8] + this.$managerWB.schedule.todayDateDashedFormat[9])) {
              return 'today-header-column'
            }
          }
        }
      }
      return ''
    }
  }
}
</script>

<style scoped lang="stylus">
  .schedule__table td
    padding 4px 4px
  .today-column
    background black
  .today-header-column
    background black
  .line-height-100
    line-height 100%
  .text-red
    color $WB-weekend
</style>
