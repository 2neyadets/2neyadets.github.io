import api from 'src/api'
import { Notify } from 'quasar'
import moment from 'moment/moment'

moment.locale('ru')

export default {
  name: 'LoanRedistributionService',
  data () {
    return {
      isDonorGroupsEmpty: false,
      isRecipientGroupsEmpty: false,
      loading: {
        toFormMethod: false,
        redistributeMethod: false
      },
      dataForTable: [],
      filters: {
        assigned: {
          yes: false,
          no: false
        },
        status: {
          hard: false,
          hardWithAgreement: false
        },
        portfolioLimit: {
          isLimited: true,
          limit: 450
        },
        groupLimit: {
          isLimited: false,
          limit: null
        },
        payments: {
          isPaid: {
            yes: false,
            no: false
          },
          oldestDate: '',
        },
        contactsWithClient: {
          isContacted: {
            yes: false,
            no: false
          },
          oldestDate: '',
        },
        promises: {
          isPromised: {
            yes: false,
            no: false
          },
          oldestDate: '',
        },
        delay: {
          min: 1,
          max: 60
        },
        debt: {
          min: 1,
          max: 150000
        },
        donorGroupsArrayOfObjects: [],
        recipientGroupsArrayOfObjects: [],
        trash: {
          all: false,
          auto: false,
          forced: false
        },
        selectionMethodObj: {
          label: 'Случайным образом',
          value: 'withoutSort'
        },
        productTypeModel: {
          label: 'Все',
          value: 'all'
        }
      }
    }
  },
  created () {
    const todayDate = moment().format('YYYY/MM/DD')
    this.filters.payments.oldestDate = todayDate
    this.filters.contactsWithClient.oldestDate = todayDate
    this.filters.promises.oldestDate = todayDate
  },
  computed: {
    isAssignedObj () {
      return (this.filters.assigned.yes || this.filters.assigned.no)
        ? this.filters.assigned.yes ? { isAssigned: true } : { isAssigned: false }
        : {}
    },
    statusObj () {
      return (this.filters.status.hard || this.filters.status.hardWithAgreement)
        ? (this.filters.status.hard) ? { status: 'hard' } : { status: 'hardWithAgreement' }
        : {}
    },
    totalContractsInGroupObj () {
      return this.filters.portfolioLimit.isLimited ? { totalContractsInGroup: this.filters.portfolioLimit.limit } : {}
    },
    assignedContractsLimitObj () {
      return this.filters.groupLimit.isLimited ? { assignedContractsLimit: this.filters.groupLimit.limit } : {}
    },
    paymentsObj () {
      return (this.filters.payments.isPaid.yes || this.filters.payments.isPaid.no)
        ? this.filters.payments.isPaid.yes
          ? {
            payments: {
              isPaid: true,
              oldestDate: this.filters.payments.oldestDate
            }
          }
          : {
            payments: {
              isPaid: false,
              oldestDate: this.filters.payments.oldestDate
            }
          }
        : {}
    },
    contactsWithClientObj () {
      return (this.filters.contactsWithClient.isContacted.yes || this.filters.contactsWithClient.isContacted.no)
        ? this.filters.contactsWithClient.isContacted.yes
          ? {
            contactsWithClient: {
              isContacted: true,
              oldestDate: this.filters.contactsWithClient.oldestDate
            }
          }
          : {
            contactsWithClient: {
              isContacted: false,
              oldestDate: this.filters.contactsWithClient.oldestDate
            }
          }
        : {}
    },
    promisesObj () {
      return (this.filters.promises.isPromised.yes || this.filters.promises.isPromised.no)
        ? this.filters.promises.isPromised.yes
          ? {
            promises: {
              isPromised: true,
              oldestDate: this.filters.promises.oldestDate
            }
          }
          : {
            promises: {
              isPromised: false,
              oldestDate: this.filters.promises.oldestDate
            }
          }
        : {}
    },
    trashAllocationMethodObj () {
      if (this.filters.trash.all || this.filters.trash.auto || this.filters.trash.forced) {
        if (this.filters.trash.all) {
          return { trashAllocationMethod: 'all' }
        } else if (this.filters.trash.auto) {
          return { trashAllocationMethod: 'auto' }
        } else {
          return { trashAllocationMethod: 'forced' }
        }
      } else {
        return {}
      }
    },
    donorGroupIds () {
      return (this.filters.donorGroupsArrayOfObjects && this.filters.donorGroupsArrayOfObjects.length)
        ? this.filters.donorGroupsArrayOfObjects.map(obj => obj.value)
        : []
    },
    recipientGroupIds () {
      return (this.filters.recipientGroupsArrayOfObjects && this.filters.recipientGroupsArrayOfObjects.length)
        ? this.filters.recipientGroupsArrayOfObjects.map(obj => obj.value)
        : []
    },
    selectionMethod () {
      // eslint-disable-next-line no-prototype-builtins
      return this.filters.selectionMethodObj.hasOwnProperty('value') ? this.filters.selectionMethodObj.value : ''
    },
    productTypeObj () {
      // eslint-disable-next-line no-prototype-builtins
      return (this.filters.productTypeModel.hasOwnProperty('value') && this.filters.productTypeModel.value !== 'all')
        ? { product: this.filters.productTypeModel.value }
        : {}
    },
    approveArray () {
      return this.dataForTable.map(item => Object.assign({}, {
        productId: item.id,
        groupId: item.newGroupId
      }))
    }
  },
  methods: {
    async getPreview () {
      if (this.donorGroupIds.length && this.recipientGroupIds.length) {
        this.isDonorGroupsEmpty = false
        this.isRecipientGroupsEmpty = false
        this.loading.toFormMethod = true
        setTimeout(async () => {
          const res = await api.crm.getGroupsLoans(this.fillObjBeforeSend())
          this.loading.toFormMethod = false
          if (res) {
            this.dataForTable = res
            Notify.create({
              message: this.$app.$t('managerWBNotify.loanRedistributionFetch.dataReceived'),
              color: 'positive',
              position: 'bottom',
              icon: 'check_circle_outline'
            })
            if (res.length === 0) {
              Notify.create({
                message: this.$app.$t('managerWBNotify.loanRedistributionFetch.noMatches'),
                color: 'warning',
                textColor: 'black',
                position: 'bottom',
                icon: 'warning'
              })
            }
          }
        }, 1500)
      } else {
        if (!this.donorGroupIds.length) this.isDonorGroupsEmpty = true
        if (!this.recipientGroupIds.length) this.isRecipientGroupsEmpty = true
      }
    },
    async sayApprove () {
      if (this.dataForTable.length) {
        this.loading.redistributeMethod = true
        setTimeout(async () => {
          const res = await api.crm.reassignLoansToGroups(this.approveArray)
          this.loading.redistributeMethod = false
          if (res) {
            this.dataForTable = []
            Notify.create({
              message: this.$app.$t('managerWBNotify.loanRedistributionFetch.debtsRedistributed'),
              color: 'positive',
              position: 'bottom',
              icon: 'check_circle_outline'
            })
          }
        }, 1500)
      }
    },
    switchBetweenDonorAndRecipient () {
      const donor = this.filters.donorGroupsArrayOfObjects
      this.filters.donorGroupsArrayOfObjects = this.filters.recipientGroupsArrayOfObjects
      this.filters.recipientGroupsArrayOfObjects = donor
    },
    fillObjBeforeSend () {
      return {
        filters: {
          delay: {
            min: this.filters.delay.min,
            max: this.filters.delay.max
          },
          debt: {
            min: this.filters.debt.min,
            max: this.filters.debt.max
          },
          ...this.isAssignedObj,
          ...this.statusObj,
          ...this.paymentsObj,
          ...this.contactsWithClientObj,
          ...this.promisesObj,
          ...this.trashAllocationMethodObj,
          ...this.productTypeObj
        },
        donorGroupIds: this.donorGroupIds,
        recipientGroupIds: this.recipientGroupIds,
        selectionMethod: this.selectionMethod,
        ...this.totalContractsInGroupObj,
        ...this.assignedContractsLimitObj,
      }
    }
  },
  watch: {}
}
