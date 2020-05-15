<template lang="pug">
  .schedule__choose-month
    .row.justify-between.items-center
      q-btn.q-ma-none(
        @click="subtractMonth"
        icon="chevron_left"
        dense
        flat
        round
      )
      .flex.justify-center.items-center.text-center
        .q-mx-md.font-size-large.max-w-200px.cursor-pointer
          span {{$managerWB.schedule.monthAndYear}}
          q-popup-proxy(
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          )
            q-date(
              :value="$managerWB.schedule.changingMoment.format('YYYY/MM/DD')"
              @input="(v) => editedByDatePicker(v)"
              color="WB-modal-bg-color"
              :dark="false"
            )
      q-btn.q-ma-none(
        @click="addMonth"
        icon="chevron_right"
        dense
        flat
        round
      )
</template>

<script>
import moment from 'moment/moment'

export default {
  name: 'ChooseMonth',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    addMonth () {
      this.$managerWB.schedule.monthsForChange++
      this.$managerWB.schedule.changeMonth(true)
    },
    subtractMonth () {
      this.$managerWB.schedule.monthsForChange--
      this.$managerWB.schedule.changeMonth(false)
    },
    editedByDatePicker (v) {
      this.$refs.qDateProxy.hide()
      this.$managerWB.schedule.changingMoment = moment(v, 'YYYY/MM/DD').startOf('month')
    }
  }
}
</script>

<style scoped lang="stylus">
  .width-200
    width 200px
</style>
