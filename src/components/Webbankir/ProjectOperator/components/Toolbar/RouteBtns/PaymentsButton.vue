<template lang="pug">
  MenuButton(
    icon="fa fa-coins"
    label="Платежи"
    :disable="!!$operatorWB.clients.current"
    :to="{path: '/payments'}"
  )
</template>

<script>
import MenuButton from './MenuButton'
export default {
  name: 'PaymentsButton',
  components: { MenuButton }
}
</script>

<style scoped>
</style>
