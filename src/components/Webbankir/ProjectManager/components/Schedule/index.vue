<template lang="pug">
  .schedule__block
    ScheduleToolbar
    ScheduleHeader
    ScheduleMain
    ScheduleFooter

    HoursAndNoteDialog
    AutoFillDialog
    DeleteEmployeeDialog
    AddEmployeeDialog
</template>

<script>
import ScheduleHeader from './ScheduleHeader/index'
import ScheduleMain from './ScheduleMain/index'
import HoursAndNoteDialog from './Dialogs/HoursAndNoteDialog'
import AutoFillDialog from './Dialogs/AutoFillDialog'
import DeleteEmployeeDialog from './Dialogs/DelteEmployeeDialog'
import AddEmployeeDialog from './Dialogs/AddEmployeeDialog'
import ScheduleToolbar from './ScheduleToolbar/index'
import ScheduleFooter from './ScheduleFooter/index'

export default {
  name: 'Schedule',
  components: { ScheduleToolbar, ScheduleHeader, ScheduleMain, ScheduleFooter, HoursAndNoteDialog, AddEmployeeDialog, DeleteEmployeeDialog, AutoFillDialog },
  data () {
    return {
    }
  },
  async created () {
    if (this.$managerWB.schedule.allTimesheets.length <= 0) await this.$managerWB.schedule.getAllTimesheets()
    if (this.$managerWB.schedule.schedulesData.length <= 0) await this.$managerWB.schedule.findMyTimesheet(this.$managerWB.schedule.firstDayOfChangingMonthString)
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
</style>
