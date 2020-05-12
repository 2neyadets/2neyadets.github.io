<template lang="pug">
  .comments__result-calc
    .comments__calc
      .comments__calc-content
        template(v-if="result === 'promiseOfInstallment'")
          .comments__calc-title {{ $t('communications.headings.calcInstallment') }}
          PromiseOfInstallment

        template(v-if="result === 'promiseOfRenewal'")
          .comments__calc-title {{ $t('communications.headings.calcRenewal') }}
          PromiseOfRenewal

        template(v-if="!!result.match(/(promiseToRepayInFull)/)")
          .comments__calc-title {{ $t('communications.headings.calcFullPayment') }}
          PromiseToRepayInFull

        template(v-if="!!result.match(/(promiseToRepayPartially)/)")
          .comments__calc-title {{ $t('communications.headings.calcPartialPayment') }}
          PromiseToRepayPartially

</template>

<script>
import PromiseOfInstallment from './PromiseOfInstallment'
import PromiseOfRenewal from './PromiseOfRenewal'
import PromiseToRepayPartially from './promiseToRepayPartially'
import PromiseToRepayInFull from './PromiseToRepayInFull'

export default {
  name: 'PromiseCalculators',
  components: {
    PromiseToRepayInFull,
    PromiseToRepayPartially,
    PromiseOfRenewal,
    PromiseOfInstallment
  },
  computed: {
    result () {
      return this.$operatorWB.communication.form.result
    },

  }
}
</script>

<style scoped>
</style>
