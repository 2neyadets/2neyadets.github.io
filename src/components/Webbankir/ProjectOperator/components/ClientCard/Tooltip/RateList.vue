<template lang="pug">
  q-tooltip(:anchor="$operatorWB.layout.isApplicationCard ? 'top left' : 'top middle'" :self="$operatorWB.layout.isApplicationCard ? 'bottom right' : 'bottom middle'")
    .tooltip-rates.brs5
      .tooltip-rates__row.flex
        .tooltip-rates__type {{ $t('clients.rate.base') }}
        .tooltip-rates__amount {{rate && rate.base}}%
      .tooltip-rates__row.flex
        .tooltip-rates__type {{ $t('clients.rate.current') }}
        .tooltip-rates__amount {{rate && rate.current}}%
      .flex
        .tooltip-rates__type {{ $t('clients.rate.annual') }}
        .tooltip-rates__amount {{rate && rate.annual}}%
</template>

<script>
export default {
  name: 'RateList',
  props: {
    rate: {
      type: Object
    }
  },
}
</script>

<style scoped lang="stylus">

</style>
