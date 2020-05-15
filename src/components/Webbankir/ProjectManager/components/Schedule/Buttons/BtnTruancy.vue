<template lang="pug">
  .btn-truancy.flex.justify-center.items-center
    q-btn.btn-for-schedule.q-pa-none(
      size="xs"
      color="negative"
      :class="cursorInherit ? 'cursor-inherit' : ''"
      :ripple="!cursorInherit"
    )
      span.font-size-small ПР
</template>

<script>
export default {
  name: 'BtnTruancy',
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
