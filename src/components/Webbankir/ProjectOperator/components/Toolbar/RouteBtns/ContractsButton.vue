<template lang="pug">
  MenuButton(
    icon="fa fa-clipboard-list"
    label="Договоры"
    :disable="!!$operatorWB.clients.current"
    :to="{path: '/'}"
  )
</template>

<script>
import MenuButton from './MenuButton'
export default {
  name: 'ContractsButton',
  components: { MenuButton }
}
</script>

<style scoped>
</style>
