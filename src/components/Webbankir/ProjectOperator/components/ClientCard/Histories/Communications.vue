<template lang="pug">

  HistoryBlock
    template(slot="title-left")
      span {{$t('communications.histories.titles.comments')}}

    template(slot="title-right")
      .flex.items-center(@mouseover="hoverTable")
        .comments__filter-title Скрыть:
        q-checkbox.comments__filter-checkbox(
          v-for="(item, index) in filters"
          v-model="filter"
          color="WB-primary"
          :key="index"
          :val="item"
          :label="$t('communications.filters.' + item)"
          dense
          :dark="false"
        )

    q-table(
      @mouseover.native="hoverTable"
      :columns="columns"
      :data="data"
      :pagination.sync="pagination"
      row-key="id"
      color="WB-secondary"
      hide-bottom
      separator="cell"
      :dark="false"
    )
      template.fixed-body(slot="body" slot-scope="props")
        q-tr(
          :props="props"
          :data-prop="props"
          :class="rowClass(props)"
          @mouseover.native="idOfHoveredRow = props.row.id"
          @mouseleave.native="idOfHoveredRow = 0"
        )
          q-td(v-for="col in props.cols" :key="col.name" :props="props")
            template(v-if="col.name !== 'comment'")
              template(v-if="col.name === 'channel'")
                .parent
                  span.q-mr-lg(v-html="columnValue(col, props.row)")
                  template(v-if="isHoveredRow(props.row.id) && props.row.channel && props.row.channel.phone && props.row.channel.phone.number")
                    q-btn.child(
                      @click="callStart(props.row.channel.phone.number)"
                      icon="call"
                      :color="'positive'"
                      size="7px"
                      round
                      dense
                    )
              template(v-else-if="col.name === 'status' && $operatorWB.layout.isApplicationCard && changesForCommunication(props.row.id)")
                .flex.justify-center.items-start
                  span(v-html="columnValue(col, props.row)")
                  q-icon.font-size-medium.q-ml-sm(name="account_box" color="warning")
                    q-tooltip(anchor="top middle" self="bottom middle")
                      span В этой коммуникации были изменены анкетные данные клиента:
                      pre {{changesForCommunication(props.row.id)}}
              template(v-else)
                span(v-html="columnValue(col, props.row)")
            template(v-else)
              .parent
                span(
                  v-if="col.value && col.value.length > 60"
                  @mouseover="showMenu(`myToolTip${props.row.id}`, 'text', props.row)"
                  @mouseout="hideMenu(`myToolTip${props.row.id}`, 'text', props.row)"
                  :class="rowClass(props).editable ? 'q-mr-lg' : ''"
                ) {{truncate(col.value, 60)}}
                  q-popup-proxy(
                    :ref="`myToolTip${props.row.id}`"
                    @mouseover="showMenu(`myToolTip${props.row.id}`, 'menu', props.row)"
                    @mouseout="hideMenu(`myToolTip${props.row.id}`, 'menu', props.row)"
                    transition-show="jump-down"
                    transition-hide="jump-up"
                    anchor="top middle"
                    self="bottom middle"
                    content-class="bg-transparent no-shadow"
                    max-width="400px"
                  )
                    .flex.justify-center.items-center
                      .full-message.q-pa-lg.text-justify.shadow-2.brs5 {{col.value}}
                      .triangle-pointer
                span(v-else :class="rowClass(props).editable ? 'q-mr-lg' : ''") {{col.value}}
                q-btn.child(
                  v-if="isHoveredRow(props.row.id) && rowClass(props).editable"
                  @click.native="() => editingCommunication(props)"
                  icon="edit"
                  color="info"
                  size="7px"
                  round
                  dense
                )

</template>

<script>
import { getDateTime } from 'src/utils/helpers'
import HistoryBlock from './HistoryBlock'
import { i18n } from 'src/boot/i18n'
import { date } from 'quasar'

const columns = [
  {
    name: 'channel',
    field: 'channel',
    label: i18n.t('communications.labels.table.channel'),
    align: 'center',
    required: true,
    sortable: true
  },
  {
    name: 'date',
    field: 'contactedAt',
    label: i18n.t('communications.labels.table.date'),
    align: 'center',
    required: true,
    sortable: true
  },
  {
    name: 'action',
    field: 'action',
    label: i18n.t('communications.labels.table.action'),
    align: 'center',
    required: true,
    sortable: true
  },
  {
    name: 'status',
    field: 'status',
    label: i18n.t('communications.labels.table.status'),
    align: 'center',
    required: true,
    sortable: true
  },
  {
    name: 'result',
    field: 'result',
    label: i18n.t('communications.labels.table.result'),
    align: 'center',
    required: true,
    sortable: true
  },
  {
    name: 'comment',
    field: 'comment',
    label: i18n.t('communications.labels.table.comment'),
    align: 'center',
    required: true,
    sortable: true
  },
  {
    name: 'operator',
    field: 'operator',
    label: i18n.t('communications.labels.table.operator'),
    align: 'center',
    required: true,
    sortable: true
  }
]

export default {
  name: 'CommunicationHistory',
  components: {
    HistoryBlock
  },
  data () {
    return {
      canUpdate: false,
      idOfHoveredRow: 0,
      title: this.$t('communications.histories.titles.comments'),
      filters: ['sms', 'email', 'site', 'noResult'],
      filter: [],
      pagination: {
        sortBy: 'date',
        descending: true,
        page: 1,
        rowsPerPage: 0
      },
      columns
    }
  },
  updated () {
    if (this.canUpdate) {
      this.canUpdate = false
      this.update()
    }
  },
  computed: {
    edited () {
      return this.$operatorWB.communication.edited
    },
    client () {
      return this.$operatorWB.clients.currentClient
    },
    loan () {
      return this.$operatorWB.loans.currentLoan
    },
    data () {
      let list = Array.from(this.client.communications || [])
      if (this.filter.includes('sms')) {
        list = list.filter(item => {
          return !(item.channel && item.channel.phone && item.channel.phone.variant === 'sms') &&
            item.result !== 'restoreAccessSms' &&
            item.action !== 'sendingSms'
        })
      }
      if (this.filter.includes('email')) {
        list = list.filter(item => {
          return !(item.channel && item.channel.email && item.channel.email.variant === 'email')
        })
      }
      if (this.filter.includes('noResult')) {
        list = list.filter(item => {
          return item.result !== 'contactWithoutResult' && item.result !== 'withoutClientContact'
        })
      }
      return list
    },
    changesForApplication () {
      return this.$operatorWB.applications.get('item.changes') || []
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
    isCurrentLoanOrApplication (row) {
      return this.$operatorWB.layout.isApplicationCard
        ? row.applicationId && this.$operatorWB.applications.get('item.id') && row.applicationId === this.$operatorWB.applications.get('item.id')
        : row.productId && this.$operatorWB.loans.current && row.productId === this.$operatorWB.loans.current
    },
    activeRow (row) {
      return row.id === this.$operatorWB.communication.form.id
    },
    editingCommunication (props) {
      if (!this.$operatorWB.user.operatorCanEditCommunication(props.row.id)) return false
      const classes = this.rowClass(props)
      if (!classes.editable) return false
      if (this.edited) {
        this.$operatorWB.communication.edited = null
      } else {
        this.$operatorWB.communication.edited = props.row
      }
    },
    rowClass (props) {
      let editable = this.$operatorWB.user.operatorCanEditCommunication(props.row.id)
      if (props.row.result === 'restoreAccessSms' || props.row.result === 'amnesty') editable = false
      if (props.row.action === 'manualDial' &&
        (props.row.channel && props.row.channel.phone && props.row.channel.phone.variant === 'sms')) {
        editable = false
      }
      if (props.row.action === 'sendingEmail' || props.row.action === 'sendingSms') editable = false

      return {
        editable,
        active: this.activeRow(props.row),
        current: this.isCurrentLoanOrApplication(props.row)
      }
    },
    toggleSize () {
      if (this.$operatorWB.layout.size === 'half') {
        this.$operatorWB.layout.set('size', 'full')
      } else {
        this.$operatorWB.layout.set('size', 'half')
      }
    },
    columnValue (col, row) {
      let value = col.value
      let channel = null
      switch (col.name) {
        case 'channel':
          channel = col.value
          if (channel) {
            const by = (Object.keys(channel).includes('phone') && channel.phone !== null)
              ? 'phone'
              : channel[Object.keys(channel)[0]] !== null
                ? Object.keys(channel)[0]
                : channel[Object.keys(channel)[1]] !== null
                  ? Object.keys(channel)[1]
                  : Object.keys(channel)[2]
            const { number, address, url, variant } = channel[by]
            value = channel
              ? number || address || url || this.$t('communications.channel.' + variant)
              : this.$t('communications.channel.unknown')
          } else {
            value = this.$t('communications.channel.unknown')
          }
          break
        case 'action':
          value = this.$t('communications.action.' + col.value)
          if (['autoDial', 'manualDial'].includes(col.value) && row.channel) {
            channel = row.channel
            const by = Object.keys(channel).includes('phone') ? 'phone' : Object.keys(channel)[0]
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
            : row.reason
              ? (col.value && `${this.$t('communications.result.' + col.value)} (${this.$t('communications.reason.' + row.reason)})`)
              : (col.value && this.$t('communications.result.' + col.value)) || ''
          break
        case 'date':
          value = getDateTime(col.value)
          break
        case 'operator':
          // eslint-disable-next-line no-case-declarations
          const op = col.value
          value = op && (op.fullName || (op.department && op.department.name))
          break

        default:
      }
      return value
    },
    isHoveredRow (id) {
      return this.idOfHoveredRow === id
    },
    callStart (phoneNumber) {
      const additional = {
        contactedAt: date.formatDate(Date.now(), 'YYYY-MM-DDTHH:mm:ssZZ'),
        action: 'manualDial',
        channel: {
          phone: {
            variant: 'outgoingManualCall',
            number: phoneNumber
          }
        }
      }
      const form = this.$operatorWB.communication.form
      this.$operatorWB.communication.form = Object.assign({}, form, additional)
      this.$operatorWB.dialer.sayMake({
        client_id: this.$operatorWB.clients.current,
        loan_id: this.$operatorWB.loans.current,
        phone: phoneNumber
      })
    },
    showMenu (menuName, source, row) {
      const componentsArr = this.$refs[menuName]
      row.showing = true
      if (source !== 'menu') {
        setTimeout(() => {
          if (row.showing && componentsArr !== undefined && componentsArr.length) {
            this.deleteUnusedToolTips(menuName)
            this.$refs[menuName][0].show()
          }
        }, 10)
      }
    },
    hideMenu (menuName, source, row) {
      const componentsArr = this.$refs[menuName]
      row.showing = false
      setTimeout(() => {
        if (!row.showing && componentsArr !== undefined && componentsArr.length) {
          this.deleteUnusedToolTips(menuName)
          this.$refs[menuName][0].hide()
        }
      }, 10)
    },
    deleteUnusedToolTips (menuName) {
      if (this.$refs[menuName].length > 1) {
        this.$refs[menuName].splice(0, this.$refs[menuName].length - 1)
      }
    },
    update () {
      this.columns = []
      this.$nextTick(function () {
        this.columns = columns
      })
    },
    hoverTable () {
      if (!this.canUpdate) this.canUpdate = true
    },
    changesForCommunication (communicationId) {
      const change = this.changesForApplication.find(change => change.communicationId === communicationId)
      return (change && change.changes.profile) || undefined
    }
  }
}
</script>

<style scoped lang="stylus">
  .section
    position relative

    &.positioned
      position absolute
      top 100px
      left 100px
      width 800px
      box-shadow 0 0 15px #333

  .container
    overflow-y auto
    height 100%

  q-table
    border-spacing 0
    width 100%

  td
    & + td
      border-left 1px solid #eee

  tr.current
    background-color: rgba(orange, .1)

  tr.editable
    cursor: pointer

  tr.editable:hover, tr.active
    background-color: rgba(green, .5)

  th
    height 0
    line-height 0
    padding-top 0
    padding-bottom 0
    color transparent
    border none
    white-space nowrap

    div
      position absolute
      background transparent
      color #fff
      padding 9px 25px
      top 0
      margin-left -25px
      line-height normal
      border-left 1px solid #800

    &:first-child
      div
        border none

  .parent
    position relative

  .child
    position absolute
    top -2px
    right -5px

  .full-message
    background #575657 !important
    color #d8d8d8 !important

  .triangle-pointer
    content ''
    border-left 4px solid transparent
    border-right 4px solid transparent
    border-top 4px solid $WB-primary-color
</style>
