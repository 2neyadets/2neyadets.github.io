import { money } from 'src/utils/helpers'

export default {
  columns: [
    {
      name: 'name',
      label: 'Сотрудник',
      field: row => `${row.fullName} (${row.groupName})`,
      sortable: true,
      align: 'left'
    },
    {
      name: 'amount_0',
      label: 'сборы',
      field: row => row.values[0].value.amount,
      format: val => money(val),
      sortable: true,
      align: 'center'
    },
    {
      name: 'rating_0',
      label: 'рейтинг',
      field: row => row.values[0].value.rating,
      sortable: true,
      align: 'center'
    },
    {
      name: 'amount_1',
      label: 'сборы',
      field: row => row.values[1].value.amount,
      format: val => money(val),
      sortable: true,
      align: 'center'
    },
    {
      name: 'rating_1',
      label: 'рейтинг',
      field: row => row.values[1].value.rating,
      sortable: true,
      align: 'center'
    },
    {
      name: 'amount_2',
      label: 'сборы',
      field: row => row.values[2].value.amount,
      format: val => money(val),
      sortable: true,
      align: 'center'
    },
    {
      name: 'rating_2',
      label: 'рейтинг',
      field: row => row.values[2].value.rating,
      sortable: true,
      align: 'center'
    },
    {
      name: 'amount_3',
      label: 'сборы',
      field: row => row.values[3].value.amount,
      format: val => money(val),
      sortable: true,
      align: 'center'
    },
    {
      name: 'rating_3',
      label: 'рейтинг',
      field: row => row.values[3].value.rating,
      sortable: true,
      align: 'center'
    },
    {
      name: 'amount_4',
      label: 'сборы',
      field: row => row.values[4].value.amount,
      format: val => money(val),
      sortable: true,
      align: 'center'
    },
    {
      name: 'rating_4',
      label: 'рейтинг',
      field: row => row.values[4].value.rating,
      sortable: true,
      align: 'center'
    },

  ],
  pagination: {
    page: 1,
    rowsPerPage: 0,
    sortBy: 'name'
  }
}
