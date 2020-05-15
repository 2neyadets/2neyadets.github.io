export default {
  table: {
    columns: {
      contract: 'Договор',
      status: 'Статус',
      timezone: 'Часовой пояс',
      client: 'Клиент',
      amount: 'Общая задолженность',
      currentAmount: 'Текущая задолженность',
      lastLogin: 'Последний логин',
      lastAmount: 'Последняя задолженность',
      lastCommunication: 'Последняя коммуникация',
      lastCommunicationResult: 'Последний результат',
      lastPromise: 'Последнее обещание'
    },
  },
  product: {
    pdl: 'Займ PDL',
    insurance: 'Страховка',
    pos: 'Займы POS'
  },
  status: 'Статус займа:',
  agreements: {
    missing: 'Отсутствует',
    installment: 'Оформлена рассрочка',
    renewal: 'Оформлена пролонгация',
    additionalAgreement: 'Оформлено ДС'
  },
  portfolio: {
    unknown: 'Не определён'
  },
  schedule: {
    title: 'График платежей',
    payments: 'Платежи по ДС',
    amountLeftToPay: 'Осталось заплатить',
    status: {
      paid: 'оплачен',
      required: 'подлежит оплате',
      delayed: 'просрочен'
    },
    header: {
      index: 'asdasdasd',
      lastDayOfPayment: 'Оплатить до',
      amountBySchedule: 'По графику',
      amountToPay: 'К оплате',
      paidAmount: 'Оплачено',
      status: 'Статус',
      delayedUntil: 'Просрочен до',
    },
  }
}
