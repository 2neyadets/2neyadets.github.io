<template lang="pug">
  .portfolioLimit__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.portfolioLimit')}}
    .flex.justify-around.items-center.q-ma-xs
      q-input.q-mx-xs.max-w-100px(
        dense
        outlined
        color="WB-secondary"
        type="number"
        input-class="text-center text-WB-bg-profile-color q-pa-none"
        standout="bg-WB-secondary text-WB-secondary"
        v-model.number="$managerWB.loanRedistribution.filters.portfolioLimit.limit"
        @input="verifyCheckbox($managerWB.loanRedistribution.filters.portfolioLimit.isLimited, $managerWB.loanRedistribution.filters.portfolioLimit.limit)"
      )
      q-checkbox.q-mx-xs(
        keep-color
        v-model="$managerWB.loanRedistribution.filters.portfolioLimit.isLimited"
        @input="verifyInputField($managerWB.loanRedistribution.filters.portfolioLimit.isLimited, $managerWB.loanRedistribution.filters.portfolioLimit.limit)"
        :color="$managerWB.loanRedistribution.filters.portfolioLimit.isLimited ? 'positive' : ''"
      )
</template>

<script>
import { Notify } from 'quasar'

export default {
  name: 'PortfolioLimit',
  data () {
    return {
    }
  },
  created () {
    this.$managerWB.loanRedistribution.filters.portfolioLimit.limit = this.$managerWB.user.isUserHaveRoles('operatorHard') ? 850 : 450
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    verifyInputField (checkboxVar, limitValue) {
      if (limitValue === null || limitValue === '' || limitValue <= 0) {
        this.$managerWB.loanRedistribution.filters.portfolioLimit.isLimited = false
        if (limitValue === null || limitValue === '') {
          Notify.create({
            message: this.$t('managerWBNotify.loanRedistributionFilters.fillPortfolioLimitField'),
            color: 'negative',
            position: 'bottom-left',
            icon: 'warning'
          })
        } else {
          Notify.create({
            message: this.$t('managerWBNotify.loanRedistributionFilters.wrongContentPortfolioLimitField'),
            color: 'negative',
            position: 'bottom-left',
            icon: 'warning'
          })
        }
      }
    },
    verifyCheckbox (checkboxVar, limitValue) {
      if (checkboxVar === true && (limitValue === null || limitValue === '' || limitValue <= 0)) {
        this.$managerWB.loanRedistribution.filters.portfolioLimit.isLimited = false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
