<template lang="pug">
  .schedule__toolbar.row.justify-around.items-center.border-bottom
    .col-xs-12.col-sm-6
      ChooseTimesheet
    template(v-if="$managerWB.schedule.startOfCurrentMonthDashedFormat === $managerWB.schedule.currentTimesheetPeriod")
      .col-xs-12.col-sm-4
        ScheduleTodayStatus
    .col-xs-12.col-sm-2
      .row.justify-center.items-center
        q-btn.q-ma-xs(
          @click="$managerWB.layout.schedule.employeeModal.add = true"
          :label="$t('schedule.labels.addNewEmployee')"
          :loading="$managerWB.schedule.loading"
          color="WB-secondary"
          size="sm"
          icon-right="add"
        )
          template(#loading)
            q-skeleton.full-width.full-height
      .row.justify-center.items-center
        q-btn.q-ma-xs(
          @click="$managerWB.layout.schedule.employeeModal.delete = true"
          :label="$t('schedule.labels.deleteEmployee')"
          :loading="$managerWB.schedule.loading"
          color="negative"
          size="sm"
          icon-right="remove"
        )
          template(#loading)
            q-skeleton.full-width.full-height
</template>

<script>
import ChooseTimesheet from './ChooseTimesheet/index'
import ScheduleTodayStatus from './ScheduleTodayStatus/index'
export default {
  name: 'ScheduleToolbar',
  components: { ScheduleTodayStatus, ChooseTimesheet },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
</style>
