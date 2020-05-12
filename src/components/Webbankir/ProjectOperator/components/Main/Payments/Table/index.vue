<template lang="pug">
  .pretty-table__wrapper.q-pa-xs
    FilteredTable(
      :items="items"
      :table-options="options"
      :loading="$operatorWB.payments.loading"
      title="Платежи"
    )
      template(slot="ft-top-row" slot-scope="props" :props="props")
        q-tr.total.bg-grey-3
          q-td.columns(colspan="2") Итого:
          q-td.columns {{money(total(props.items).paid)}}
          q-td.columns {{money(total(props.items).debt)}}
          q-td.columns {{total(props.items).delay}}
          q-td.columns(v-if="$operatorWB.user.isUserHaveRoles('operatorSoft')") &nbsp;

      template(slot="ft-filters" slot-scope="props" :props="props")
        .row.items-center
          PeriodSelector.table__top-title(
            :from="$operatorWB.payments.period.from"
            :to="$operatorWB.payments.period.to"
            :min="$operatorWB.payments.period.min"
            :max="$operatorWB.payments.period.max"
            @change="$operatorWB.payments.setPaymentsPeriods"
            @submit="$operatorWB.payments.getPayments"
          )

      template.fixed-body(slot="ft-body" :props="props" slot-scope="props")
        q-tr.pretty-table__row.cursor-pointer(
          :props="props.props"
          :data-prop="props.props"
          @dblclick.native="!$operatorWB.payments.loading && openModal(props.props.row)"
        )
          q-td.columns(
            v-for="col in props.props.cols"
            v-if="!$operatorWB.user.isUserHaveRoles('operatorSoft') && col.name !== 'group' || true"
            :key="col.name"
            :props="props.props"
            row-key="clientId"
          )
            template(v-if="['string', 'text'].includes(col.type)")
              TextHighlight(:queries="queries(props.props.filters, col.name, col.value)") {{ col.value }}
            template(v-else-if="col.type === 'datetime'")
              span(v-if="!!col.value")
                | {{col.value.split(' ')[0]}}
                | &nbsp;
                small.text-blue-grey-9 {{col.value.split(' ')[1]}}
            template(v-else)
              span {{ col.value }}

</template>

<script>
import PeriodSelector from './PeriodSelector'
import { money, queries } from 'src/utils/helpers'
import options from './options'
import FilteredTable from '../../FilteredTable/index'
import TextHighlight from 'vue-text-highlight'

export default {
  name: 'PaymentsTable',
  components: {
    FilteredTable,
    PeriodSelector,
    TextHighlight
  },
  data () {
    return {
      options: { ...options },
      money,
      queries
    }
  },
  computed: {
    items () {
      return [...this.$operatorWB.payments.list].map(item => {
        return {
          clientId: item.clientId,
          delay: item.delay,
          name: item.clientName,
          currentDebt: item.currentDebt,
          date: item.payment.paidAt,
          paid: item.payment.amount,
          group: item.group ? item.group.name : null,
        }
      })
    },
  },
  methods: {
    openModal (row) {
      this.$operatorWB.layout.openClientCard({
        clientId: row.clientId,
        source: 'paymentsList',
        cardType: 'classic'
      })
    },
    total (items) {
      return [...items].reduce((acc, item) => {
        acc.paid += item.paid
        acc.debt += item.currentDebt
        acc.delay = item.delay > acc.delay ? item.delay : acc.delay
        return acc
      }, {
        debt: 0,
        delay: 0,
        paid: 0
      })
    }
  },
  mounted () {
    this.$operatorWB.user.rights.payments && this.$operatorWB.payments.getPayments()
    const cols = [...options.columns]
    if (!this.$operatorWB.user.isUserHaveRoles('operatorSoft')) {
      cols.splice(-1, 1)
    }
    this.options.columns = [...cols]
  }
}
</script>

<style scoped>
</style>
