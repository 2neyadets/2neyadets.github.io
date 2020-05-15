<template lang="pug">
  .btn-rescheduled-shift.flex.justify-center.items-center
    q-btn.btn-for-schedule.q-pa-none(
      size="xs"
      color="WB-warning-color"
      :class="cursorInherit ? 'cursor-inherit' : ''"
      :ripple="!cursorInherit"
    )
      span.font-size-small ПС
</template>

<script>
export default {
  name: 'BtnRescheduledShift',
  props: {
    cursorInherit: {
      type: Boolean,
      default: false
    }
  },
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
