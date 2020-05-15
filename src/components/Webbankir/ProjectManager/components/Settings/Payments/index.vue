<template lang="pug">
  .payments.font-size-medium
    PaymentsSearch.q-mb-md(
      @loaded="fillPayments"
      @loading="changeLoadingState"
    )
    PaymentsTable(
      v-if="payments.length"
      :data="payments"
      :login="login"
      :from="from"
      :all="all"
      :loading="loading"
    )
</template>

<script>
import PaymentsSearch from './PaymentsSearch/index'
import PaymentsTable from './Table/index'
export default {
  name: 'WBManagerPayments',
  components: { PaymentsTable, PaymentsSearch },
  data () {
    return {
      payments: [],
      login: '',
      from: '',
      all: false,
      loading: '',
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    fillPayments (data) {
      this.payments = data.payments
      this.login = data.login
      this.from = data.from
      this.all = data.all
    },
    changeLoadingState (isLoading) {
      this.loading = isLoading
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
