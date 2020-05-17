<template lang="pug">
  q-dialog(
    @hide="$emit('hide')"
    :value="show"
    persistent
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  )
    .flex.flex-center.text-center
      .q-pa-sm
        h4.text-white {{$t('layout.desktopOnly')}}
        q-btn(
          :label="$t('layout.close')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          v-close-popup
        )
</template>

<script>
export default {
  name: 'DesktopOnlyDialog',
  props: {
    show: {
      type: Boolean,
      required: true,
    }
  }
}
</script>
