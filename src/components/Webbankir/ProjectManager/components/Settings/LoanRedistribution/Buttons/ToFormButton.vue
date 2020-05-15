<template lang="pug">
  .to-form__button
    q-btn(
      color="WB-secondary"
      :loading="$managerWB.loanRedistribution.loading.toFormMethod || $managerWB.loanRedistribution.loading.redistributeMethod"
      @click="$managerWB.loanRedistribution.getPreview"
      icon-right="create"
    ) {{$t('loanRedistribution.filters.labels.toForm')}}
      template(#loading)
        q-skeleton.full-width.full-height
</template>

<script>
export default {
  name: 'ToFormButton',
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
