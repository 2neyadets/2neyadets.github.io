import api from 'src/api'
import { Notify } from 'quasar'

import { emailScheme, smsScheme } from 'src/utils/mappers'

export default {
  name: 'MailingService',
  data () {
    return {
      isGroupIdsEmpty: false,
      loadings: {
        preview: false,
        sending: false,
      },
      filters: {
        product: 'all',
        status: {
          hard: true,
          hardWithAgreement: false
        },
        isPromised: {
          yes: false,
          no: false
        },
        delay: {
          min: 1,
          max: 60
        },
        debt: {
          min: 1,
          max: 150000
        },
        groupsArrayOfObjects: [],
        messagesType: 'sms',
      },
      communicationResult: 'blank',
      tableData: [],
    }
  },
  created () {
  },
  computed: {
    currentMailingScheme () {
      return this.filters.messagesType === 'sms'
        ? smsScheme(this.$managerWB.user.permissionsObj)
        : emailScheme(this.$managerWB.user.permissionsObj)
    },
    templatesOptions () {
      return this.currentMailingScheme.map(item => {
        return {
          value: item,
          label: this.$app.$t(`mailing.${this.filters.messagesType}.templates.${item}`),
          disable: false,
        }
      })
    },
    groupIds () {
      return (this.filters.groupsArrayOfObjects && this.filters.groupsArrayOfObjects.length)
        ? this.filters.groupsArrayOfObjects.map(obj => obj.value)
        : []
    },
  },
  methods: {
    async getPreview () {
      if (this.groupIds.length) {
        this.isGroupIdsEmpty = false
        this.loadings.preview = true
        setTimeout(async () => {
          const res = await api.crm.getClientsForMailing(this.fillObjBeforeSend(this.filters))
          res.forEach(item => { item.groupName = this.filters.groupsArrayOfObjects[0].label })
          this.loadings.preview = false
          if (res) {
            this.tableData = res
            Notify.create({
              message: 'Данные для рассылки получены',
              color: 'positive',
              position: 'bottom',
              icon: 'check_circle_outline'
            })
            if (res.length === 0) {
              Notify.create({
                message: 'Полученный массив пуст (не найдено совпадений по применённым фильтрам)',
                color: 'warning',
                textColor: 'black',
                position: 'bottom',
                icon: 'warning'
              })
            }
          }
        }, 1200)
      } else {
        this.isGroupIdsEmpty = true
      }
    },
    async sendMessages () {
      if (this.tableData.length) {
        this.loadings.sending = true
        setTimeout(async () => {
          const res = await api.crm.doMailing({
            communicationStatus: this.filters.messagesType === 'sms'
              ? 'smsToClient'
              : 'emailToClient',
            communicationResult: this.communicationResult,
            candidates: this.tableData.map(item => ({ clientId: item.clientId, productId: item.productId, dealId: item.dealId }))
          })
          this.loadings.sending = false
          if (res) {
            this.tableData = []
            Notify.create({
              message: 'Рассылка успешно завершена',
              color: 'positive',
              position: 'bottom',
              icon: 'check_circle_outline'
            })
          }
        }, 2200)
      }
    },
    fillObjBeforeSend (filters) {
      const { isPromised, status, groupsArrayOfObjects, messagesType, ...data } = filters
      if (data.product === 'all') delete data.product
      return {
        ...data,
        ...(isPromised.yes || isPromised.no)
          ? isPromised.yes
            ? { isPromised: true }
            : { isPromised: false }
          : {},
        ...(status.hard || status.hardWithAgreement)
          ? (status.hard)
            ? { status: 'hard' }
            : { status: 'hardWithAgreement' }
          : {},
        ...{ groupIds: this.groupIds },
      }
    }
  },
  watch: {
    tableData (v) {
      if (v.length === 0) this.communicationResult = 'blank'
    }
  }
}
