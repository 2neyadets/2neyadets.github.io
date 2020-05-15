<template lang="pug">
  .mailing-clear__button
    q-btn(
      :color="$managerWB.mailing.tableData && $managerWB.mailing.tableData.length ? 'WB-secondary' : ''"
      :disable="!($managerWB.mailing.tableData && $managerWB.mailing.tableData.length)"
      :loading="$managerWB.mailing.loadings.preview || $managerWB.mailing.loadings.sending"
      @click="$managerWB.mailing.tableData = []"
      icon-right="clear"
      label="Очистить"
    )
      template(#loading)
        q-skeleton.full-width.full-height
</template>

<script>
export default {
  name: 'MailingClearButton',
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
