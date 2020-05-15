<template lang="pug">
  .delay__block.filter__block.full-width.q-mx-xs
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.delay')}}
    .row.justify-around.items-center
      q-input.col-2.q-mx-xs.max-w-75px(
        v-model.number="$managerWB.loanRedistribution.filters.delay.min"
        type="number"
        @change="validateRange($managerWB.loanRedistribution.filters.delay)"
        input-class="text-center text-WB-bg-profile-color q-pa-none"
        standout="bg-WB-secondary text-WB-secondary"
        dense
        outlined
        color="WB-secondary"
      )
      q-range.w-50.q-pa-none(
        v-model="$managerWB.loanRedistribution.filters.delay"
        :min="min"
        :max="max"
        color="positive"
      )
      q-input.col-2.q-mx-xs.max-w-75px(
        v-model.number="$managerWB.loanRedistribution.filters.delay.max"
        type="number"
        @change="validateRange($managerWB.loanRedistribution.filters.delay)"
        input-class="text-center text-WB-bg-profile-color q-pa-none"
        standout="bg-WB-secondary text-WB-secondary"
        dense
        outlined
        color="WB-secondary"
      )
</template>

<script>
export default {
  name: 'DelayBlock',
  data () {
    return {
      min: this.$managerWB.user.isUserHaveRoles('operatorHard') ? 31 : 1,
      max: this.$managerWB.user.isUserHaveRoles('operatorHard') ? 999 : 60
    }
  },
  created () {
    this.$managerWB.loanRedistribution.filters.delay.min = this.min
    this.$managerWB.loanRedistribution.filters.delay.max = this.max
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    validateRange (delayObj) {
      if (delayObj.min < this.min || delayObj.min > this.max || delayObj.min === '') {
        this.$managerWB.loanRedistribution.filters.delay.min = this.min
      }
      if (delayObj.max < this.min || delayObj.max > this.max || delayObj.max === '') {
        this.$managerWB.loanRedistribution.filters.delay.max = this.max
      }
      if (delayObj.max < delayObj.min) {
        this.$managerWB.loanRedistribution.filters.delay.min = this.min
        this.$managerWB.loanRedistribution.filters.delay.max = this.max
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
