<template lang="pug">
  .btn-planned-workday.flex.justify-center.items-center
    q-btn.btn-for-schedule.q-pa-none(
      size="xs"
      color="WB-vkontakte-color"
      :class="cursorInherit ? 'cursor-inherit' : ''"
      :ripple="!cursorInherit"
    )
      span.font-size-small Р
</template>

<script>
export default {
  name: 'BtnPlannedWorkday',
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
