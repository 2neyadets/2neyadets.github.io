<template lang="pug">
  q-tooltip(
    anchor="top left"
    self="bottom right"
    :offset="[10, 0]"
  )
    .tooltip-rates.brs5
      .row.flex.justify-between.q-py-sm
        .text-profile ОД
        strong.q-ml-lg {{money(amount.principal, true)}}
      .row.flex.justify-between.q-py-sm
        .text-profile %
        strong.q-ml-lg {{money(amount.interests, true)}}
      .row.flex.justify-between.q-py-sm
        .text-profile Штрафы
        strong.q-ml-lg {{money(amount.fines, true)}}
      .row.flex.justify-between.q-py-sm
        strong.text-white.text-bold Оплачено
        strong.text-white.q-ml-lg {{money(amount.paid, true)}}
</template>

<script>
import { money } from 'src/utils/helpers'

export default {
  name: 'AmountDetails',
  props: {
    amount: Object,
    default: {}
  },
  data () {
    return {
      money
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
