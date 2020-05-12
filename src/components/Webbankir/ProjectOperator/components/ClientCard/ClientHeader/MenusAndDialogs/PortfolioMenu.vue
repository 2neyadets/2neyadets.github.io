<template lang="pug">
  q-menu(ref="qMenu" touch-position)
    q-btn(
      @click="openDialog"
      label="Выберите новый портфель"
      color="WB-primary"
    )
</template>

<script>
export default {
  name: 'PortfolioMenu',
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
