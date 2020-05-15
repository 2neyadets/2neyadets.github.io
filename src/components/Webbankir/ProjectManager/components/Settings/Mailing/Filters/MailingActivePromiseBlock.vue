<template lang="pug">
  .mailing-active-promises__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span Активное обещание
    .flex.justify-around.items-center
      q-checkbox.q-mx-xs(
        v-model="$managerWB.mailing.filters.isPromised.yes"
        @input="uncheckPromises(true)"
        label="Есть"
        color="positive"
        keep-color
      )
      q-checkbox.q-mx-xs(
        v-model="$managerWB.mailing.filters.isPromised.no"
        @input="uncheckPromises(false)"
        label="Нет"
        color="negative"
        keep-color
      )
</template>

<script>
export default {
  name: 'MailingActivePromiseBlock',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    uncheckPromises (source) {
      if (source) {
        this.$managerWB.mailing.filters.isPromised.no = false
      } else {
        this.$managerWB.mailing.filters.isPromised.yes = false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
