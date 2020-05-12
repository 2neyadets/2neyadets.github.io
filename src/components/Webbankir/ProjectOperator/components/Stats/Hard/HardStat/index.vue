<template lang="pug">
  .stat.full-stat
    q-card.modal-content
      q-card-section.title.q-pa-none.row
        .col-11.flex.justify-center.items-center
          | Информация по сборам
        .col-1.flex.justify-end
          q-btn(flat label="Закрыть" @click="close")
      .row.justify-center.department-name {{ $operatorWB.user.currentGroupData && $operatorWB.user.currentGroupData.name }}
      q-card-section.main.q-pa-none
        .keys
          .tiles.hard
            .tile
              q-radio(v-model="current.type" val="daily" dark color="WB-primary")
                q-icon(name="calendar_today")
                span Дневной сбор
              HardRatingTable(
                :ratings="$operatorWB.user.currentGroupData"
                :current="current"
                :periods="periodsDay"
                type="daily"
              )
              HardRatingLeader(:ratings="$operatorWB.user.ratings && $operatorWB.user.ratings.leaders.day" type="day")

            .tile
              q-radio(v-model="current.type" val="monthly" dark color="WB-primary")
                q-icon(name="date_range")
                span Квартальный сбор
              HardRatingTable(
                :ratings="$operatorWB.user.currentGroupData"
                :current="current"
                :periods="periodsQuarterCurrent"
                type="monthly"
                period="current"
              )
              HardRatingLeader(:ratings="$operatorWB.user.ratings && $operatorWB.user.ratings.leaders.month" type="month")

            .tile
              HardRatingTable(
                :ratings="$operatorWB.user.currentGroupData"
                :current="current"
                :periods="periodsQuarterLast"
                type="quarter"
                period="closed"
              )
              HardRatingLeader(:ratings="$operatorWB.user.ratings && $operatorWB.user.ratings.leaders.quarter" type="quarter")
        .total
          HardRatingList(
            :staff="staffList"
            :current="current"
          )
          <!--          :rating="$operatorWB.user.ratings"-->

</template>

<script>
import HardRatingTable from './HardRatingTable/index'
import HardRatingLeader from './HardRatingLeader/index'
import HardRatingList from './HardRatingList/index'
import { currentPeriod, getQuarterMonth } from 'src/utils/mappers'
import { date } from 'quasar'
import sortBy from 'lodash/sortBy'

const now = new Date()

export default {
  name: 'HardStat',
  components: {
    HardRatingTable,
    HardRatingLeader,
    HardRatingList
  },
  data () {
    return {
      opened: true,
      current: {
        type: 'daily',
        period: currentPeriod(new Date(), true)
      },
      periodsDay: [currentPeriod(new Date(), true), currentPeriod(date.subtractFromDate(new Date(), { days: 1 }), true)],
      periodsQuarterCurrent: getQuarterMonth(true),
      periodsQuarterLast: getQuarterMonth(),
    }
  },
  computed: {
    currentLeader () {
      return {
        name: this.current.type,
        value: this.current.period
      }
    },
    staffList () {
      const staff = this.$operatorWB.user.ratings && this.$operatorWB.user.ratings.groups
      return staff && sortBy(staff.map(
        (item, index) => {
          const periods = item.indicators[this.current.type]
          return {
            index,
            name: item.name,
            id: item.id,
            ...periods[this.current.period]
          }
        }
      ), ['rating', 'group'])
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    setCurrent (current) {
      this.current = current
    }
  },
  watch: {
    'current.type' (v) {
      if (v === 'daily') {
        this.current.period = currentPeriod(now, true, true)
      } else {
        this.current.period = currentPeriod(now, false)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .department-name
    margin-top: 10px
    margin-bottom: 10px
    font-size: 16px
    color: #f7f7f7

  .tile
    width 100% !important

  .q-radio
    i
      font-size: 20px

    i, span
      margin-left: 5px
</style>
