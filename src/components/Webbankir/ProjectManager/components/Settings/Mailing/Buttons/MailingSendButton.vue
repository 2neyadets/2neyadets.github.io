<template lang="pug">
  .mailing-send__button
    q-btn(
      :color="$managerWB.mailing.tableData && $managerWB.mailing.tableData.length && $managerWB.mailing.communicationResult !== 'blank' ? 'WB-secondary' : ''"
      :disable="!($managerWB.mailing.tableData && $managerWB.mailing.tableData.length) || $managerWB.mailing.communicationResult === 'blank'"
      :loading="$managerWB.mailing.loadings.preview || $managerWB.mailing.loadings.sending"
      @click="$managerWB.mailing.sendMessages"
      icon-right="mail"
      label="Отправить"
    )
      template(#loading)
        q-skeleton.full-width.full-height
</template>

<script>
export default {
  name: 'MailingSendButton',
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
