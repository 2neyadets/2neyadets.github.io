<template lang="pug">

  .rating-leader.row.justify-between
    .rating-leader__value
      | {{$t('stats.leader.' + type)}}:&nbsp;
      span {{ratings && ratings.group}}
    .rating-leader__value
      | {{$t('stats.leader.sum')}}:&nbsp;
      span {{ratings && money(ratings.amount, true)}}

</template>

<script>
import { money } from 'src/utils/helpers'

export default {
  name: 'HardRatingLeader',
  data () {
    return {
      money
    }
  },
  props: {
    ratings: {
      type: Object,
      required: false
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="stylus">
  .rating-leader
    margin-top: 16px
    color #b2b2b2
    font-size: 12px
    &__value
      line-height: 1.5
      span
        .tile &
          color: #f28b03
    .hard &
      width: 80%
</style>
