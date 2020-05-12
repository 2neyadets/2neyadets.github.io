<template lang="pug">

  .clock
    q-icon(name="access_time")
      q-tooltip Время клиента
    .time
      CustomClock(:timezone="timeZone")
    .timezone
      | ({{timeZoneName}})

</template>

<script>
import { getTimezoneName } from 'src/utils/helpers'
import CustomClock from '../../../Clock/index'

export default {
  name: 'Clock',
  components: { CustomClock },
  props: {
    timeZone: {
      type: Number,
      required: false
    }
  },
  computed: {
    timeZoneName () {
      return getTimezoneName(this.timeZone)
    }
  },
}
</script>

<style scoped lang="stylus">
  .clock
    display flex

  .time
    margin 0 5px

  .timezone
    color: #575657
</style>
