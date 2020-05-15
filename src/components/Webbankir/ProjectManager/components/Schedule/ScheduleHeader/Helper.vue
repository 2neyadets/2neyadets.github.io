<template lang="pug">
  .schedule__helper.font-size-medium
    .row.justify-end.items-center
      .flex.justify-center.items-center
        .q-mx-sm.q-my-xs.row
          BtnPlannedWorkday.q-mr-xs(:cursorInherit="true")
          span - {{$t('schedule.tips.plannedWorkday')}}
        .q-mx-sm.q-my-xs.row
          BtnPlannedDayOff.q-mr-xs(:cursorInherit="true")
          span - {{$t('schedule.tips.plannedDayOff')}}
        .q-mx-sm.q-my-xs.row
          BtnPresence.q-mr-xs(:cursorInherit="true")
          span - {{$t('schedule.tips.presence')}}
        .q-mx-sm.q-my-xs.row
          BtnVacation.q-mr-xs(:cursorInherit="true")
          span - {{$t('schedule.tips.vacation')}}
        .q-mx-sm.q-my-xs.row
          BtnSickLeave.q-mr-xs(:cursorInherit="true")
          span - {{$t('schedule.tips.sickLeave')}}
      .flex.justify-center.items-center
        .q-mx-sm.q-my-xs.row
          BtnUnpaidLeave.q-mr-xs(:cursorInherit="true")
          span - {{$t('schedule.tips.unpaidLeave')}}
        .q-mx-sm.q-my-xs.row
          BtnTruancy.q-mr-xs(:cursorInherit="true")
          span - {{$t('schedule.tips.truancy')}}
        .q-mx-sm.q-my-xs.row
          BtnRescheduledShift.q-mr-xs(:cursorInherit="true")
          span - {{$t('schedule.tips.rescheduledShift')}}
        .q-mx-sm.q-my-xs.row
          BtnWithoutStatus.q-mr-xs(:cursorInherit="true")
          span - {{$t('schedule.tips.withoutStatus')}}
</template>

<script>
import BtnPlannedWorkday from '../Buttons/BtnPlannedWorkday'
import BtnPlannedDayOff from '../Buttons/BtnPlannedDayOff'
import BtnVacation from '../Buttons/BtnVacation'
import BtnUnpaidLeave from '../Buttons/BtnUnpaidLeave'
import BtnSickLeave from '../Buttons/BtnSickLeave'
import BtnTruancy from '../Buttons/BtnTruancy'
import BtnRescheduledShift from '../Buttons/BtnRescheduledShift'
import BtnPresence from '../Buttons/BtnPresence'
import BtnWithoutStatus from '../Buttons/BtnWithoutStatus'

export default {
  name: 'Helper',
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
