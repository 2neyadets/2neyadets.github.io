<template lang="pug">
  .payments
    .payments__title.q-mb-md(v-text="$t('loans.schedule.payments')")

    q-table(
      :columns="columns"
      :data="data"
      :pagination.sync="pagination"
      row-key="index"
      color="WB-secondary"
      hide-bottom
      separator="cell"
    )
      template.fixed-body(slot="body" slot-scope="props")
        q-tr.cursor-pointer(:props="props" :data-prop="props")
          q-td(v-for="col in props.cols" :key="col.name" :props="props")
            | {{ col.value }}

</template>

<script>
import HistoryBlock from '../HistoryBlock'
import { getShortDate, money } from 'src/utils/helpers'

export default {
  name: 'InstallmentPayments',
  components: {
    HistoryBlock
  },
  data () {
    return {
      pagination: {
        sortBy: 'paidAt',
        descending: false,
        page: 1,
        rowsPerPage: 0
      },
      columns: [
        {
          name: 'paidAt',
          field: 'paidAt',
          format: val => getShortDate(val),
          label: this.$t('histories.payments.date'),
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'amount',
          field: 'amount',
          format: val => money(val, true),
          label: this.$t('histories.payments.sumPayment'),
          align: 'center',
          required: true,
          sortable: true
        },
      ],
    }
  },
  computed: {
    data () {
      return this.$operatorWB.loans.currentActiveAgreementPayments
    },
    sumTotal () {
      return this.data.reduce((acc, item) => {
        return acc + item.sum_payment
      }, 0)
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
