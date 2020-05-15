<template lang="pug">
  .btn-planned-dayoff.flex.justify-center.items-center
    q-btn.btn-for-schedule.q-pa-none(
      size="xs"
      outline
      color="WB-disabled-color"
      :class="cursorInherit ? 'cursor-inherit' : ''"
      :ripple="!cursorInherit"
    )
      span.font-size-small В
</template>

<script>
export default {
  name: 'BtnPlannedDayOff',
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
