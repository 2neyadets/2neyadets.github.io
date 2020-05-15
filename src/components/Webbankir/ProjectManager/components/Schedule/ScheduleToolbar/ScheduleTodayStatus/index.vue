<template lang="pug">
  .schedule__today-status.font-size-medium
    .flex.justify-center.items-center
      .flex.justify-center.items-center.status-border.q-my-xs
        template(v-if="$managerWB.schedule.summaryStatusesForToday.plannedWorkday !== 0")
          .cell
            .flex.justify-center.items-center.q-py-xs.q-px-sm.border-bottom
              BtnPlannedWorkday(:cursorInherit="true")
            .flex.justify-center.items-center.q-py-xs.q-px-sm
              span {{$managerWB.schedule.summaryStatusesForToday.plannedWorkday}}
        template(v-if="$managerWB.schedule.summaryStatusesForToday.plannedDayOff !== 0")
          .cell.border-left
            .flex.justify-center.items-center.q-py-xs.q-px-sm.border-bottom
              BtnPlannedDayOff(:cursorInherit="true")
            .flex.justify-center.items-center.q-py-xs.q-px-sm
              span {{$managerWB.schedule.summaryStatusesForToday.plannedDayOff}}
        template(v-if="$managerWB.schedule.summaryStatusesForToday.vacation !== 0")
          .cell.border-left
            .flex.justify-center.items-center.q-py-xs.q-px-sm.border-bottom
              BtnVacation(:cursorInherit="true")
            .flex.justify-center.items-center.q-py-xs.q-px-sm
              span {{$managerWB.schedule.summaryStatusesForToday.vacation}}
        template(v-if="$managerWB.schedule.summaryStatusesForToday.unpaidLeave !== 0")
          .cell.border-left
            .flex.justify-center.items-center.q-py-xs.q-px-sm.border-bottom
              BtnUnpaidLeave(:cursorInherit="true")
            .flex.justify-center.items-center.q-py-xs.q-px-sm
              span {{$managerWB.schedule.summaryStatusesForToday.unpaidLeave}}
        template(v-if="$managerWB.schedule.summaryStatusesForToday.sickLeave !== 0")
          .cell.border-left
            .flex.justify-center.items-center.q-py-xs.q-px-sm.border-bottom
              BtnSickLeave(:cursorInherit="true")
            .flex.justify-center.items-center.q-py-xs.q-px-sm
              span {{$managerWB.schedule.summaryStatusesForToday.sickLeave}}
        template(v-if="$managerWB.schedule.summaryStatusesForToday.truancy !== 0")
          .cell.border-left
            .flex.justify-center.items-center.q-py-xs.q-px-sm.border-bottom
              BtnTruancy(:cursorInherit="true")
            .flex.justify-center.items-center.q-py-xs.q-px-sm
              span {{$managerWB.schedule.summaryStatusesForToday.truancy}}
        template(v-if="$managerWB.schedule.summaryStatusesForToday.rescheduledShift !== 0")
          .cell.border-left
            .flex.justify-center.items-center.q-py-xs.q-px-sm.border-bottom
              BtnRescheduledShift(:cursorInherit="true")
            .flex.justify-center.items-center.q-py-xs.q-px-sm
              span {{$managerWB.schedule.summaryStatusesForToday.rescheduledShift}}
        template(v-if="$managerWB.schedule.summaryStatusesForToday.presence !== 0")
          .cell.border-left
            .flex.justify-center.items-center.q-py-xs.q-px-sm.border-bottom
              BtnPresence(:cursorInherit="true")
            .flex.justify-center.items-center.q-py-xs.q-px-sm
              span {{$managerWB.schedule.summaryStatusesForToday.presence}}
        template(v-if="$managerWB.schedule.summaryStatusesForToday.withoutStatus !== 0")
          .cell.border-left
            .flex.justify-center.items-center.q-py-xs.q-px-sm.border-bottom
              BtnWithoutStatus(:cursorInherit="true")
            .flex.justify-center.items-center.q-py-xs.q-px-sm
              span {{$managerWB.schedule.summaryStatusesForToday.withoutStatus}}
        template(v-if="$managerWB.schedule.summaryStatusesForToday.default !== 0")
          span Что-то пошло не так
</template>

<script>
import BtnPlannedWorkday from '../../Buttons/BtnPlannedWorkday'
import BtnPlannedDayOff from '../../Buttons/BtnPlannedDayOff'
import BtnVacation from '../../Buttons/BtnVacation'
import BtnUnpaidLeave from '../../Buttons/BtnUnpaidLeave'
import BtnSickLeave from '../../Buttons/BtnSickLeave'
import BtnTruancy from '../../Buttons/BtnTruancy'
import BtnRescheduledShift from '../../Buttons/BtnRescheduledShift'
import BtnPresence from '../../Buttons/BtnPresence'
import BtnWithoutStatus from '../../Buttons/BtnWithoutStatus'

export default {
  name: 'ScheduleTodayStatus',
  components: { BtnWithoutStatus, BtnPresence, BtnRescheduledShift, BtnTruancy, BtnSickLeave, BtnUnpaidLeave, BtnVacation, BtnPlannedDayOff, BtnPlannedWorkday },
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
</style>
