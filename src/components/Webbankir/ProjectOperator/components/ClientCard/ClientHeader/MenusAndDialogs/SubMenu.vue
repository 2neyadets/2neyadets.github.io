<template lang="pug">
  q-menu(ref="qMenu" touch-position)
    q-btn(
      @click="openDialog"
      :label="label"
      color="WB-primary"
    )
</template>

<script>
export default {
  name: 'SubMenu',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
  },
  methods: {
    openDialog () {
      this.$refs.qMenu.hide()
      this.$emit('openDialog')
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
