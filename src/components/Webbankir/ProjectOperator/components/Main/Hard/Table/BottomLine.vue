<template lang="pug">

  .row.justify-around.items-center.bottom-line
    span {{$t('hard.table.bottom.count')}}:&nbsp;
      b {{ infoBlock.size }}
    span {{$t('hard.table.bottom.summLoan')}}:&nbsp;
      b {{ money(infoBlock.summLoan, true)}}
    span {{$t('hard.table.bottom.summPercent')}}:&nbsp;
      b {{ money(infoBlock.summPercent, true)}}
    span {{$t('hard.table.bottom.avrDelay')}}:&nbsp;
      b {{ infoBlock.avrDelay }} дней
    span {{$t('hard.table.bottom.avrDebt')}}:&nbsp;
      b {{ money(infoBlock.avrDebt, true) }}
    span {{$t('hard.table.bottom.avrLoan')}}:&nbsp;
      b {{ money(infoBlock.avrLoan, true) }}
</template>

<script>
import { money } from 'src/utils/helpers'

export default {
  name: 'HardTableBottomLine',
  props: {
    infoBlock: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      money
    }
  }
}
</script>

<style scoped lang="stylus">
  .bottom-line
    background-color: #e4e0e0
    border-radius: 0 0 5px 5px
    font-size: 12px
    height: 47px
    margin-top: -4px
    position: relative
    z-index: 3

  .bottom-line b
    margin-left: 4px

</style>
