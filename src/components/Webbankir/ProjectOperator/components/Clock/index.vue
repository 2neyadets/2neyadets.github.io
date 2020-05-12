<template lang="pug">
  span(id="clock" :style="`font-size: ${size}em`")
    span.time {{time}}

</template>

<script>
export default {
  name: 'CustomClock',
  props: {
    hideDate: {
      type: Boolean
    },
    timezone: {
      type: Number
    },
    size: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      time: '',
      date: '',
      week: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
      timerId: 0
    }
  },
  created () {
    this.timerId = setInterval(this.updateTime, 1000)
    this.updateTime()
  },
  beforeDestroy () {
    clearTimeout(this.timerId)
  },
  methods: {
    updateTime () {
      const cd = new Date()
      const timezoneOffset = cd.getTimezoneOffset()
      if (this.timezone !== undefined) {
        const offsetTimezone = -1 * this.timezone * 60
        const offsetTime = (offsetTimezone - timezoneOffset) * 60 * 1000
        cd.setTime(cd.getTime() - offsetTime)
      }
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()]
    },
    zeroPadding (num, digit) {
      let zero = ''
      for (let i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>

<style scoped>
</style>
