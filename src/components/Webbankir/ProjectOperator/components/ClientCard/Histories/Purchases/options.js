import { date } from 'quasar'

export default {
  pagination: {
    sortBy: 'date',
    descending: true,
    page: 1,
    rowsPerPage: 0
  },
  columns: [
    {
      name: 'index',
      field: row => row.__index + 1,
      label: '№',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'group',
      field: row => row.group,
      label: 'Группа',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'date',
      field: row => date.formatDate(row.purchasedAt, 'DD.MM.YYYY'),
      label: 'Дата покупки',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'summ_period',
      field: row => 'summPeriod',
      label: 'Сумма / Срок займа',
      align: 'center',
      required: true,
      sortable: true
    },
    {
      name: 'next_payment',
      field: row => 'xxxx',
      label: 'Ближайший платеж',
      align: 'left',
      required: true,
      sortable: true
    },
    {
      name: 'paid',
      field: row => 'yyyy',
      label: 'Погашено',
      align: 'center',
      required: true
    },
    {
      name: 'shop_name',
      field: row => row.shop.name,
      label: 'Продавец',
      align: 'center',
      required: true
    },
    {
      name: 'shop_address',
      field: row => row.shop.address,
      label: 'Адрес магазина',
      align: 'center',
      required: true
    },
    {
      name: 'status',
      field: 'status',
      label: 'Статус займа',
      align: 'center',
      required: true
    },
    {
      name: 'products',
      field: row => row.products,
      label: 'Список товаров',
      align: 'center',
      required: true
    },
  ]
}
