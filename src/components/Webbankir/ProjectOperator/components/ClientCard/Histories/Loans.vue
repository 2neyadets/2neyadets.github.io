<template lang="pug">
  HistoryBlock.history-loans
    template(slot="title-left")
      span {{$t('communications.histories.titles.loans')}}

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
        q-tr.cursor-pointer(
          :props="props"
          :data-prop="props"
          @click.native="openInfo(props.row)"
          :ref="'row_' + props.row.id"
        )
          q-td(
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          )
            template(v-if="col.name === 'max_delay'")
              span.circle(:class="colorClass(col.value)") {{ col.value }}
            template(v-else)
              | {{ columnValue(col, props.row) }}
    q-dialog(
      v-model="dialog"
      full-width
      maximized
      position="top"
      seamless
      content-class="operatorWB__dialog"
      content-style="z-index: 6100;"
      :dark="false"
    )
      q-card.loan-info(:dark="false")
        q-card-section.row.items-center.q-py-none
          q-tabs(
            v-model="tab"
            active-color="WB-primary"
            :dark="false"
            style="color: black;"
          )
            q-tab(name="accruals" label="Начисления" :dark="false")
            q-tab(name="communications" label="Коммуникации" :dark="false")

          q-space
          q-btn(
            icon="close"
            flat round dense v-close-popup :dark="false" color="black"
          )
        q-card-section.content
          q-tab-panels(v-model="tab")
            q-tab-panel(name="accruals" :dark="false" style="background: white;")
              q-table(
                :columns="accruals.columns"
                :data="accruals.list"
                :pagination.sync="accruals.pagination"
                row-key="name"
                color="WB-secondary"
                hide-bottom
                separator="cell"
                :loading="loading"
                :dark="false"
              )
                template.fixed-body(slot="body" slot-scope="props")
                  q-tr.cursor-pointer(:props="props" :data-prop="props")
                    q-td(v-for="col in props.cols" :key="col.name" :props="props")
                      | {{ columnValue(col, props.row) }}

            q-tab-panel(name="communications" :dark="false" style="background: white;")
              q-table(
                :columns="communications.columns"
                :data="communicationsList"
                :pagination.sync="communications.pagination"
                row-key="index"
                color="WB-secondary"
                hide-bottom
                separator="cell"
                :loading="loading"
                :dark="false"
              )
                template.fixed-body(slot="body" slot-scope="props")
                  q-tr(:props="props" :data-prop="props")
                    q-td(v-for="col in props.cols" :key="col.name" :props="props")
                      template(v-if="col.name !== 'comment'")
                        span(v-html="columnValue(col, props.row)")
                      template(v-else)
                        span(v-if="col.value && col.value.length > 60") {{truncate(col.value, 60)}}
                          q-tooltip {{col.value}}
                        span(v-else) {{col.value}}

        q-card-actions
          q-space
          q-btn(
            label="Закрыть"
            color="WB-primary"
            v-close-popup
          )

</template>

<script>
import HistoryBlock from './HistoryBlock'
import { colorClass } from 'src/utils/mappers'
import { getDateTime, getShortDate, money } from 'src/utils/helpers'
import AccrualsHistory from './Accruals'
import api from 'src/api'

export default {
  name: 'LoansHistory',
  components: {
    AccrualsHistory,
    HistoryBlock
  },
  data () {
    return {
      accruals: {
        list: [],
        columns: [
          {
            name: 'index',
            field: row => row.id,
            label: '№',
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'date',
            field: 'date',
            format: val => getShortDate(val),
            label: 'Дата',
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'sum_main_debt',
            field: 'sum_main_debt',
            label: 'Сумма ОД, ₽',
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'sum_interest',
            field: 'sum_interest',
            label: 'Сумма процентов, ₽',
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'sum_fines',
            field: 'sum_fines',
            label: 'Сумма пени, ₽',
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'payment',
            field: 'payment',
            label: 'Сумма оплаты, ₽',
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'payment_main_debt',
            field: 'payment_main_debt',
            label: 'Оплачено ОД, ₽',
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'payment_interest',
            field: 'payment_interest',
            label: 'Оплачено процентов, ₽',
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'payment_fines',
            field: 'payment_fines',
            label: 'Оплачено пени, ₽',
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'sum_total',
            field: 'sum_total',
            label: 'Общий долг, ₽',
            align: 'center',
            required: true,
            sortable: true
          }
        ],
        pagination: {
          sortBy: 'date',
          descending: false,
          page: 1,
          rowsPerPage: 0
        },

      },
      communications: {
        list: [],
        columns: [
          {
            name: 'channel',
            field: 'channel',
            label: this.$t('communications.labels.table.channel'),
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'date',
            field: 'contactedAt',
            format: val => getDateTime(val),
            label: this.$t('communications.labels.table.date'),
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'action',
            field: 'action',
            label: this.$t('communications.labels.table.action'),
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'status',
            field: 'status',
            label: this.$t('communications.labels.table.status'),
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'result',
            field: 'result',
            label: this.$t('communications.labels.table.result'),
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'comment',
            field: 'comment',
            label: this.$t('communications.labels.table.comment'),
            align: 'center',
            required: true,
            sortable: true
          },
          {
            name: 'operator',
            field: 'operator',
            format: val => val.fullName,
            label: this.$t('communications.labels.table.operator'),
            align: 'center',
            required: true,
            sortable: true
          }
        ],
        pagination: {
          sortBy: 'date',
          descending: true,
          page: 1,
          rowsPerPage: 0
        },
      },
      dialog: false,
      tab: 'accruals',
      current: null,
      loading: false,
      colorClass,
      pagination: {
        sortBy: 'date_start',
        descending: true,
        page: 1,
        rowsPerPage: 0
      },
      columns: [
        {
          name: 'doc_number',
          field: 'doc_number',
          label: '№ займа',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'date_start',
          field: 'date_start',
          label: 'Дата начала',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'date_end',
          field: 'date_end',
          label: 'Дата окончания',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'days',
          field: 'days',
          label: 'Срок',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'sum',
          field: 'sum',
          label: 'Сумма, ₽',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'date_closed',
          field: 'date_closed',
          label: 'Дата погашения',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'max_delay',
          field: 'max_delay',
          label: 'Просрочка дней',
          align: 'center',
          required: true,
          sortable: true
        },
        {
          name: 'dop_count',
          field: 'dop_count',
          label: 'Пролонгаций',
          align: 'center',
          required: true,
          sortable: true
        }
      ],
    }
  },
  watch: {
    dialog (v) {
      if (v === false) {
        this.unsetActive()
        this.current = null
      }
    }
  },
  computed: {
    data () {
      return this.$operatorWB.clients.currentLoansHistory
    },
    communicationsList () {
      return this.current ? this.communications.list.filter(item => {
        return item.productId === this.current.id
      }) : []
    }
  },
  methods: {
    truncate (value, maxLength) {
      if (!value) return ''
      if (value.length > maxLength) {
        value = value.substr(0, maxLength)
        value += '...'
      }
      return value
    },
    unsetActive () {
      const refs = Object.keys(this.$refs)
      refs && refs.forEach(item => this.$refs[item].$el.classList.remove('active'))
    },
    async getData () {
      if (!this.current) return
      this.$refs['row_' + this.current.id].$el.classList.add('active')
      this.loading = true
      const accruals = await api.crm.getLoanAccruals({ productId: this.current.id })
      const communications = await api.crm.getClientCommunications(this.$operatorWB.clients.current)
      this.accruals.list = accruals && accruals.data.list
      this.communications.list = communications && communications.data.communications
      this.loading = false
    },
    openInfo (row) {
      this.unsetActive()
      this.tab = 'accruals'
      this.accruals.list = []
      this.communications.list = []
      this.dialog = true
      this.current = row
      this.getData()
    },
    columnValue (col, row) {
      let value = col.value
      let channel = null
      switch (col.name) {
        case 'action':
          value = this.$t('communications.action.' + col.value)
          if (['autoDial', 'manualDial'].includes(col.value) && row.channel) {
            channel = row.channel
            const by = channel && Object.keys(row.channel)[0]
            const { variant } = channel[by]
            value = this.$t('communications.channel.' + variant)
          }
          break
        case 'status':
          value = this.$t('communications.status.' + col.value)
          break
        case 'result':
          value = ['smsToClient', 'emailToClient'].includes(row.status)
            ? row.status === 'smsToClient'
              ? ((col.value && this.$t('communications.sms.templates.' + col.value)) || '')
              : ((col.value && this.$t('communications.email.templates.' + col.value)) || '')
            : (col.value && this.$t('communications.result.' + col.value)) || ''
          break

        case 'channel':
          channel = col.value
          if (channel) {
            const by = channel && Object.keys(channel)[0]
            const { number, address, url, variant } = channel[by]
            value = channel
              ? number || address || url || this.$t('communications.channel.' + variant)
              : this.$t('communications.channel.unknown')
          } else {
            value = this.$t('communications.channel.unknown')
          }
          break

        case 'sum':
          value = money(col.value, true)
          break
        case 'date_start':
        case 'date_end':
        case 'date_closed':
          value = col.value && getShortDate(col.value)
          break
      }
      return value
    }

  }
}
</script>

<style lang="stylus">
  tr.active
    background-color $positive

  .loan-info
    height 745px !important

    .content
      min-height 595px

  /*overflow-y scroll*/
</style>
