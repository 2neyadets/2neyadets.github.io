<template lang="pug">
  .count-down(
    :class="{info: $operatorWB.communication.timeout > 10,warn: $operatorWB.communication.timeout <= 10 && $operatorWB.communication.timeout > 5, alert:  $operatorWB.communication.timeout <= 5 || $operatorWB.communication.timeout}"
  ) {{ digital }}
</template>

<script>
import { secondsToHms } from 'src/utils/helpers'

export default {
  name: 'Timeout',
  data () {
    return {
      classname: ''
    }
  },
  computed: {
    digital () {
      const isNum = this.$operatorWB.communication.timeout !== null && Number(this.$operatorWB.communication.timeout)
      return isNum ? secondsToHms(this.$operatorWB.communication.timeout) : this.$operatorWB.communication.timeout
    }
  }
}
</script>

<style lang="stylus" scoped>
  .count-down
    padding 3px 10px
    margin 0 10px
    transition background-color .5s easy
    border-radius 3px
    font-weight: bold
    font-size 1.25rem
    color white

  .info
    background-color green

  .warn
    background-color orange
    animation flash linear 1s infinite

  .alert
    background-color red
    animation flash linear .5s infinite

  @keyframes flash
    0%
      opacity: 1
    50%
      opacity: .1
    100%
      opacity: 1

</style>
