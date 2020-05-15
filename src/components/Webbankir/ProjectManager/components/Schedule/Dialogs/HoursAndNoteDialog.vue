<template lang="pug">
  q-dialog.hours-and-note-dialog(v-model="$managerWB.layout.schedule.hoursAndNoteModal" persistent)
    q-card.row.justify-center.items-center.max-w-300px(class="bg-WB-modal-bg-color text-WB-text-profile-color")
      q-card-section.col-12.flex.justify-center.items-center
        span.font-size-normal {{$t('schedule.tooltips.hours')}}
      q-card-section.col-12.flex.justify-center.items-center
        q-input.q-mx-xs.max-w-100px(
          v-model.number="$managerWB.schedule.modalObj && $managerWB.schedule.modalObj.schedule && $managerWB.schedule.modalObj.schedule.length > 0 && $managerWB.schedule.modalObj.schedule[$managerWB.schedule.currentIndexOfChangingDay].hours"
          dense
          outlined
          color="WB-secondary"
          type="number"
          input-class="text-center text-WB-bg-profile-color q-pa-none"
          standout="bg-WB-secondary text-WB-secondary"
        )
      q-card-section.col-12.flex.justify-center.items-center
        span.font-size-normal {{$t('schedule.tooltips.note')}}
      q-card-section.col-12.flex.justify-center.items-center
        q-input.q-mx-xs.max-w-200px(
          v-model="$managerWB.schedule.modalObj && $managerWB.schedule.modalObj.schedule && $managerWB.schedule.modalObj.schedule.length > 0 && $managerWB.schedule.modalObj.schedule[$managerWB.schedule.currentIndexOfChangingDay].note"
          dense
          outlined
          color="WB-secondary"
          type="text"
          input-class="text-center text-WB-bg-profile-color q-pa-none"
          standout="bg-WB-secondary text-WB-secondary"
        )
      q-card-actions.col-12.flex.justify-center.items-center.text-WB-primary(align="center")
        q-btn(
          @click="addHoursAndNoteChanges"
          color="WB-secondary"
          label="OK"
          v-close-popup
        )
</template>

<script>
export default {
  name: 'HoursAndNoteDialog',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    addHoursAndNoteChanges () {
      const arrayIndex = this.$managerWB.schedule.schedulesForChanges.findIndex(item => item.employeeId === this.$managerWB.schedule.modalObj.employee.id)
      if (arrayIndex === -1) {
        this.$managerWB.schedule.schedulesForSend.push(Object.assign({}, {
          type: 'TwoOverTwo',
          employeeId: this.$managerWB.schedule.modalObj.employee.id,
          schedule: this.$managerWB.schedule.modalObj.schedule
        }))
      }
      this.$managerWB.schedule.refresh()
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
