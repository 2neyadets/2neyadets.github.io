<template lang="pug">
  .schedule__todays-date
    .text-WB-schedule-green.font-size-large.text-center
      span {{$managerWB.schedule.todayDateForHeader}}
    .text-WB-schedule-green.font-size-large.text-center
      span {{$managerWB.schedule.dayOfWeek}}
</template>

<script>
export default {
  name: 'TodaysDate',
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
