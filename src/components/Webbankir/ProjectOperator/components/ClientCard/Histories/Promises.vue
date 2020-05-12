<template lang="pug">
  HistoryBlock
    template(slot="title-left")
      span {{$t('communications.histories.titles.promises')}}

    q-table(
      :columns="columns"
      :data="$operatorWB.loans.currentPromises"
      :pagination.sync="pagination"
      row-key="name" color="WB-secondary"
      hide-bottom
      separator="cell"
      :dark="false"
    )
      template.fixed-body(slot="body" slot-scope="props")
        q-tr.cursor-pointer(:props="props" :data-prop="props")
          q-td(v-for="col in props.cols" :key="col.name" :props="props")
            template(v-if="col.name === 'status'")
              span(:class="colorClass(col.value)") {{ columnValue(col) }}
            template(v-else-if="col.name === 'operator'")
              span {{ columnValue(col) }}
                q-tooltip(v-if="col.value && col.value.fullName && col.value.department && col.value.department.name")
                  | {{col.value.department.name}} ({{col.value.position}})
            template(v-else)
              | {{ columnValue(col) }}
</template>

<script>
import HistoryBlock from './HistoryBlock'
import { money, getShortDate } from 'src/utils/helpers'
import camelCase from 'lodash/camelCase'

export default {
  name: 'PromisesHistory',
  components: {
    HistoryBlock
  },
  data () {
    return {
      pagination: {
        sortBy: 'createdAt',
        descending: true,
        page: 1,
        rowsPerPage: 0
      },

      columns: [
        {
          name: 'createdAt',
          field: 'createdAt',
          label: 'Дата обещания',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'promisedAt',
          field: 'promisedAt',
          label: 'Дата выполнения обещания',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'type',
          field: 'type',
          label: 'Тип обещания',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'promisedAmount',
          field: 'promisedAmount',
          label: 'Сумма к оплате, ₽',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'status',
          field: 'status',
          label: 'Статус обещания',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'operator',
          field: 'operator',
          label: 'Исполнитель',
          align: 'center',
          required: true,
          sortable: true
        }
      ],
    }
  },
  computed: {},
  methods: {
    colorClass (val) {
      let css = ''
      if (camelCase(val) === 'notFulfilled') {
        css = 'red'
      }
      if (camelCase(val) === 'partiallyFulfilled') {
        css = 'orange'
      }
      return css
    },
    columnValue (col) {
      let value = col.value
      switch (col.name) {
        case 'partial':
        case 'promisedAmount':
          value = col.value ? money(col.value, true) : ''
          break
        case 'createdAt':
        case 'promisedAt':
          value = getShortDate(col.value)
          break
        case 'type':
          value = col.value && this.$t('communications.result.' + col.value)
          break
        case 'status':
          value = (col.value && this.$t('communications.promises.' + camelCase(col.value))) || this.$t('communications.promises.unknown')
          break
        case 'operator':
          // eslint-disable-next-line no-case-declarations
          const op = col.value
          value = op && (op.fullName || (op.department && op.department.name))
          break
      }
      return value
    }

  }
}
</script>

<style scoped lang="stylus">
  .red
    color: #f82317
    font-weight: bold

  .orange
    color: #f5a623
    font-weight: bold

</style>
