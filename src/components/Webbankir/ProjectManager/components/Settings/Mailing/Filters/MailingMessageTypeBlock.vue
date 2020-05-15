<template lang="pug">
  .mailing-message-type__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span Тип сообщений
    .flex.justify-center.items-center.full-width
      .q-px-md.q-pb-md.full-width
        q-select.max-h-75px.min-w-200px.full-width(
          transition-show="fade"
          transition-hide="fade"
          v-model="$managerWB.mailing.filters.messagesType"
          :options="[{ label: 'SMS', value: 'sms' }, { label: 'Email', value: 'email' }]"
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
  name: 'MailingMessageTypeBlock',
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
