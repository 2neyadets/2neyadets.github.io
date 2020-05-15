<template lang="pug">
  .product-type-block__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.productType')}}
    .flex.justify-center.items-center.full-width
      .q-px-md.q-pb-md.full-width
        q-select.max-h-75px.min-w-200px.full-width(
          transition-show="fade"
          transition-hide="fade"
          v-model="$managerWB.loanRedistribution.filters.productTypeModel"
          :options="optionsForProductType"
          standout="bg-WB-secondary text-WB-secondary"
          dense
          dark
          outlined
          color="WB-secondary"
          popup-content-class="bg-WB-dark text-white"
          options-dense
        )
</template>

<script>
export default {
  name: 'ProductTypeBlock',
  data () {
    return {}
  },
  created () {
  },
  computed: {
    optionsForProductType () {
      return ['all', 'pos', 'pdl'].map(string => {
        return {
          label: this.$t('loanRedistribution.filters.productType.' + string),
          value: string
        }
      })
    },
  },
  methods: {}
}
</script>

<style lang="stylus">
</style>
