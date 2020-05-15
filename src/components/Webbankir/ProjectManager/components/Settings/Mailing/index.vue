<template lang="pug">
  .mailing
    .filters.q-pa-xs.q-mb-sm
      .row.justify-around.items-center
        .col-xs-12.col-sm-6.flex.justify-center.items-center.q-pa-xs
          MailingActiveDSBlock
        .col-xs-12.col-sm-6.flex.justify-center.items-center.q-pa-xs
          MailingActivePromiseBlock
      .row.justify-around.items-center
        .col-xs-12.col-sm-6.row.justify-center.items-center.q-pa-xs
          MailingDelayBlock
        .col-xs-12.col-sm-6.row.justify-center.items-center.q-pa-xs
          MailingDebtBlock
      .row.justify-around.items-center
        .col-xs-12.col-sm-4.flex.justify-center.items-center.q-pa-xs
          MailingMessageTypeBlock
        .col-xs-12.col-sm-4.flex.justify-center.items-center.q-pa-xs
          MailingProductTypeBlock
        .col-xs-12.col-sm-4.flex.justify-center.items-center.q-pa-xs
          MailingGroupsBlock
      .row.justify-around.items-center
        .col-xs-12.col-sm-4.col-xl.flex.justify-center.items-center.q-pa-xs
          MailingPreviewButton
        .col-xs-12.col-sm-4.col-xl.flex.justify-center.items-center.q-pa-xs
          MailingClearButton
        .col-xs-12.col-sm-12.col-xl-4.flex.justify-center.items-center.q-pa-xs
          MailingTemplateBlock
        .col-xs-12.col-sm-12.col-xl-3.flex.justify-center.items-center.q-pa-xs
          MailingTemplateTextBlock
        .col-xs-12.col-sm-4.col-xl.flex.justify-center.items-center.q-pa-xs
          MailingSendButton
    MailingTable
</template>

<script>
import MailingActiveDSBlock from './Filters/MailingActiveDSBlock'
import MailingActivePromiseBlock from './Filters/MailingActivePromiseBlock'
import MailingDelayBlock from './Filters/MailingDelayBlock'
import MailingDebtBlock from './Filters/MailingDebtBlock'
import MailingGroupsBlock from './Filters/MailingGroupsBlock'
import MailingTemplateBlock from './Filters/MailingTemplateBlock'
import MailingPreviewButton from './Buttons/MailingPreviewButton'
import MailingSendButton from './Buttons/MailingSendButton.vue'
import MailingClearButton from './Buttons/MailingClearButton'
import MailingProductTypeBlock from './Filters/MailingProductTypeBlock'
import MailingTable from './Table/'
import MailingMessageTypeBlock from './Filters/MailingMessageTypeBlock'
import MailingTemplateTextBlock from './Filters/MailingTemplateTextBlock'

export default {
  name: 'WBManagerMailing',
  components: {
    MailingTemplateTextBlock,
    MailingMessageTypeBlock,
    MailingProductTypeBlock,
    MailingClearButton,
    MailingActiveDSBlock,
    MailingActivePromiseBlock,
    MailingDelayBlock,
    MailingDebtBlock,
    MailingGroupsBlock,
    MailingTemplateBlock,
    MailingPreviewButton,
    MailingSendButton,
    MailingTable
  },
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
