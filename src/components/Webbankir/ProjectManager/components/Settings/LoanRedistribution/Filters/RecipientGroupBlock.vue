<template lang="pug">
  .recipient-group__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.recipientGroup')}}
    .flex.justify-center.items-center.full-width
      .q-px-md.q-pb-md.full-width
        q-select.max-h-40px.min-w-200px.full-width(
          @input="$managerWB.loanRedistribution.isRecipientGroupsEmpty = false"
          transition-show="fade"
          transition-hide="fade"
          v-model="$managerWB.loanRedistribution.filters.recipientGroupsArrayOfObjects"
          multiple
          use-chips
          :options="$managerWB.user.groupsForSelect"
          standout="bg-WB-secondary text-WB-secondary"
          clearable
          dense
          dark
          outlined
          color="WB-secondary"
          popup-content-class="bg-WB-dark text-white"
          options-dense
          :error="$managerWB.loanRedistribution.isRecipientGroupsEmpty"
        )
</template>

<script>
export default {
  name: 'RecipientGroupBlock',
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
