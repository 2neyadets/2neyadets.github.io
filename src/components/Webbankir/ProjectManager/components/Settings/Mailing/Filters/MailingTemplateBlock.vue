<template lang="pug">
  .mailing-template__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span Шаблон
    .flex.justify-center.items-center.full-width
      .q-px-md.q-pb-md.full-width
        q-select.max-h-75px.min-w-200px.full-width(
          transition-show="fade"
          transition-hide="fade"
          v-model="$managerWB.mailing.communicationResult"
          :options="$managerWB.mailing.templatesOptions"
          :disable="!($managerWB.mailing.tableData && $managerWB.mailing.tableData.length)"
          standout="bg-WB-secondary text-WB-secondary"
          dense
          dark
          outlined
          color="WB-secondary"
          popup-content-class="bg-WB-dark text-white"
          options-dense
          emit-value
          map-options
        )
</template>

<script>
export default {
  name: 'MailingTemplateBlock',
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
</style>
