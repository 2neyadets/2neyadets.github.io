import { i18n } from 'src/boot/i18n'
import { getShortDate, money } from 'src/utils/helpers'

export default {
  columns: [
    {
      name: 'lastDayOfPayment',
      field: 'lastDayOfPayment',
      format: val => getShortDate(val),
      required: true,
      align: 'center',
      label: i18n.t('loans.schedule.header.lastDayOfPayment')
    },
    {
      name: 'amountBySchedule',
      field: 'amountBySchedule',
      format: val => money(val, true),
      required: true,
      align: 'center',
      label: i18n.t('loans.schedule.header.amountBySchedule')
    },
    {
      name: 'amountToPay',
      field: 'amountToPay',
      format: val => money(val, true),
      required: true,
      label: i18n.t('loans.schedule.header.amountToPay')
    },
    {
      name: 'paidAmount',
      field: 'paidAmount',
      format: val => money(val, true),
      required: true,
      label: i18n.t('loans.schedule.header.paidAmount')
    },
    {
      name: 'status',
      field: row => i18n.t('loans.schedule.status.' + row.status) + (row.status === 'delayed' ? ' до ' + getShortDate(row.delayedUntil) : ''),
      align: 'center',
      required: true,
      label: i18n.t('loans.schedule.header.status')
    },
  ],
  pagination: {
    sortBy: 'lastDayOfPayment',
    descending: false,
    page: 1,
    rowsPerPage: 6
  },

}
