<template lang="pug">
  .status__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.status')}}
    .flex.justify-around.items-center.q-ma-xs
      q-checkbox.q-mx-xs(
        v-model="$managerWB.loanRedistribution.filters.status.hard"
        @input="uncheckStatus(true)"
        :label="$t('loanRedistribution.filters.labels.hard')"
        color="WB-primary"
        keep-color
      )
      q-checkbox.q-mx-xs(
        v-model="$managerWB.loanRedistribution.filters.status.hardWithAgreement"
        @input="uncheckStatus(false)"
        :label="$t('loanRedistribution.filters.labels.hardWithAgreement')"
        color="WB-primary"
        keep-color
      )
</template>

<script>
export default {
  name: 'StatusBlock',
  data () {
    return {
    }
  },
  created () {
    this.$managerWB.loanRedistribution.filters.status.hard = this.$managerWB.user.isUserHaveRoles('operatorHard')
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    uncheckStatus (source) {
      if (source) {
        this.$managerWB.loanRedistribution.filters.status.hardWithAgreement = false
      } else {
        this.$managerWB.loanRedistribution.filters.status.hard = false
      }
    },
  }
}
</script>

<style scoped lang="stylus">
</style>
