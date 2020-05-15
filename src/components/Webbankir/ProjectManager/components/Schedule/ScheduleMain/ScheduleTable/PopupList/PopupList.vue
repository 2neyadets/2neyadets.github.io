<template lang="pug">
  q-popup-proxy.popup-list(
    transition-show="scale"
    transition-hide="scale"
    v-model="popupValue"
  )
    q-list.bg-WB-bg-color.text-WB-bg-profile-color.popup-list(dense)
      PopupItem(:properties="properties" :string="'plannedWorkday'")
      PopupItem(:properties="properties" :string="'plannedDayOff'")
      PopupItem(:properties="properties" :string="'presence'")
      PopupItem(:properties="properties" :string="'vacation'")
      PopupItem(:properties="properties" :string="'sickLeave'")
      PopupItem(:properties="properties" :string="'unpaidLeave'")
      PopupItem(:properties="properties" :string="'truancy'")
      PopupItem(:properties="properties" :string="'rescheduledShift'")
      PopupItem(:properties="properties" :string="'withoutStatus'")
      PopupItem(:properties="properties" :string="'changeHoursAndNote'")
</template>

<script>
import BtnPlannedWorkday from '../../../Buttons/BtnPlannedWorkday'
import BtnPlannedDayOff from '../../../Buttons/BtnPlannedDayOff'
import BtnVacation from '../../../Buttons/BtnVacation'
import BtnUnpaidLeave from '../../../Buttons/BtnUnpaidLeave'
import BtnSickLeave from '../../../Buttons/BtnSickLeave'
import BtnTruancy from '../../../Buttons/BtnTruancy'
import BtnRescheduledShift from '../../../Buttons/BtnRescheduledShift'
import BtnPresence from '../../../Buttons/BtnPresence'
import BtnWithoutStatus from '../../../Buttons/BtnWithoutStatus'
import PopupItem from './PopupItem/index'

export default {
  name: 'PopupList',
  components: { PopupItem, BtnWithoutStatus, BtnPresence, BtnRescheduledShift, BtnTruancy, BtnSickLeave, BtnUnpaidLeave, BtnVacation, BtnPlannedDayOff, BtnPlannedWorkday },
  data () {
    return {
      popupValue: false
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
  },
  watch: {
  }
}
</script>

<style scoped lang="stylus">
</style>
