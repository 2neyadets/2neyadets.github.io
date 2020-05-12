import { getDateTime, money } from 'src/utils/helpers'

export default {
  columns: [
    {
      name: 'name',
      label: 'ФИО',
      align: 'left',
      field: 'name',
      sortable: true,
      type: 'text'
    },
    {
      name: 'date',
      label: 'Дата',
      align: 'center',
      field: 'date',
      format: val => getDateTime(val),
      sortable: true,
      style: 'width: 10%',
      type: 'datetime'
    },
    {
      name: 'paid',
      label: 'Погашено',
      align: 'right',
      field: 'paid',
      format: val => money(val),
      sortable: true,
      style: 'width: 10%',
      type: 'range'
    },
    {
      name: 'currentDebt',
      label: 'Общий долг',
      align: 'right',
      field: 'currentDebt',
      format: val => money(val),
      sortable: true,
      style: 'width: 10%',
      type: 'range'
    },
    {
      name: 'delay',
      label: 'Дней просрочки',
      align: 'right',
      field: 'delay',
      sortable: true,
      style: 'width: 10%',
      type: 'range'
    },
    {
      name: 'group',
      label: 'Группа',
      align: 'left',
      field: 'group',
      sortable: true,
      style: 'width: 5%',
      type: 'select'
    },
  ],
  separator: 'horizontal',
  pagination: {
    sortBy: 'date',
    descending: true,
    page: 1,
    rowsPerPage: 25
  },

}
