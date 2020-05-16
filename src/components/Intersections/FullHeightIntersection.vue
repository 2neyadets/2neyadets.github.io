<template lang="pug">
  q-intersection(
    transition="fade"
    :style="`height: ${$q.screen.height - 50}px;`"
  )
    slot
</template>

<script>

export default {
  name: 'FullHeightIntersection',
}

</script>
