<template lang="pug">
  .button-for-schedule.flex.justify-center.items-center(@mouseover="exist = true")
    template(v-if="isStatusEqualsString(properties.__index, properties.index, 'plannedWorkday')")
      BtnPlannedWorkday
      q-tooltip(v-if="exist" anchor="top middle" self="bottom middle" :offset="[0, 0]")
        .font-size-sm.text-center(v-if="$managerWB.schedule.schedulesData[properties.__index].schedule[properties.index].hours")
          span {{$t('schedule.tooltips.hours')}}: {{$managerWB.schedule.schedulesData[properties.__index].schedule[properties.index].hours}}
        .font-size-sm.text-center(v-if="$managerWB.schedule.schedulesData[properties.__index].schedule[properties.index].note")
          span {{$t('schedule.tooltips.note')}}: {{$managerWB.schedule.schedulesData[properties.__index].schedule[properties.index].note}}
    template(v-else-if="isStatusEqualsString(properties.__index, properties.index, 'plannedDayOff')")
      BtnPlannedDayOff
    template(v-else-if="isStatusEqualsString(properties.__index, properties.index, 'vacation')")
      BtnVacation
    template(v-else-if="isStatusEqualsString(properties.__index, properties.index, 'unpaidLeave')")
      BtnUnpaidLeave
    template(v-else-if="isStatusEqualsString(properties.__index, properties.index, 'sickLeave')")
      BtnSickLeave
    template(v-else-if="isStatusEqualsString(properties.__index, properties.index, 'truancy')")
      BtnTruancy
    template(v-else-if="isStatusEqualsString(properties.__index, properties.index, 'rescheduledShift')")
      BtnRescheduledShift
    template(v-else-if="isStatusEqualsString(properties.__index, properties.index, 'presence')")
      BtnPresence
      q-tooltip(anchor="top middle" self="bottom middle" :offset="[0, 0]")
        .font-size-sm.text-center(v-if="$managerWB.schedule.schedulesData[properties.__index].schedule[properties.index].hours")
          span {{$t('schedule.tooltips.hours')}}: {{$managerWB.schedule.schedulesData[properties.__index].schedule[properties.index].hours}}
        .font-size-sm.text-center(v-if="$managerWB.schedule.schedulesData[properties.__index].schedule[properties.index].note")
          span {{$t('schedule.tooltips.note')}}: {{$managerWB.schedule.schedulesData[properties.__index].schedule[properties.index].note}}
    template(v-else)
      BtnWithoutStatus
    template
      PopupList(v-if="exist" :properties="properties")
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
import PopupList from './PopupList/PopupList'

export default {
  name: 'ButtonForSchedule',
  components: { PopupList, BtnWithoutStatus, BtnPresence, BtnRescheduledShift, BtnTruancy, BtnSickLeave, BtnUnpaidLeave, BtnVacation, BtnPlannedDayOff, BtnPlannedWorkday },
  data () {
    return {
      exist: false
    }
  },
  props: {
    properties: {
      type: Object,
      required: true
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    isStatusEqualsString (__index, index, string) {
      if (__index < this.$managerWB.schedule.schedulesData.length) {
        // eslint-disable-next-line no-prototype-builtins
        if (this.$managerWB.schedule.schedulesData[__index].hasOwnProperty('schedule') && (index < this.$managerWB.schedule.schedulesData[__index].schedule.length)) {
          // eslint-disable-next-line no-prototype-builtins
          return this.$managerWB.schedule.schedulesData[__index].schedule[index].hasOwnProperty('status') && this.$managerWB.schedule.schedulesData[__index].schedule[index].status === string
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
