<template lang="pug">
  .popup-item.font-size-medium
    template(v-if="string !== 'changeHoursAndNote'")
      q-item(
        @click="whatDoOnClick(properties.__index, properties.index, string)"
        :active="isActiveItem(properties.__index, properties.index, string)"
        clickable
        active-class="text-WB-text-active-color bg-WB-bg-active-color"
        v-ripple
        dense
        v-close-popup
      )
        q-item-section(avatar)
          template(v-if="string === 'plannedWorkday'")
            BtnPlannedWorkday
          template(v-else-if="string === 'plannedDayOff'")
            BtnPlannedDayOff
          template(v-else-if="string === 'vacation'")
            BtnVacation
          template(v-else-if="string === 'unpaidLeave'")
            BtnUnpaidLeave
          template(v-else-if="string === 'sickLeave'")
            BtnSickLeave
          template(v-else-if="string === 'truancy'")
            BtnTruancy
          template(v-else-if="string === 'rescheduledShift'")
            BtnRescheduledShift
          template(v-else-if="string === 'presence'")
            BtnPresence
          template(v-else-if="string === 'withoutStatus'")
            BtnWithoutStatus
          template(v-else-if="string === 'changeHoursAndNote'")
            q-icon(name="edit")
        q-item-section
          q-item-label {{$t('schedule.tips.' + string)}}
    template(v-else)
      q-item(
        @click="whatDoOnClick(properties.__index, properties.index, string)"
        :disable="properties.col.value.status !== 'plannedWorkday' && properties.col.value.status !== 'presence'"
        :clickable="properties.col.value.status === 'plannedWorkday' || properties.col.value.status === 'presence'"
        v-ripple
        dense
        v-close-popup
      )
        q-item-section(avatar)
          q-icon(name="edit")
        q-item-section
          q-item-label {{$t('schedule.tips.' + string)}}
</template>

<script>
import BtnPlannedWorkday from '../../../../Buttons/BtnPlannedWorkday'
import BtnPlannedDayOff from '../../../../Buttons/BtnPlannedDayOff'
import BtnVacation from '../../../../Buttons/BtnVacation'
import BtnUnpaidLeave from '../../../../Buttons/BtnUnpaidLeave'
import BtnSickLeave from '../../../../Buttons/BtnSickLeave'
import BtnTruancy from '../../../../Buttons/BtnTruancy'
import BtnRescheduledShift from '../../../../Buttons/BtnRescheduledShift'
import BtnPresence from '../../../../Buttons/BtnPresence'
import BtnWithoutStatus from '../../../../Buttons/BtnWithoutStatus'

export default {
  name: 'PopupItem',
  components: { BtnWithoutStatus, BtnPresence, BtnRescheduledShift, BtnTruancy, BtnSickLeave, BtnUnpaidLeave, BtnVacation, BtnPlannedDayOff, BtnPlannedWorkday },
  data () {
    return {
    }
  },
  props: {
    properties: {
      type: Object,
      required: true
    },
    string: {
      type: String,
      required: true
    },
  },
  created () {
  },
  computed: {
  },
  methods: {
    whatDoOnClick (__index, index, type) {
      if (type === 'changeHoursAndNote') {
        // eslint-disable-next-line no-prototype-builtins
        if (!this.$managerWB.schedule.schedulesData[__index].schedule[index].hasOwnProperty('hours')) {
          Object.assign(this.$managerWB.schedule.schedulesData[__index].schedule[index], { hours: 11 })
        }
        // eslint-disable-next-line no-prototype-builtins
        if (!this.$managerWB.schedule.schedulesData[__index].schedule[index].hasOwnProperty('note')) {
          Object.assign(this.$managerWB.schedule.schedulesData[__index].schedule[index], { note: '' })
        }
        this.$managerWB.schedule.currentIndexOfChangingDay = index
        this.$managerWB.schedule.modalObj = this.$managerWB.schedule.schedulesData[__index]
        this.$managerWB.layout.schedule.hoursAndNoteModal = true
      } else {
        this.changeTypeOfDay(__index, index, type)
      }
    },
    changeTypeOfDay (__index, index, type) {
      const arrayIndex = this.$managerWB.schedule.schedulesForChanges.findIndex(item => item.employeeId === this.$managerWB.schedule.schedulesData[__index].employee.id)
      switch (type) {
        case 'plannedWorkday':
          this.editObjInSchedulesData(__index, index, 'plannedWorkday', 11, '')
          break
        case 'plannedDayOff':
          this.editObjInSchedulesData(__index, index, 'plannedDayOff')
          break
        case 'vacation':
          this.editObjInSchedulesData(__index, index, 'vacation')
          break
        case 'unpaidLeave':
          this.editObjInSchedulesData(__index, index, 'unpaidLeave')
          break
        case 'sickLeave':
          this.editObjInSchedulesData(__index, index, 'sickLeave')
          break
        case 'truancy':
          this.editObjInSchedulesData(__index, index, 'truancy')
          break
        case 'rescheduledShift':
          this.editObjInSchedulesData(__index, index, 'rescheduledShift')
          break
        case 'presence':
          this.editObjInSchedulesData(__index, index, 'presence', 11, '')
          break
        case 'withoutStatus':
          this.editObjInSchedulesData(__index, index, null)
          break
        default:
          this.editObjInSchedulesData(__index, index, null)
      }
      this.$managerWB.schedule.refresh()
      if (arrayIndex === -1) {
        this.addObjToSchedulesForTemplate(
          this.$managerWB.schedule.schedulesData[__index].employee.id,
          this.$managerWB.schedule.schedulesData[__index].schedule
        )
      }
    },
    editObjInSchedulesData (__index, index, status = null, hours = null, note = null) {
      Object.assign(this.$managerWB.schedule.schedulesData[__index].schedule[index], {
        status: status,
        hours: hours,
        note: note
      })
    },
    addObjToSchedulesForTemplate (employeeId, schedule) {
      this.$managerWB.schedule.schedulesForSend.push(Object.assign({}, {
        type: 'TwoOverTwo',
        employeeId: employeeId,
        schedule: schedule
      }))
    },
    isActiveItem (__index, index, string) {
      if (__index < this.$managerWB.schedule.schedulesData.length) {
        // eslint-disable-next-line no-prototype-builtins
        if (this.$managerWB.schedule.schedulesData[__index].hasOwnProperty('schedule') && (index < this.$managerWB.schedule.schedulesData[__index].schedule.length)) {
          if (string === 'withoutStatus') {
            // eslint-disable-next-line no-prototype-builtins
            return !this.$managerWB.schedule.schedulesData[__index].schedule[index].hasOwnProperty('status') || this.$managerWB.schedule.schedulesData[__index].schedule[index].status === null
          } else {
            // eslint-disable-next-line no-prototype-builtins
            return this.$managerWB.schedule.schedulesData[__index].schedule[index].hasOwnProperty('status') && this.$managerWB.schedule.schedulesData[__index].schedule[index].status === string
          }
        } else {
          return false
        }
      } else {
        return false
      }
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="stylus">
</style>
