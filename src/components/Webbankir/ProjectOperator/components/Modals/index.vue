<template lang="pug">
  .modals
    ClientCardModal(v-if="$operatorWB.layout.clientCardModalOpened")
</template>

<script>
import ClientCardModal from './ClientCardModal'

export default {
  name: 'Modals',
  components: {
    ClientCardModal
  },
}
</script>

<style scoped>
</style>
