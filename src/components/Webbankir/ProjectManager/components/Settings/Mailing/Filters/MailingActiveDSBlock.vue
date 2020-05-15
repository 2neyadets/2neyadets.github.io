<template lang="pug">
  .mailing-DS-status__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span Активное ДС
    .flex.justify-around.items-center.q-ma-xs
      q-checkbox.q-mx-xs(
        v-model="$managerWB.mailing.filters.status.hardWithAgreement"
        @input="uncheckStatus(false)"
        label="Есть"
        color="positive"
        keep-color
      )
      q-checkbox.q-mx-xs(
        v-model="$managerWB.mailing.filters.status.hard"
        @input="uncheckStatus(true)"
        label="Нет"
        color="negative"
        keep-color
      )
</template>

<script>
export default {
  name: 'MailingActiveDSBlock',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    uncheckStatus (source) {
      if (source) {
        this.$managerWB.mailing.filters.status.hardWithAgreement = false
      } else {
        this.$managerWB.mailing.filters.status.hard = false
      }
    },
  }
}
</script>

<style scoped lang="stylus">
</style>
