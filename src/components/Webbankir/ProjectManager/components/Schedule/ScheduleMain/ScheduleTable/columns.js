
export const columnsDefault = [
  {
    name: 'employee',
    label: 'Сотрудник',
    align: 'center',
    field: row => row.employee.fullName,
    sortable: true,
    type: 'string'
  },
  {
    name: 'portfolios',
    label: 'Портфель',
    align: 'center',
    field: row => row.employee.portfolios,
    sortable: true,
    type: 'string'
  }
]
