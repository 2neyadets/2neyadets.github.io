<template lang="pug">
  .switch__button
    q-btn(
      flat
      round
      color="WB-secondary"
      @click="$managerWB.loanRedistribution.switchBetweenDonorAndRecipient"
      icon="switch_camera"
    )
</template>

<script>
export default {
  name: 'SwitchButton',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
</style>
