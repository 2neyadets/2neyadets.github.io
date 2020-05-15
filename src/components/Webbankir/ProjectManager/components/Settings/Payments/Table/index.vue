<template lang="pug">
  .payments__table
    q-table(
      :data="data"
      :columns="columns"
      :pagination.sync="pagination"
      :loading="loading"
      separator="cell"
      row-key="id"
      dense
      dark
      color="WB-secondary"
    )
      template(#top="props")
        span {{all ? `Все платежи клиента ${login}` : `Платежи клиента ${login} за период с ${from} по ${today}`}}
      template(#body="props")
        q-tr.cursor-pointer(@click.native="openDialog(props.row.id)")
          q-td.q-pa-none(v-for="col in props.cols" :key="col.name" :props="props")
            template(v-if="col.type === 'datetime'")
              span(v-if="!!col.value")
                | {{col.value.split(' ')[0]}}
                | &nbsp;
                small {{col.value.split(' ')[1]}}
            template(v-else)
              span {{col.value}}
    ChangeGroupForPaymentDialog(
      v-if="modal"
      :show="modal"
      @close="modal = false"
      :paymentId="paymentId"
    )
</template>

<script>
import { date } from 'quasar'
const { extractDate, formatDate } = date
import moment from 'moment/moment'
import ChangeGroupForPaymentDialog from '../Dialogs/changeGroupForPaymentDialog'

export default {
  name: 'PaymentsTable',
  components: { ChangeGroupForPaymentDialog },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    login: {
      type: String,
      default: ''
    },
    from: {
      type: String,
      default: ''
    },
    all: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      today: moment().format('DD.MM.YYYY'),
      modal: false,
      paymentId: null,
      pagination: {
        sortBy: 'paidAt',
        descending: true,
        page: 1,
        rowsPerPage: 25
      },
      columns: [
        { name: 'id', field: 'id', label: 'ID платежа', align: 'center', sortable: true },
        { name: 'contract', field: 'contract', label: 'Договор', align: 'center', sortable: true },
        { name: 'productId', field: 'productId', label: 'ID продукта', align: 'center', sortable: true },
        { name: 'dealId', field: 'dealId', label: 'ID сделки (POS)', align: 'center', sortable: true },
        { name: 'agreementId', field: 'agreementId', label: 'ID ДС', align: 'center', sortable: true },
        {
          name: 'paidAt',
          field: 'paidAt',
          format: v => formatDate(extractDate(v, 'YYYY-MM-DDTHH:mm:ssZ'), 'DD.MM.YYYY HH:mm:ss'),
          label: 'Дата олаты',
          align: 'center',
          type: 'datetime',
          sortable: true
        },
        { name: 'amount', field: 'amount', label: 'Сумма', align: 'center', sortable: true },
        { name: 'paymentSystem', field: 'paymentSystem', label: 'Система оплаты', align: 'center', sortable: true },
      ]
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    openDialog (paymentId) {
      this.paymentId = paymentId
      this.$nextTick(() => {
        this.modal = true
      })
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
