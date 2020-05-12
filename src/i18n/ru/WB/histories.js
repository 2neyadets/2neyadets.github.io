export default {
  schedule: {
    index: '№',
    date: 'Дата',
    sum: 'Сумма',
    overdue: 'Просроченные платежи',
    overdueShort: 'Просроченные',
    type: 'Тип займа',
    status: 'Статус',
    paid: 'Оплачено'
  },
  purchases: {
    title: 'История покупок',
    status: {
      active: 'Активен',
      completed: 'Завершен',
      returned: 'Возврат',
      not_returned: 'Оплачен'
    },
    type: {

    }
  },
  products: {
    name: 'Наименование',
    price: 'Цена',
    status: 'Статус',
  },
  payments: {
    title: 'История платежей',
    sumTotal: 'Сумма платежей',
    sumPayment: 'Сумма платежа',
    sumOD: 'Оплата основного долга',
    sumPercents: 'Оплата проценты',
    sumFines: 'Пени',
    paymentSystem: 'Форма оплаты',
    date: 'Дата',
    number: 'Номер платежа'
  },
  accruals: {
    title: 'История начислений',

  },
  renewals: {
    title: 'История доп.соглашений',
    type: {
      installment: 'Рассрочка',
      renewal: 'Пролонгация'
    },
    status: {
      PAID: 'Оплачен',
      NOT_PAID: 'Не оплачен',
      SIGNED: 'Подписан',
      NOT_SIGNED: 'Не подписан',
      TERMINATED: 'Расторгнут'
    }
  },
  installment: {
    title: 'Рассрочки по займу',
    status: {
      PAID: 'Оплачен',
      NOT_PAID: 'Не оплачен'
    }
  },
  agreements: {
    index: '№',
    title: 'История ДС',
    type: {
      uncategorized: 'Некатегоризированное',
      installment: 'Рассрочка',
      renewal: 'Пролонгация',
      amnesty: 'Прощение',
      finInsurance: 'Финзащита',
      creditHolidays: 'Кредитные каникулы',
    },
    status: {
      created: 'Создано',
      signed: 'Подписано',
      paid: 'Оплачено',
      signTermExpired: 'Не подписано',
      payTermExpired: 'Не оплачено',
      modified: 'Изменено',
      terminated: 'Расторгнуто',
      closed: 'Закрыто',
    }
  },
  loans: {
    title: 'История займов PDL'
  }
}
