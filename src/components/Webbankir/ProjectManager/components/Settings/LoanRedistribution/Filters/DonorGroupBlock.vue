<template lang="pug">
  .donor-group__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.donorGroup')}}
    .flex.justify-center.items-center.full-width
      .q-px-md.q-pb-md.full-width
        q-select.max-h-40px.min-w-200px.full-width(
          @input="$managerWB.loanRedistribution.isDonorGroupsEmpty = false"
          transition-show="fade"
          transition-hide="fade"
          v-model="$managerWB.loanRedistribution.filters.donorGroupsArrayOfObjects"
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
          :error="$managerWB.loanRedistribution.isDonorGroupsEmpty"
        )
</template>

<script>
export default {
  name: 'DonorGroupBlock',
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
