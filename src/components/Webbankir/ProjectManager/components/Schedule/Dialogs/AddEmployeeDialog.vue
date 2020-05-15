<template lang="pug">
  q-dialog.add-employee-dialog(v-model="$managerWB.layout.schedule.employeeModal.add")
    q-card.employee-dialog__card.row.justify-center.items-center.max-w-300px(class="bg-WB-modal-bg-color text-WB-text-profile-color")
      q-card-section.col-12.flex.justify-center.items-center
        span.font-size-normal {{$t('schedule.dialogs.chooseEmployee')}}
      q-card-section.col-12.flex.justify-center.items-center
        q-select.max-h-100px.min-w-200px.full-width.q-px-md(
          transition-show="fade"
          transition-hide="fade"
          v-model="$managerWB.schedule.employeeObj.add"
          :options="$managerWB.schedule.employeesForAddInTimesheetForSelect"
          standout="bg-WB-secondary text-WB-secondary"
          dense
          dark
          outlined
          color="WB-secondary"
          popup-content-class="bg-WB-dark text-white"
          options-dense
          multiple
          use-chips
        )
      q-card-section.col-12.flex.justify-center.items-center
        span.font-size-normal {{$t('schedule.dialogs.firstWorkDay')}}
      q-card-section.col-12.row.justify-center.items-center
        q-input.q-px-xs(
          :value="dateRus"
          color="WB-secondary"
          input-class="text-center text-WB-bg-profile-color q-pa-none"
          standout="bg-WB-secondary text-WB-secondary"
          dense
          dark
          outlined
          readonly
        )
          q-popup-proxy(
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          )
            q-date(
              v-model="$managerWB.schedule.firstWorkDayDate"
              @input="() => $refs.qDateProxy.hide()"
              :options="canChooseDates"
              color="WB-modal-bg-color"
              :dark="false"
            )
          template(#append)
            q-icon.cursor-pointer(name="event")
      q-card-actions.col-12.flex.justify-end.items-center.text-WB-primary(align="right")
        q-btn(
          color="WB-secondary"
          :label="$t('schedule.labels.cancel')"
          flat
          v-close-popup
        )
        q-btn(
          @click="addAllNewEmployees"
          :disable="!$managerWB.schedule.employeeObj.add.length"
          :color="$managerWB.schedule.employeeObj.add.length ? 'WB-secondary' : ''"
          :label="$t('schedule.labels.addEmployeeBtn')"
          v-close-popup
        )
</template>

<script>
import { changeDateFormat } from 'src/utils/helpers'

export default {
  name: 'AddEmployeeDialog',
  data () {
    return {
    }
  },
  computed: {
    dateRus () {
      return changeDateFormat(this.$managerWB.schedule.firstWorkDayDate)
    },
    canChooseDates () {
      const firstDayOfTimesheet = this.$managerWB.schedule.firstDayOfChangingMoment
      const daysInMonth = firstDayOfTimesheet.daysInMonth()
      const arr = []
      for (let i = 0; i < daysInMonth; i++) {
        arr.push(firstDayOfTimesheet.add({ days: i }).format('YYYY/MM/DD'))
        firstDayOfTimesheet.add({ days: -i })
      }
      return arr
    },
    dataForSend () {
      return this.$managerWB.schedule.employeeObj.add.map(oneEmp => {
        return {
          id: this.$managerWB.schedule.idOfThisMonthTimesheet,
          employeeId: oneEmp.value,
          type: 'TwoOverTwo',
          firstWorkday: changeDateFormat(this.$managerWB.schedule.firstWorkDayDate, 'YYYY/MM/DD', 'YYYY-MM-DD')
        }
      })
    }
  },
  methods: {
    async addAllNewEmployees () {
      for (const oneEmp of this.dataForSend) {
        await this.$managerWB.schedule.addEmployee(oneEmp)
      }
      await this.$managerWB.schedule.getOneTimesheet({ id: this.$managerWB.schedule.idOfThisMonthTimesheet })
    }
  }
}
</script>

<style lang="stylus">
</style>
