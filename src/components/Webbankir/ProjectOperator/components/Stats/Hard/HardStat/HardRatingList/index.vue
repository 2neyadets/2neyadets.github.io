<template lang="pug">
div
  q-list.header
    q-item
      q-item-section(avatar)
        q-icon(name="far fa-chart-bar")
      q-item-section
        q-item-label {{$t('stats.labels.total')}}
  .total-rating
    .total-rating__title
      .top
        q-list.header
          q-item
            q-item-section
              q-item-label {{$t('stats.labels.rating')}}
            q-item-section(side)
              q-item-label(stamp) {{$t('stats.period.' + (current.type === 'daily' ? 'today' : month(current.period)))}}

      .bottom
        q-list
          q-item
            q-item-section
              q-item-label.flex.justify-start {{$t('stats.labels.leader')}}: {{staff && staff[0].name}}
            q-item-section(side)
              q-item-label(stamp)
                span.label {{$t('stats.labels.yourRating')}}:&nbsp;
                <!--              pre {{rating}}-->
                span.value {{rating}}
                span.switcher
                  q-btn(
                  @click="showMyRating = !showMyRating"
                  size="xs"
                  rounded
                  dense
                  flat
                  )
                    q-icon(
                    :name="showMyRating ? 'far fa-eye-slash' : 'far fa-eye'"
                    )

    .total-rating__content

      .total-rating__list
        .header
          span {{$t('stats.labels.group')}}
          span {{$t('stats.labels.value')}}
        .main
          <!--          pre {{staff}}-->
          q-scroll-area(style="width: 100%; height: 390px;")
            q-list(:class="showMyRating ? 'show' : ''")
              template(v-for="(user, index) in staff")
                q-item(:key="index" :class="user.id === $operatorWB.user.currentGroup.value ? 'me' : ''")
                  q-item-section
                    q-item-label {{`${index + 1}. ${user.name}`}}
                  q-item-section(side)
                    q-item-label(stamp)
                      span(v-if="user.value") {{money(user.value, true)}}
                      span(v-if="user.amount") {{money(user.amount, true)}}
                      span(v-else) &mdash;

</template>

<script>
import { money } from 'src/utils/helpers'

export default {
  name: 'HardRatingList',
  props: {
    staff: {
      type: Array,
      required: false
    },
    leaders: {
      type: Object,
      required: false
    },
    rating: {
      type: String,
      required: false
    },
    current: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      money,
      showMyRating: true
    }
  },
  methods: {
    month (period) {
      const arr = period.split('-')
      return parseInt(arr[1])
    }
  }
}
</script>

<style scoped lang="stylus">
  .total-rating
    border: 1px solid white
    border-radius 6px
    font-size: 12px
    /*background: #4a4a4a*/
    margin-bottom: 16px
    & > div
      padding: 8px
    &__title
      border-bottom 1px solid white
      .top
        display: flex
        justify-content: space-between
        align-items: center
        .q-list
          width: 100%
        .q-item__section--side
          color #b8e986
      .bottom
        .q-item__label
          color #f5a623
        text-align: right
        .label
          color #9b9b9b
        .value
          color #b8e986
        .switcher
          margin-left: 10px

    &__content
      .header
        display: flex
        justify-content: space-between
        padding-right: 15px
        color #9b9b9b
        padding-bottom 5px

      .main
        .q-list
          padding-right: 15px
          .q-item
            border-bottom: 1px solid #9b9b9b
            padding: 8px 0
            &:first-child
              color #f5a623
          .q-item__label
            font-weight: 400 !important
            & > div
              font-weight: 400 !important
          .q-item__section--side
            color inherit !important

  .q-icon
    /*width: 11px*/
    color white

  .show .me
    color #ffdf42

</style>
