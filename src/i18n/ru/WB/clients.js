export default {
  card: {
    header: {
      client: 'Клиент',
      contract: 'Договор',
      portfolio: 'Портфель',
      group: 'Группа',
      statusOfContract: 'Статус заявки/договора',
      agreement: 'Дополнительное соглашение',
      soft: 'Софт',
      assigned: 'Последний контакт',
      totalDebt: 'Общий долг',
      lastCommunication: 'Последняя коммуникация',
      lastCommunicationDetails: {
        operator: 'Оператор',
        status: 'Статус',
        result: 'Результат'
      },
      status: 'Статус',
      borrowing: 'Займ',
      insurance: 'Страховка',
      unknown: 'Не известно',
    },
    main: {
      borrower: 'Заемщик',
      lastLogin: 'Последний вход в ЛК'
    },
    alert: {
      close: 'Необходимо закончить работу с открытыми карточками',
      noActiveLoans: 'У клиента нет активных займов'
    }
  },
  labels: {
    name: 'ФИО',
    birthDate: 'Дата рождения',
    address: 'Адрес регистрации',
    passport: 'Паспорт',
    phone: 'Телефон',
    allPhones: 'Все номера',
    email: 'E-mail',
    marital: 'Семейное положение',
    children: 'Дети',
    education: 'Образование',
    socialNetworks: 'Социальные сети',
    secretPhrase: 'Секретное слово',
    employment: 'Место работы',
    industry: 'Тип организации',
    position: 'Должность',
    income: 'Доход в месяц (₽)',
    account: 'Счет зачисления',
    additional: 'Дополнительно',
    attachments: 'Прикрепленные файлы'

  },
  phones: {
    mobile: 'Мобильный',
    fixed: 'Городской',
    home: 'Домашний',
    work: 'Рабочий',
    allNumbers: 'Все номера',
    excluded: 'Исключены из PD',
    unknown: 'Не известно',
    additional: 'Дополнительный'
  },
  phns: {
    mobile: 'Моб.',
    fixed: 'Гор.',
    home: 'Дом.',
    work: 'Раб.',
    additional: 'Доп.',
    application: 'Заявка',
  },
  source: {
    profile: 'Профиль'
  },
  rate: {
    base: 'Базовая',
    current: 'Текущая',
    annual: 'Годовая'
  },
  marital: {
    single: 'Холост/не замужем',
    married: 'Женат/замужем',
    divorced: 'Разведен(а)',
    widowed: 'Овдовел(а)',
  },
  education: {
    incompleteSecondary: 'Неполное среднее',
    secondary: 'Полное среднее',
    incompleteHigher: 'Неоконченное высшее',
    higher: 'Высшее',
    bachelor: 'Бакалавр',
    master: 'Магистр',
    scientificDegree: 'Ученая степень'
  },
  reliability: {
    info: 'Надежность заемщика',
    blacklist: 'Клиент в черном списке',
    amount: 'Количество займов',
    history: 'История займов PDL',
    promises: 'Обещания об оплате',
    given: 'Дано:',
    done: 'Выполнено:',
    legend: 'Легенда просрочки возврата займов',
    colors: {
      danger: 'Более 30 дней',
      warning: 'Не более 30 дней',
      info: 'Не более 4 дней'
    }
  },
  paymentSystem: {
    card: 'Банковская карта',
    yandex: 'Яндекс.Кошелек',
    contact: 'CONTACT',
    qiwi: 'QIWI Wallet'
  },
  debt: {
    info: 'Задолженность',
    delay: 'Просрочка',
    currentSum: 'Текущая сумма долга',
    od: 'ОД',
    penalty: 'Пени',
    accrualsHistory: 'История начислений',
    renewalsHistory: 'История доп.соглашений',
    promiseOfRenewal: 'Обещание пролонгации',
    promiseOfInstallment: 'Обещание рассрочки',
    promiseToRepayInFull: 'Обещание полной оплаты',
    promiseToRepayPartially: 'Обещание частичной оплаты',
    sum: 'Сумма',
    status: 'Статус',
    promisesHistory: 'История обещаний',
    lastPaymentDate: 'Дата последней оплаты',
    paymentSum: 'Сумма оплаты',
    partialRepaid: 'Частично погашено',
    paymentsHistory: 'История платежей',
    paymentsInstallment: 'Рассрочка платежей',
    paymentsSchedule: 'График платежей',
    paymentSchedule: {
      paymentDate: 'Дата',
      paymentAmount: 'Сумма к оплате',
      paymentFact: 'Оплачено',
      paymentStatus: 'Статус',
      statuses: {
        paid: 'Оплачено',
        expired: 'Просрочен',
        overdue: 'Просрочен'
      },
      title: 'График платежей по рассрочке',
      amountLeftToPay: 'Осталось оплатить',
    },
  },
  phoneForm: {
    title: 'Добавление телефона',
    type: 'Тип телефона',
    number: 'Номер телефона',
    owner: 'Владелец',
    comment: 'Комментарий',
    phoneAdded: 'Телефон успешно добавлен'
  },
  timezone: {
    null: 'НЕИЗВЕСТНО',
    0: 'Ошибка в 1С',
    1: 'Ошибка в 1С',
    2: 'Калининградское время',
    3: 'Московское время',
    4: 'Самарское время',
    5: 'Екатеринбургское время',
    6: 'Омское время',
    7: 'Красноярское время',
    8: 'Иркутское время',
    9: 'Якутское время',
    10: 'Владивостокское время',
    11: 'Магаданское время',
    12: 'Камчатское время'
  },
  confirm: {
    phoneBlock: 'Вы точно хотите заблокировать этот телефон?',
    phoneBlockOk: 'Да, блокируем',
    phoneBlockCancel: 'Нет, отмена'
  },
  promised: {
    title: 'Клиенты с обещаниями',
    columns: {
      total: 'ОД',
      amount: 'Обещано',
      created: 'Создано',
      promised: 'На дату',
      clientName: 'ФИО',
      status: 'Статус',
      type: 'Тип обещания',
      timezone: 'TZ',
      delay: 'Просрочка',
      contract: '№ договора',
      product: 'Продукт',

    }
  },
  list: {
    title: 'Клиенты',
    columns: {
      debtTotal: 'ОД',
      amount: 'Заем',
      lastCommunication: 'Посл. коммуникация',
      department: 'Отдел',
      promised: 'На дату',
      clientName: 'ФИО',
      status: 'Статус',
      result: 'Результат',
      type: 'Тип обещания',
      timezone: 'TZ',
      delay: 'Просрочка',
      duration: 'Срок',
      contract: '№ договора',
      product: 'Продукт',
      operator: 'Оператор',
      portfolio: 'Портфель'
    },
    departments: {
      4: 'Dev',
      1: 'CRM',
      154: 'Софт',
      157: 'Софт Углич',
      158: 'ОФК (Отдел финансового консультирования)',
      159: 'Софт Москва',
      160: 'ОРПЗ (Отдел по работе с просроченной задолженностью)',
      155: 'Хард',
      156: 'Хард Москва',
      161: 'Отдел взыскания',
      162: 'Хард Ярославль',
      163: 'Отдел взыскания',
      151: 'Андеррайтинг',
      152: 'Андеррайтинг Москва',
      153: 'Андеррайтинг 1',
      166: 'Колл-центр',
      167: 'Колл-центр Ярославль',
      168: 'ОРК (Отдел по работе с клиентами)',
      169: 'Компания',
      170: 'Техническая поддержка',
    }
  }
}
