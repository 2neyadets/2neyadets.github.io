<template lang="pug">
  .card__row.debt__longs.no-border.bg-profile(v-if="currentAgreementsLength")
    span.debt__longs-link.link.q-mr-md(
      @click="$operatorWB.layout.set('view', 'agreements')"
    ) {{ $t('histories.agreements.title') }} ({{currentAgreementsLength || 0}})

</template>

<script>
export default {
  name: 'Agreements',
  computed: {
    currentAgreementsLength () {
      return this.$operatorWB.loans.currentAgreements.length
    }
  }
}
</script>

<style scoped>
</style>
