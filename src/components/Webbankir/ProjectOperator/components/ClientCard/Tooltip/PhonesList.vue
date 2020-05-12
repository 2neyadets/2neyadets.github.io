<template lang="pug">
  q-tooltip(anchor="top left" self="bottom left")
    .tooltip-phones.brs5.q-pa-none.q-ma-none
      .tooltip-phones__row.flex(v-for="phone in phones" :key="phone.id")
        .tooltip-phones__type {{ $t('clients.phns.' + phone.type) }}
        .tooltip-phones__number {{phone.number}}
        .tooltip-phones__owner(v-html="phone.owner")
        .q-ml-sm.danger
          <!--      {{ $t('tooltips.phones.inactive') }}-->
          q-icon.q-mx-sm(v-if="phone.blocked || !phone.autodial" name="not_interested" color="negative")
</template>

<script>
export default {
  name: 'PhonesList',
  props: {
    phones: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
