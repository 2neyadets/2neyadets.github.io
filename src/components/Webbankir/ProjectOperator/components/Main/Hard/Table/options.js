import { getDateTime, getShortDate, money } from 'src/utils/helpers'
import { i18n } from 'src/boot/i18n'

export default {
  columns: [
    {
      name: 'contract',
      required: false,
      label: i18n.t('hard.table.columns.contract'),
      align: 'left',
      field: 'contract',
      sortable: true,
      type: 'string',
      search: 'first'
    },
    {
      name: 'signDate',
      required: false,
      label: i18n.t('hard.table.columns.signDate'),
      format: val => getDateTime(val),
      align: 'center',
      field: 'signDate',
      sortable: true,
      type: 'datetime'
    },
    {
      name: 'timezone',
      required: false,
      label: i18n.t('hard.table.columns.timezone'),
      align: 'left',
      field: 'timezone',
      sortable: true,
      style: 'width: 40px',
      type: 'select'
    },
    {
      name: 'city',
      required: false,
      label: i18n.t('hard.table.columns.city'),
      align: 'left',
      field: 'city',
      sortable: true,
      type: 'text'
    },
    {
      name: 'region',
      required: false,
      label: i18n.t('hard.table.columns.region'),
      align: 'left',
      field: 'region',
      sortable: true,
      type: 'select'
    },
    {
      name: 'fullName',
      required: false,
      label: i18n.t('hard.table.columns.fullName'),
      align: 'left',
      field: 'fullName',
      sortable: true,
      type: 'string'
    },
    {
      name: 'birthDate',
      required: false,
      label: i18n.t('hard.table.columns.birthDay'),
      format: val => getShortDate(val),
      align: 'center',
      field: 'birthDate',
      sortable: true,
      type: 'date'
    },
    {
      name: 'duration',
      required: false,
      label: i18n.t('hard.table.columns.duration'),
      align: 'center',
      field: 'duration',
      sortable: true,
      type: 'select'
    },
    {
      name: 'amount',
      required: false,
      label: i18n.t('hard.table.columns.summ'),
      format: val => val ? money(val) : '',
      align: 'right',
      field: 'amount',
      sortable: true,
      type: 'range'
    },
    {
      name: 'summLeft',
      required: false,
      label: i18n.t('hard.table.columns.summLeft'),
      format: val => val ? money(val) : '',
      align: 'right',
      field: 'summLeft',
      sortable: true,
      type: 'range'
    },
    {
      name: 'summPercent',
      required: false,
      label: i18n.t('hard.table.columns.summPercent'),
      format: val => `${Number(val).toFixed(0)} %`,
      align: 'right',
      field: 'summPercent',
      sortable: true,
      type: 'range'
    },
    {
      name: 'summPenalty',
      required: false,
      label: i18n.t('hard.table.columns.summPenalty'),
      format: val => val ? money(val) : '',
      align: 'right',
      field: 'summPenalty',
      sortable: true,
      type: 'range'
    },
    {
      name: 'summTotal',
      required: false,
      label: i18n.t('hard.table.columns.summTotal'),
      format: val => val ? money(val) : '',
      align: 'right',
      field: 'summTotal',
      sortable: true,
      type: 'range'
    },
    {
      name: 'daysDelay',
      required: false,
      label: i18n.t('hard.table.columns.daysDelay'),
      align: 'center',
      field: 'daysDelay',
      sortable: true,
      type: 'range'
    },
    {
      name: 'phone',
      required: false,
      label: i18n.t('hard.table.columns.phone'),
      align: 'center',
      field: 'phone',
      sortable: true,
      type: 'string'
    },
    {
      name: 'openedAt',
      required: false,
      label: i18n.t('hard.table.columns.openedAt'),
      format: val => getDateTime(val),
      align: 'center',
      field: 'openedAt',
      sortable: true,
      type: 'datetime'
    },
    {
      name: 'lastContact',
      required: false,
      label: i18n.t('hard.table.columns.lastContact'),
      format: val => getDateTime(val),
      align: 'center',
      field: 'lastContact',
      sortable: true,
      type: 'datetime'
    },
    {
      name: 'lastPayDate',
      required: false,
      label: i18n.t('hard.table.columns.lastPayDate'),
      format: val => getDateTime(val),
      align: 'center',
      field: 'lastPayDate',
      sortable: true,
      type: 'datetime'
    },
    {
      name: 'lastPaySumm',
      required: false,
      label: i18n.t('hard.table.columns.lastPaySumm'),
      format: val => val ? money(val) : '',
      align: 'right',
      field: 'lastPaySumm',
      sortable: true,
      type: 'range'
    },
    {
      name: 'paymentsAmount',
      required: false,
      label: i18n.t('hard.table.columns.paymentsAmount'),
      align: 'right',
      field: 'paymentsAmount',
      sortable: true,
      type: 'select'
    },
    {
      name: 'suppAssignDate',
      required: false,
      label: i18n.t('hard.table.columns.suppAssignDate'),
      format: val => getDateTime(val),
      align: 'center',
      field: 'suppAssignDate',
      sortable: true,
      type: 'datetime'
    },
    {
      name: 'suppSendDate',
      required: false,
      label: i18n.t('hard.table.columns.suppSendDate'),
      format: val => getDateTime(val),
      align: 'center',
      field: 'suppSendDate',
      sortable: true,
      type: 'datetime'
    },
    {
      name: 'suppPaymantDate',
      required: false,
      label: i18n.t('hard.table.columns.suppPaymantDate'),
      format: val => getDateTime(val),
      align: 'center',
      field: 'suppPaymantDate',
      sortable: true,
      type: 'datetime'
    },
    {
      name: 'promiseDate',
      required: false,
      label: i18n.t('hard.table.columns.promiseDate'),
      format: val => getShortDate(val),
      align: 'center',
      field: 'promiseDate',
      sortable: true,
      type: 'date'
    },
    {
      name: 'promiseSumm',
      required: false,
      label: i18n.t('hard.table.columns.promiseSumm'),
      format: val => val ? money(val) : '',
      align: 'right',
      field: 'promiseSumm',
      sortable: true,
      type: 'range'
    },
    {
      name: 'numberOfLoans',
      required: false,
      label: i18n.t('hard.table.columns.numberOfLoans'),
      align: 'center',
      field: 'numberOfLoans',
      sortable: true,
      type: 'select'
    },
    {
      name: 'lastLogin',
      required: false,
      label: i18n.t('hard.table.columns.lastLogin'),
      format: val => getDateTime(val),
      align: 'center',
      field: 'lastLogin',
      sortable: true,
      type: 'datetime'
    },
    {
      name: 'secret',
      required: false,
      label: i18n.t('hard.table.columns.secret'),
      align: 'left',
      field: 'secret',
      sortable: true,
      type: 'string'
    },
    {
      name: 'product',
      required: false,
      label: i18n.t('hard.table.columns.product'),
      align: 'center',
      field: 'product',
      sortable: true,
      type: 'select'
    },
    {
      name: 'portfolio',
      required: false,
      label: i18n.t('hard.table.columns.portfolio'),
      align: 'center',
      field: 'portfolio',
      sortable: true,
      type: 'select'
    },
    {
      name: 'lastCommunicationStatus',
      required: false,
      label: i18n.t('hard.table.columns.lastCommunicationStatus'),
      align: 'center',
      field: 'lastCommunicationStatus',
      sortable: true,
      type: 'select'
    },
    {
      name: 'lastCommunicationResult',
      required: false,
      label: i18n.t('hard.table.columns.lastCommunicationResult'),
      align: 'center',
      field: 'lastCommunicationResult',
      sortable: true,
      type: 'select'
    },
    {
      name: 'lastCommunicationDepartment',
      required: false,
      label: i18n.t('hard.table.columns.department'),
      align: 'center',
      field: 'lastCommunicationDepartment',
      sortable: true,
      type: 'select'
    },
    {
      name: 'prolongations',
      required: false,
      label: i18n.t('hard.table.columns.prolongations'),
      align: 'center',
      field: 'prolongations',
      sortable: true,
      type: 'select'
    }
  ],
  visibleColumns: [
    'fullName',
    'birthDate',
    'timeZone',
    'contract',
    'duration',
    'amount',
    'summTotal',
    'daysDelay',
    'numberOfLoans',
    'product',
    'lastProcessingDate'
  ],
  pagination: {
    sortBy: null,
    descending: false,
    page: 1,
    rowsPerPage: 25
  }
}
