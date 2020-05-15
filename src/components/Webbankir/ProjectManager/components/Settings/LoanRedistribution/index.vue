<template lang="pug">
  .loan__redistribution
    .filters.q-pa-xs.q-mb-sm
      .row.justify-around.items-center
        .col-xs-12.col-sm.flex.justify-center.items-center.q-pa-xs(v-if="$managerWB.user.isUserHaveRoles('operatorHard')")
          AssignedBlock
        .col-xs-12.col-sm.flex.justify-center.items-center.q-pa-xs(v-if="$managerWB.user.isUserHaveRoles('operatorHard')")
          StatusBlock
        .col-xs-12.col-sm.flex.justify-center.items-center.q-pa-xs
          PortfolioLimit
        .col-xs-12.col-sm.flex.justify-center.items-center.q-pa-xs
          GroupLimit
      .row.justify-around.items-center
        .col-xs-12.col-sm-4.flex.justify-center.items-center.q-pa-xs
          PaymentsBlock
        .col-xs-12.col-sm-4.flex.justify-center.items-center.q-pa-xs
          ContactWithClientBlock
        .col-xs-12.col-sm-4.flex.justify-center.items-center.q-pa-xs
          PromisesBlock
      .row.justify-around.items-center
        .col-xs-12.col-sm-6.row.justify-center.items-center.q-pa-xs
          DelayBlock
        .col-xs-12.col-sm-6.row.justify-center.items-center.q-pa-xs
          DebtBlock
      .row.justify-around.items-center
        .col-sm-12.col-md-5.col-xl.flex.justify-center.items-center.q-pa-xs
          DonorGroupBlock
        .col-sm-12.col-md-1.col-xl-1.flex.justify-center.items-center.q-pa-xs
          SwitchButton
        .col-sm-12.col-md-5.col-xl.flex.justify-center.items-center.q-pa-xs
          RecipientGroupBlock
        .col-sm-12.col-md-6.col-xl.flex.justify-center.items-center.q-pa-xs(v-if="$managerWB.user.isUserHaveRoles('operatorHard')")
          GPSBlock
      .row.justify-around.items-center
        .col-sm-12.col-md-6.col-xl-3.flex.justify-center.items-center.q-pa-xs
          SelectionMethodBlock
        .col-sm-12.col-md-6.col-xl-3.flex.justify-center.items-center.q-pa-xs
          ProductTypeBlock
        .col-sm-12.col-md-6.col-xl.flex.justify-center.items-center.q-pa-xs
          ToFormButton
        .col-sm-12.col-md-6.col-xl.flex.justify-center.items-center.q-pa-xs
          ClearButton
        .col-sm-12.col-md-6.col-xl.flex.justify-center.items-center.q-pa-xs
          RedistributeButton
    RedistributionTable
</template>

<script>
import AssignedBlock from './Filters/AssignedBlock'
import StatusBlock from './Filters/StatusBlock'
import PortfolioLimit from './Filters/PortfolioLimit'
import GroupLimit from './Filters/GroupLimit'
import PaymentsBlock from './Filters/PaymentsBlock'
import ContactWithClientBlock from './Filters/ContactWithClientBlock'
import PromisesBlock from './Filters/PromisesBlock'
import DelayBlock from './Filters/DelayBlock'
import DebtBlock from './Filters/DebtBlock'
import DonorGroupBlock from './Filters/DonorGroupBlock'
import RecipientGroupBlock from './Filters/RecipientGroupBlock'
import GPSBlock from './Filters/GPSBlock'
import SelectionMethodBlock from './Filters/SelectionMethodBlock'
import SwitchButton from './Buttons/SwitchButton.vue'
import ToFormButton from './Buttons/ToFormButton.vue'
import RedistributeButton from './Buttons/RedistributeButton.vue'
import RedistributionTable from './Table/'
import ClearButton from './Buttons/ClearButton'
import ProductTypeBlock from './Filters/ProductTypeBlock'

export default {
  name: 'WBManagerLoanRedistribution',
  components: {
    ProductTypeBlock,
    ClearButton,
    AssignedBlock,
    StatusBlock,
    PortfolioLimit,
    GroupLimit,
    PaymentsBlock,
    ContactWithClientBlock,
    PromisesBlock,
    DelayBlock,
    DebtBlock,
    DonorGroupBlock,
    RecipientGroupBlock,
    GPSBlock,
    SelectionMethodBlock,
    SwitchButton,
    ToFormButton,
    RedistributeButton,
    RedistributionTable
  },
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
