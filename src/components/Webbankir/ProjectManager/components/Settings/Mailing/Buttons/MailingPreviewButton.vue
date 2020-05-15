<template lang="pug">
  .mailing-preview__button
    q-btn(
      color="WB-secondary"
      :loading="$managerWB.mailing.loadings.preview || $managerWB.mailing.loadings.sending"
      @click="$managerWB.mailing.getPreview"
      icon-right="create"
      label="Сформировать"
    )
      template(#loading)
        q-skeleton.full-width.full-height
</template>

<script>
export default {
  name: 'MailingPreviewButton',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
</style>
