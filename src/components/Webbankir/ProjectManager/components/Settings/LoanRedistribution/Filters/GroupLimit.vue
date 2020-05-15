<template lang="pug">
  .groupLimit__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.groupLimit')}}
    .flex.justify-around.items-center.q-ma-xs
      q-input.q-mx-xs.max-w-100px(
        dense
        outlined
        color="WB-secondary"
        type="number"
        input-class="text-center text-WB-bg-profile-color q-pa-none"
        standout="bg-WB-secondary text-WB-secondary"
        v-model.number="$managerWB.loanRedistribution.filters.groupLimit.limit"
        @input="verifyCheckbox($managerWB.loanRedistribution.filters.groupLimit.isLimited, $managerWB.loanRedistribution.filters.groupLimit.limit)"
      )
      q-checkbox.q-mx-xs(
        keep-color
        v-model="$managerWB.loanRedistribution.filters.groupLimit.isLimited"
        @input="verifyInputField($managerWB.loanRedistribution.filters.groupLimit.isLimited, $managerWB.loanRedistribution.filters.groupLimit.limit)"
        :color="$managerWB.loanRedistribution.filters.groupLimit.isLimited ? 'positive' : ''"
      )
</template>

<script>
import { Notify } from 'quasar'

export default {
  name: 'GroupLimit',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    verifyInputField (checkboxVar, limitValue) {
      if (limitValue === null || limitValue === '' || limitValue <= 0) {
        this.$managerWB.loanRedistribution.filters.groupLimit.isLimited = false
        if (limitValue === null || limitValue === '') {
          Notify.create({
            message: this.$t('managerWBNotify.loanRedistributionFilters.fillGroupLimitField'),
            color: 'negative',
            position: 'bottom-left',
            icon: 'warning'
          })
        } else {
          Notify.create({
            message: this.$t('managerWBNotify.loanRedistributionFilters.wrongContentGroupLimitField'),
            color: 'negative',
            position: 'bottom-left',
            icon: 'warning'
          })
        }
      }
    },
    verifyCheckbox (checkboxVar, limitValue) {
      if (checkboxVar === true && (limitValue === null || limitValue === '' || limitValue <= 0)) {
        this.$managerWB.loanRedistribution.filters.groupLimit.isLimited = false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
