<template lang="pug">
  q-dialog(
    @hide="$emit('hide')"
    :value="show"
    content-class="heroes__dialog"
    persistent
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  )
    .flex.flex-center
      .q-pa-none
        q-bar.q-px-xs(v-if="$q.platform.is.desktop")
          q-space
          q-btn(color="white" icon="close" dense flat v-close-popup)
            q-tooltip(:content-class="`bg-${$app.layout.activeColor} text-${$app.layout.activeTextColor}`") {{$t('layout.close')}}
        slot
</template>

<script>
export default {
  name: 'ProjectDialog',
  props: {
    show: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
