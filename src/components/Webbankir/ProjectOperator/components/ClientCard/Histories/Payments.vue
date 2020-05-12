<template lang="pug">
  HistoryBlock
    template(slot="title-left")
      span {{$t('histories.payments.title')}}

    template(slot="title-right")
      span.height.q-mr-sm
        | {{$t('histories.payments.sumTotal')}}:&nbsp;
        strong {{money(sumTotal, true)}}

    q-table(
      :columns="columns"
      :data="data"
      :pagination.sync="pagination"
      row-key="name"
      color="WB-secondary"
      hide-bottom
      separator="cell"
      :dark="false"
    )
      template.fixed-body(slot="body" slot-scope="props")
        q-tr.cursor-pointer(:props="props" :data-prop="props")
          q-td(v-for="col in props.cols" :key="col.name" :props="props")
            template(v-if="col.type === 'datetime'")
              span(v-if="!!col.value")
                | {{col.value.split(' ')[0]}}
                | &nbsp;
                small.text-blue-grey-9 {{col.value.split(' ')[1]}}
            template(v-else)
              span {{ col.value }}
</template>

<script>
import HistoryBlock from './HistoryBlock'
import { getDateTime, money } from 'src/utils/helpers'

export default {
  name: 'PaymentsHistory',
  components: {
    HistoryBlock
  },
  data () {
    return {
      money,
      pagination: {
        sortBy: 'paidAt',
        descending: true,
        page: 1,
        rowsPerPage: 0
      },
      columns: [
        {
          name: 'paidAt',
          field: 'paidAt',
          format: val => getDateTime(val),
          label: this.$t('histories.payments.date'),
          align: 'center',
          required: true,
          sortable: true,
          type: 'datetime'
        },
        {
          name: 'number',
          field: 'id',
          label: this.$t('histories.payments.number'),
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
        {
          name: 'paymentSystem',
          field: 'paymentSystem',
          label: this.$t('histories.payments.paymentSystem'),
          align: 'center',
          required: true,
          sortable: true
        }
      ],
    }
  },
  computed: {
    data () {
      return this.$operatorWB.loans.currentPayments
    },
    sumTotal () {
      return this.data.reduce((acc, item) => {
        return acc + item.amount
      }, 0)
    }
  },
}
</script>

<style scoped lang="stylus">
  .height
    line-height 32px
</style>
