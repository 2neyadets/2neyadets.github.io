<template lang="pug">

  .key-rating-table
    .key-rating-table__left
      .table
        .thead
          .tr
            .th &nbsp;
            .th {{$t('stats.labels.sum')}}
            .th {{$t('stats.labels.rating')}}
        .tbody
          template(v-for="(period, index) in periods")
            .tr(:class="current.period === period ? 'current' : ''" :key="index")
              .td
                .span {{label(period)}}
              .td
                .span {{amount(period)}}
              .td
                .span {{rating(period)}}
    .key-rating-table__right(:class="type")
      span {{period && $t('stats.period.' + period)}}
</template>

<script>
import { currentPeriod } from 'src/utils/mappers'
import { money } from 'src/utils/helpers'
import { date } from 'quasar'

const now = new Date()

export default {
  name: 'HardRatingTable',
  props: {
    type: {
      type: String,
      required: true
    },
    current: {
      type: Object,
      required: true
    },
    period: {
      type: String,
      required: false
    },
    periods: {
      type: Array,
      required: true
    },
    ratings: {
      type: Object,
      required: false
    }
  },
  computed: {
    isActive () {
      return this.type === this.current.type
    }
  },
  methods: {
    label (period) {
      if (this.type === 'daily') {
        return this.$t('stats.period.' + (period === currentPeriod(now, true) ? 'today' : 'yesterday'))
      } else {
        return date.formatDate(Date.parse(period), 'MMMM')
      }
    },
    amount (period) {
      let value = '–'
      const type = this.type === 'quarter' ? 'monthly' : this.type
      if (this.ratings && this.ratings.indicators) {
        const group = this.$operatorWB.user.currentGroupData
        const periods = group.indicators[type]
        // eslint-disable-next-line no-prototype-builtins
        if (periods && periods.hasOwnProperty(period)) {
          value = money(periods[period].amount, true)
        }
      }
      return value
    },
    rating (period) {
      let value = '–'
      if (this.ratings && this.ratings.indicators) {
        const group = this.$operatorWB.user.currentGroupData
        const periods = group.indicators[this.type]
        // eslint-disable-next-line no-prototype-builtins
        if (periods && periods.hasOwnProperty(period)) {
          value = periods[period].rating
        }
      }
      return value
    },
    month (period) {
      const arr = period.split('-')
      return parseInt(arr[1])
    },
  }
}
</script>

<style scoped lang="stylus">

  .key-rating-table
    display: flex
    justify-content: flex-end
    align-items: center

    &__right
      width 15%
      text-align: center
      padding-top: 25px
      padding-left: 8px
      font-size: 12px

    &__right.monthly
      color: #b8e986

    &__right.quarter
      color: #fe3e55

    &__left
      width 85%
      padding-left: 20px

    .table
      border-collapse: collapse
      width: 100%
      display table

      .tr
        display table-row
        width: 100%

      .td, .th
        display: table-cell
        margin: 0
        text-align: center
        font-size: 12px
        border none
        width: auto

        & > div
          padding 5px 0

        &:first-child
          text-align left

      .current
        color #b8e986 !important

      .thead
        display: table-header-group

        .th
          font-weight: normal
          color $WB-disabled-color
          padding: 5px 0

          &:nth-child(2)
            width: 60%
            text-align: left
            padding-left: 10px

      .tbody
        display: table-row-group

        .td
          width: auto

        .td:not(:first-child)
          width: 20%

          & > div
            padding: 8px 0
            height: 100%
            width: 100%
            border 1px solid white

        .td:nth-child(2)
          width: 60%
          text-align: left

          & > div
            padding-left: 10px

        .tr
          .td:nth-child(2) > div
            border-right none

          &:not(:last-child) .td > div
            border-bottom none

          &:first-child
            & .td:nth-child(2) > div
              border-radius 6px 0 0 0

            & .td:last-child > div
              border-radius 0 6px 0 0

          &:last-child
            & .td:nth-child(2) > div
              border-radius 0 0 0 6px

            & .td:last-child > div
              border-radius 0 0 6px 0

</style>
