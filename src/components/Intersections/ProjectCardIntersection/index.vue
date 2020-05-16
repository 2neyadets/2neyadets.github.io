<template lang="pug">
  q-intersection(
    transition="fade"
    :style="`height: ${300}px;`"
  )
    slot
</template>

<script>

export default {
  name: 'ProjectCardIntersection',
}

</script>

<style lang="stylus" scoped>
</style>
