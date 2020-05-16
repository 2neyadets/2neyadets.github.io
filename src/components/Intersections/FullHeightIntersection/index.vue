<template lang="pug">
  q-intersection(
    transition="fade"
    class="full-height-item"
  )
    slot
</template>

<script>

export default {
  name: 'FullHeightIntersection',
}

</script>

<style lang="stylus" scoped>
  .full-height-item
    height calc(100vh - 50px)
</style>
