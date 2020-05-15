<template lang="pug">
  q-dialog.delete-employee-dialog(v-model="$managerWB.layout.schedule.employeeModal.delete")
    q-card.employee-dialog__card.row.justify-center.items-center.max-w-300px(class="bg-WB-modal-bg-color text-WB-text-profile-color")
      q-card-section.col-12.flex.justify-center.items-center
        span.font-size-normal {{$t('schedule.dialogs.chooseEmployee')}}
      q-card-section.col-12.flex.justify-center.items-center
        q-select.max-h-100px.min-w-200px.full-width.q-px-md(
          transition-show="fade"
          transition-hide="fade"
          v-model="$managerWB.schedule.employeeObj.delete"
          :options="$managerWB.schedule.employeesInCurrentTimesheetForSelect"
          standout="bg-WB-secondary text-WB-secondary"
          dense
          dark
          outlined
          color="WB-secondary"
          popup-content-class="bg-WB-dark text-white"
          options-dense
        )
      q-card-actions.col-12.flex.justify-end.items-center.text-WB-primary(align="right")
        q-btn(
          color="WB-secondary"
          :label="$t('schedule.labels.cancel')"
          flat
          v-close-popup
        )
        q-btn(
          @click="$managerWB.schedule.deleteEmployee({ id: $managerWB.schedule.idOfThisMonthTimesheet, employeeId: $managerWB.schedule.employeeObj.delete.value })"
          :disable="!$managerWB.schedule.employeeObj.delete || !$managerWB.schedule.employeeObj.delete.value"
          :color="$managerWB.schedule.employeeObj.delete && $managerWB.schedule.employeeObj.delete.value ? 'WB-secondary' : ''"
          :label="$t('schedule.labels.deleteEmployeeBtn')"
          v-close-popup
        )
</template>

<script>
export default {
  name: 'DeleteEmployeeDialog',
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
