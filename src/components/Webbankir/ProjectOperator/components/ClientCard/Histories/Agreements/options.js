import { date } from 'quasar'
import { getShortDate } from 'src/utils/helpers'

export default {
  pagination: {
    sortBy: 'createdAt',
    descending: true,
    page: 1,
    rowsPerPage: 0
  },
  columns: [
    {
      name: 'type',
      field: 'type',
      label: 'Тип',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'createdAt',
      field: 'createdAt',
      label: 'Создание',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'enteredIntoForceAt',
      field: 'enteredIntoForceAt',
      label: 'Вступило в силу',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'period',
      field: 'period',
      label: 'Срок действия',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'expiredAt',
      field: 'expiredAt',
      label: 'Окончание',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'signedAt',
      field: 'signedAt',
      label: 'Подписание',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'obligatoryPayment',
      field: 'obligatoryPayment',
      label: 'К оплате, ₽',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'paidForAt',
      field: row => getShortDate(date.addToDate(row.createdAt, { days: row.type === 'installment' ? 3 : 1 })),
      label: 'Оплатить до',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'paymentAmount',
      field: 'paymentAmount',
      label: 'Оплачено, ₽',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'paymentAt',
      field: 'paymentAt',
      label: 'Дата оплаты',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'status',
      field: 'status',
      label: 'Статус',
      align: 'center',
      required: true,
      sortable: true
    },
  ]
}
