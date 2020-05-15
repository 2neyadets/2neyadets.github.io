<template lang="pug">
  .schedule__footer.flex.justify-around.items-center
    q-btn.q-ma-md(
      v-if="$managerWB.schedule.schedulesData.length === 0"
      @click="$managerWB.schedule.createNewTimesheet"
      :label="$t('schedule.labels.createNewTimesheet')"
      :loading="$managerWB.schedule.loading"
      color="WB-secondary"
      icon-right="add"
    )
      template(#loading)
        q-skeleton.full-width.full-height
    template(v-if="$managerWB.schedule.schedulesData.length")
      DownloadSchedule
      q-btn.q-ma-md(
        @click="$managerWB.layout.schedule.autoFillGraphicsModal = true"
        :disable="$managerWB.schedule.schedulesForChanges.length === 0"
        :label="$t('schedule.labels.autoFillGraphics')"
        :loading="$managerWB.schedule.loading"
        :color="$managerWB.schedule.schedulesForChanges.length === 0 ? '' : 'WB-secondary'"
        icon-right="schedule"
      )
        template(#loading)
          q-skeleton.full-width.full-height
      q-btn.q-ma-md(
        @click="$managerWB.schedule.saveChangesInCurrentTimesheet({ id: $managerWB.schedule.idOfThisMonthTimesheet, schedules: $managerWB.schedule.schedulesForChanges })"
        :disable="$managerWB.schedule.schedulesForChanges.length === 0"
        :label="$t('schedule.labels.saveChangesInCurrentTimesheet')"
        :loading="$managerWB.schedule.loading"
        :color="$managerWB.schedule.schedulesForChanges.length === 0 ? '' : 'WB-secondary'"
        icon-right="save"
      )
        template(#loading)
          q-skeleton.full-width.full-height
</template>

<script>
import DownloadSchedule from './DownloadSchedule'

export default {
  name: 'ScheduleFooter',
  components: { DownloadSchedule },
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
