export default {
  filters: {
    titles: {
      assigned: 'Закрепление',
      status: 'Статус',
      portfolioLimit: 'Лимит по портфелю',
      groupLimit: 'Лимит на группу',
      payments: 'Оплаты',
      contactsWithClient: 'Контакты с клиентом',
      promises: 'Обещания',
      delay: 'Просрочка',
      debt: 'Задолженность',
      donorGroup: 'Группа-донор',
      recipientGroup: 'Группа-реципиент',
      GPS: 'ГПС',
      selectionMethod: 'Вариант отбора',
      productType: 'Виды займов',
    },
    labels: {
      toForm: 'Сформировать',
      clear: 'Очистить',
      redistribute: 'Перераспределить',
      yes: 'Есть',
      no: 'Нет',
      hard: 'Хард',
      hardWithAgreement: 'Хард с ДС',
      oldestDate: 'Ранее',
      all: 'Все',
      auto: 'Авто',
      forced: 'Принудительно',
    },
    selectionMethod: {
      risingDebt: 'По возрастанию суммы',
      descendingDebt: 'По убыванию суммы',
      risingDelay: 'По возрастанию просрочки',
      descendingDelay: 'По убыванию просрочки',
      withoutSort: 'Случайным образом',
    },
    productType: {
      all: 'Все',
      pdl: 'PDL',
      pos: 'POS'
    }
  },
  table: {
    fetchingData: 'Запрашиваются данные',
    noData: 'Список не сформирован',
    loansPerPage: 'Займов на странице:',
    state: {
      hard: 'Хард коллекшн',
      hardWithAgreement: 'Хард коллекшн с ДС',
      undefined: 'Не определён',
    },
    quantityOfLoans: 'Общее количество займов: ',
    totalSumOfDebts: 'Суммарная задолженность: ',
  }
}
