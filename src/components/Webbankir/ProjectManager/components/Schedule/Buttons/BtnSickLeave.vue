<template lang="pug">
  .btn-sick-leave.flex.justify-center.items-center
    q-btn.btn-for-schedule.q-pa-none(
      size="xs"
      color="WB-bg-color"
      :class="cursorInherit ? 'cursor-inherit' : ''"
      :ripple="!cursorInherit"
      glossy
    )
      span.font-size-small Б
</template>

<script>
export default {
  name: 'BtnSickLeave',
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
