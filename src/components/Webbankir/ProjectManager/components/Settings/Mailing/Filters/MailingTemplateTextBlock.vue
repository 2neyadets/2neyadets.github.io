<template lang="pug">
  .mailing-template-text__block.q-mx-xs.full-width
    q-input.text-for-template-area.brs3(
      :value="$t(`mailing.${$managerWB.mailing.filters.messagesType}.textForTemplates.${$managerWB.mailing.communicationResult}`)"
      type="textarea"
      readonly
      orientation="vertical"
      outlined
      dense
    )
</template>

<script>
export default {
  name: 'MailingTemplateTextBlock',
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

<style lang="stylus">
  .text-for-template-area
    min-height 0
    max-height 78px
    padding-bottom 0
    .q-input-target
      font-size 12px
    &::before, &::after
      content none

    .q-field__native
      min-height 36px !important
      max-height 75px
</style>
