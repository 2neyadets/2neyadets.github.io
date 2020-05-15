<template lang="pug">
  .btn-unpaid-leave.flex.justify-center.items-center
    q-btn.btn-for-schedule.q-pa-none(
      size="xs"
      color="warning"
      :class="cursorInherit ? 'cursor-inherit' : ''"
      :ripple="!cursorInherit"
    )
      span.font-size-small.text-WB-bg-color ДО
</template>

<script>
export default {
  name: 'BtnUnpaidLeave',
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
