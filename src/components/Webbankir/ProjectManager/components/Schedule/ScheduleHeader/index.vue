<template lang="pug">
  .schedule__header.border-bottom
    .row.justify-between.items-center
      .col-xs-12.col-sm-6.col-lg-4.row.justify-around.items-center.q-pa-xs
        ChooseMonth
        TodaysDate
      .col-xs-12.col-sm-6.col-lg-8.flex.justify-end.items-center.q-pa-xs
        Helper
</template>

<script>
import ChooseMonth from './ChooseMonth'
import TodaysDate from './TodaysDate'
import Helper from './Helper'
export default {
  name: 'ScheduleHeader',
  components: { Helper, TodaysDate, ChooseMonth },
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
