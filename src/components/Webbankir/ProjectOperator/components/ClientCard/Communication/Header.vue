<template lang="pug">
  .card__title.flex.justify-between
    .comments__header-title.flex.items-center {{$t('communications.title')}}
    .flex.items-center
      span.link.comments__header-link(@click="$operatorWB.layout && $operatorWB.layout.set('view', 'communications')")
        | {{$t('communications.labels.history')}} ({{$operatorWB.clients.currentClient.communications && $operatorWB.clients.currentClient.communications.length}})
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="stylus">
</style>
