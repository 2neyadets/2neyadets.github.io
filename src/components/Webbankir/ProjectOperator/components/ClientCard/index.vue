<template lang="pug">

  .main-card
    q-card.bg-WB-dark.client-card.brs5.shadow-up-2
      q-card-section.q-pa-none.client-card__title
        ClientHeader

      q-card-section.q-pa-none.client-card__main

        Borrower

        Communication(v-if="size === 'half'")

        CommunicationsHistory(v-if="view === 'communications'")
        AccrualsHistory(v-if="view === 'accruals'")
        PaymentsHistory(v-if="view === 'payments'")
        LoansHistory(v-if="view === 'loans'")
        PromisesHistory(v-if="view === 'promises'")
        AgreementsHistory(v-if="view === 'agreements'")
        PurchasesHistory(v-if="view === 'purchases'")

</template>

<script>
import ClientHeader from './ClientHeader'
import Borrower from './Borrower'
import Communication from './Communication'
import CommunicationsHistory from './Histories/Communications'
import AccrualsHistory from './Histories/Accruals'
import PaymentsHistory from './Histories/Payments'
import LoansHistory from './Histories/Loans'
import PromisesHistory from './Histories/Promises'
import AgreementsHistory from './Histories/Agreements'
import PurchasesHistory from './Histories/Purchases/index'

export default {
  name: 'ClientCard',
  components: {
    PurchasesHistory,
    AgreementsHistory,
    PromisesHistory,
    LoansHistory,
    PaymentsHistory,
    AccrualsHistory,
    Communication,
    Borrower,
    ClientHeader,
    CommunicationsHistory
  },
  computed: {
    size () {
      return this.$operatorWB.layout.size
    },
    view () {
      return this.$operatorWB.layout.view
    }
  }
}
</script>

<style scoped lang="stylus">
  .client-card__main
    padding 0
</style>
