<template lang="pug">
  q-dialog.client-card-modal(ref="clientCardModalRef" v-model="$operatorWB.layout.clientCardModalOpened" content-class="operatorWB__dialog operatorWB__card-dialog" no-esc-dismiss maximized)
    q-layout.full-width.flex.items-end(ref="layoutForDeleteTabindex" container style="height: calc(100vh - 82px); width: 100vw; overflow: auto !important;")
      ClientCard.full-width

</template>

<script>
import ClientCard from '../ClientCard'

export default {
  name: 'ClientCardModal',
  components: {
    ClientCard
  },
  mounted () {
    this.$nextTick(function () {
      this.$refs.layoutForDeleteTabindex.$parent.$refs.inner.removeAttribute('tabindex')
    })
  }
}
</script>

<style scoped lang="stylus">
  .hidden
    display: none

  .q-toolbar-title
    span
      margin-left: 20px
</style>
