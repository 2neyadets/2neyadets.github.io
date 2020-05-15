export default {
  title: 'Коммуникации',
  labels: {
    contact: 'Контакт',
    lastContact: 'Последний контакт',
    callType: 'Тип звонка',
    actions: 'Действия',
    callDuration: 'Время разговора',
    result: 'Результат звонка',
    history: 'История коммуникаций',
    allNumbers: 'Все номера договора',
    callStart: 'Набрать номер',
    callEnd: 'Закончить звонок',
    callMute: 'Заглушить микрофон',
    callHold: 'Удержание звонка',
    unhold: 'Снять с удержания',
    callForward: 'Перевести звонок',
    restoreAccessToAccount: 'Отправить пароль ЛК',
    restoreAccessToAccountComment: 'Восстановление клиенту доступа к ЛК',
    restoreAccessToAccountTooltip: 'Восстановление клиенту доступа к ЛК посредством отправки ему SMS-сообщения на основной номер телефона',
    sendSMS: 'Отправить SMS',
    sendEmail: 'Отправить E-mail',
    limitSMS: 'Лимит отправки SMS исчерпан',
    comment: 'Комментарий',
    required: 'Обязательно для заполнения',
    commentPlaceholder: '',
    toBlackList: '',
    editMode: 'ВКЛЮЧЕН РЕЖИМ РЕДАКТИРОВАНИЯ!!!',
    closeBtn: 'Закрыть',
    submitBtn: 'Сохранить',
    submitBtnLoading: 'Сохраняем...',
    attachFile: 'Прикрепить файл',
    template: 'Вид шаблона',
    never: 'Не установлен',
    discount: 'Скидка',
    newPrincipalDebt: 'К оплате',
    amountOfForgiveness: 'Сумма прощения',
    primaryPayment: 'Обеспечительный платеж',
    installmentPeriod: 'Период рассрочки',
    daysDuration: 'Кол-во дней пролонгации',
    paymentForRenewal: 'Сумма для пролонгации',
    renewalDays: 'Доступно для пролонгации дней',
    reason: 'Причина',
    sum: 'Сумма займа',
    startDate: 'Дата начала',
    expirationDate: 'Дата окончания',
    table: {
      channel: 'Канал',
      date: 'Дата',
      action: 'Действие',
      status: 'Статус',
      result: 'Результат',
      comment: 'Комментарий/содержание',
      operator: 'Исполнитель'
    }
  },
  action: {
    autoDial: 'Автодозвон',
    autoInformer: 'Автоинформер',
    manualDial: 'Ручной набор',
    sendingSms: 'Отправка SMS',
    sendingEmail: 'Отправка E-mail',
    other: 'Поиск'
  },
  status: {
    blank: 'Не заполнено',
    withoutClientContact: 'Без контакта с клиентом',
    creditHolidays: 'Кредитные каникулы',
    withoutContact: 'Без контакта с клиентом',
    contactWithClient: 'Контакт с клиентом',
    contactWith3rdPerson: 'Контакт с 3-м лицом',
    contactWithEmployer: 'Контакт с работодателем',
    contactWithRelative: 'Контакт с родственником',
    belongsToAnotherPerson: 'Принадлежит иному лицу',
    doesNotRespond: 'Не отвечает',
    isNotAvailable: 'Недоступен',
    isDisabled: 'Отключен',
    delivered: 'Доставлено',
    notDelivered: 'Не доставлено',
    redirects: 'Переадресация',
    notSetOrSilence: 'Не определен – ТИШИНА',
    smsToClient: 'SMS-сообщение клиенту',
    emailToClient: 'Электронное письмо',
    never: 'Не установлен',
    supervisorComment: 'Комментарий руководителя',
    additionalComment: 'Дополнительный комментарий',
  },
  result: {
    blank: 'Не заполнено',
    promiseToRepayInFull: 'Обещание полной оплаты',
    promiseToRepayInFullHard: 'Обещание полной оплаты',
    promiseToRepayPartially: 'Обещание частичной оплаты',
    promiseToRepayPartiallyHard: 'Обещание частичной оплаты',
    promiseToProvideInfo: 'Обещание передать информацию',
    promiseOfRenewal: 'Обещание пролонгации',
    promiseOfInstallment: 'Обещание рассрочки',
    installment: 'Оформлена рассрочка',
    renewal: 'Оформлена пролонгация',
    clientPaid: 'Клиент оплатил',
    needToCallback: 'Перезвонить',
    transferToCollectors: 'Передать коллекторам',
    transferToLegal: 'Передать в ЛИГАЛ',
    refusalToPay: 'Отказ от оплаты',
    refusalToProvideInfo: 'Отказ передать информацию',
    clientIsDisabled: 'Отключен',
    clientDoesNotRespond: 'Не отвечает',
    didNotGetLoan: 'Не оформлял заем',
    clientWentBankrupt: 'Банкрот',
    clientHasDied: 'Умер',
    negative: 'Негатив',
    impossibleToProvideInfo: 'Невозможно передать информацию',
    clientDoesNotWork: 'Не работает',
    clientIsUnknown: 'Клиента не знают',
    contactWithoutResult: 'Контакт без результата',
    failureToIdentify: 'Отказ от идентификации',
    failureToPay: 'Оплата не прошла/не дошла',
    failureToInteract: 'Отказ от взаимодействия',
    refusalByAmountReason: 'Отказ от займа (мало)',
    refusalByTopicalityReason: 'Отказ от займа (не актуально)',
    refusalByNewApplication: 'Отказ от займа (новая заявка)',
    issueTroubles: 'Проблемы с получением займа',
    restoreAccessSms: 'Отправлено SMS-сообщение',
    other: 'Консультация',
    consultation: 'Консультация',
    amnesty: 'Оформлена оплата с дисконтом',
    unknown: 'Нет данных',
    problemsWithPayment: 'Проблемы с оплатой',
    problemsWithPersonalAccount: 'Проблемы с личным кабинетом',
    problemsWithLoan: 'Проблемы с получением займа',
    problemsWithPos: 'Проблемы партнеров по POS',
    transferToHard: 'Перевод на Хард',
    transferToSoft: 'Перевод на Софт',
    transferToPos: 'Перевод на POS',
    applicationApproved: 'Заявка одобрена',
    applicationRejected: 'Заявка отклонена',
    applicationInvalidated: 'Аннулировать заявку',
    dataAnalysis: 'Анализ данных',
    withoutClientContact: 'Без контакта с клиентом',
    clarifyingOfInformation: 'Уточнение информации',
    jobLoss: 'Потеря работы',
    incomeDecline: 'Снижение дохода',
    sickLeave: 'Больничный лист',
    undefinedChannel: 'Обращение по неопределенному (неизвестному) каналу',
    creditHolidays: 'Создание кредитных каникул',
  },
  reason: {
    blank: 'Не заполнено',
    cbCreditHistory: 'КИ БКИ',
    wbCreditHistory: 'КИ ВБ',
    photo: 'Фото',
    fraudIndicators: 'Признаки фрода',
    negative: 'Негатив',
    enforcementProceedings: 'Исп. производство',
    bankrupt: 'Банкрот',
    relations: 'Связки',
    noLongerRelevant: 'Другое (отказ клиента)',
    profileErrors: 'Ошибки анкеты',
    couldNotContact: 'Не дозвонились',
    other: 'Другое',
  },
  sms: {
    template: 'Шаблон SMS сообщения',
    phone: 'Телефон',
    text: 'Текст к отправке',
    sendInProgress: 'Отправляем...',
    sendSuccess: 'SMS успешно отправлено!',
    templates: {
      blank: 'Вид шаблона',
      smsInfoOfInstallment: 'Вы можете оформить рассрочку',
      smsWarningOfVisit: 'Выезд',
      smsWarningOfTransferTo3rdPerson: 'Готовится для передачи в 3-им лицам',
      smsWarningOfDebtIncrease: 'Долг увеличивается',
      smsDemandOfUrgentPayment: 'Срочно оплатить',
      smsWarningOfUnfulfilledPromises: 'Постоянно нарушаете обещания',
      smsInfoOfUnfulfilledPromise: 'Нарушено обещание',
      smsReminderOfTodayPromisedPayment: 'Наступил день обещанного платежа',
      smsWarningOfCourt: 'Не доводите дело до суда',
      smsInfoOfNonReceivedPayment: 'Оплата не поступила',
      smsInfoOfDelayedAgreementPayment: 'Неуплата платежа согласно ДС',
      smsReminderOfTodayPayment: 'Оплaта долга сегодня',
      smsDemandOfObligatoryPayment: 'Оплатите обеспечительный платеж',
      smsWarningInCaseOfRefusalToPay: 'Отказ не освобождает от оплаты',
      smsOfferOfInstallment: 'Нет возможности - расссрочка',
      smsReminderOfPromisedPayment: 'Получено обещание оплаты',
      smsOfferOfAmnesty: 'Прощение до 30%',
      smsOfferOfUpTo6MonthInstallment: 'Рассрочка до 6-ти',
      smsInfoOfPaymentDetails: 'Реквизиты',
      smsReminderOfTodayAgreementPayment: 'Сегодня произвести платеж',
      smsDemandOfContact: 'Срочно свяжитесь',
      smsWarningInCaseOfRefusalToContact: 'Уклонение от разговоров не освобождает от оплаты',
      smsWarningOfUnfulfilledPromise: 'Вы не сдержали своё обещание',
      smsReminderOfPayment: 'Напоминаем о необходимости внести оплату',
      smsCreditHolidaysWhenGracePeriodIsGranted: 'КК: документы приняты, льготный период подтвержден',
      smsCreditHolidaysWhenGracePeriodIsNotConfirmed: 'КК: документы не приняты, льготный период отменен',
      smsCreditHolidaysWhenNonDocumentsHaveBeenProvided: 'КК: документы не поступили, льготный период отменен',
      smsCreditHolidaysWhenEarlyExpirationIsRequested: 'КК: льготный период прекращен по требованию клиента',
      smsCreditHolidaysWhenGracePeriodIsOver: 'КК: льготный период закончился',
      autoSmsCreditHolidaysAcceptanceNotice: 'КК: требование о предоставлении льготного периода принято', // авто
      autoSmsCreditHolidaysRejectionNotice: 'КК: отказ в принятии требования, неопределенный канал', // авто
      informerSmsDemandOfContact: 'Просрочка 12 дней PDL',
      informerSmsReminderOfOverduePayment: 'Просрочка 5 дней PDL',
      informerSms3DaysDelayDemandOfPayment: 'Просрочка 3 дня PDL ПОГАШЕНИЕ',
      informerSms3DaysDelayDemandOfPaymentOrTermRenew: 'Просрочка 3 дня PDL ПРОЛОНГАЦИЯ',
      informerSms1DayDelayNotice: 'Просрочка 1 день PDL ПОГАШЕНИЕ',
      informerSms1DayDelayNoticeWithTermRenewOffer: 'Просрочка 1 день PDL ПРОЛОНГАЦИЯ',
      informerSmsReminderAtMaturityDate: 'Напоминание в последний день PDL ПОГАШЕНИЕ',
      informerSmsReminderAtMaturityDateOnRenewableDebt: 'Напоминание в последний день PDL ПРОЛОНГАЦИЯ',
      informerSms2DaysBeforeMaturityReminder: 'Напоминание за 2 дня PDL ПОГАШЕНИЕ',
      informerSms2DaysBeforeMaturityReminderWithOfferOfRenewal: 'Напоминание за 2 дня PDL ПРОЛОНГАЦИЯ',
      informerSmsWarningOfTomorrowTransferToCollectors: 'Предупреждение о передаче на Хард PDL',
      informerSms3DaysBeforeWarningOfTransferToCollectors: 'Просрочка 28 дней PDL',
      informerSmsWarningOfStaringPreCourtProcedure: 'Просрочка 26 дней PDL',
      informerSmsImportantInformationAboutDebt: 'Просрочка 20 дней PDL',
      informerSmsWarningOfUnacceptableRefusal: 'Просрочка 26 дней PDL',
      informerSmsWarningOfPreparingContractForCollectors: 'Просрочка 28 дней PDL',
      informerSmsDelay35WarningOfStaringPreCourtProcedure: 'Просрочка 35 дней PDL',
    },
    textForTemplates: {
      blank: 'Выберите вид шаблона',
      smsInfoOfInstallment: 'Просрочен долг! Вы можете оформить рассрочку и остановить начисление %. ООО МФК «ВЭББАНКИР» тел. 88003332990',
      smsWarningOfVisit: 'Просрочен долг! Готовятся выездные мероприятия по месту Вашей регистрации. ООО МФК "ВЭББАНКИР" тел.88003332990',
      smsWarningOfTransferTo3rdPerson: 'Ваш просроченный долг готовится для передачи в работу третьим лицам. Оплатите долг добровольно!ООО МФК «ВЭББАНКИР» тел.88003332990',
      smsWarningOfDebtIncrease: 'Просрочен заём! Ежедневно долг УВЕЛИЧИВАЕТСЯ. ООО МФК «ВЭББАНКИР» тел.88003332990 Оплата по ссылке https://wbnkr.com/#login#',
      smsDemandOfUrgentPayment: 'Необходимо срочно оплатить просроченный долг перед ООО МФК «ВЭББАНКИР» тел.88003332990 Оплата по ссылке https://wbnkr.com/#login#',
      smsWarningOfUnfulfilledPromises: 'Вы постоянно нарушаете свои обещания оплатить просроченный долг, наше доверие заканчивается. ООО МФК «ВЭББАНКИР» тел.88003332990',
      smsInfoOfUnfulfilledPromise: 'Вы нарушили обещание погасить просроченный долг! Срочно свяжитесь с ООО МФК «ВЭББАНКИР» тел.88003332990 https://wbnkr.com/#login#',
      smsReminderOfTodayPromisedPayment: 'Сегодня оплата по просроченному долгу в сумме #promisedAmount# р., согласно Вашему обещанию. ООО МФК «ВЭББАНКИР» 88003332990',
      smsWarningOfCourt: 'Просрочен долг! Не доводите дело до суда! Мы поможем решить Вашу финансовую проблему! Тел.88003332990 ООО МФК «ВЭББАНКИР»',
      smsInfoOfNonReceivedPayment: 'Оплата в счет просроченного долга не поступила!ООО МФК «ВЭББАНКИР» тел.88003332990 Оплата по ссылке https://wbnkr.com/#login#',
      smsInfoOfDelayedAgreementPayment: 'Просрочен долг! Неуплата платежа согласно доп. соглашения приведет к его расторжению. ООО МФК «ВЭББАНКИР» тел. 88003332990',
      smsReminderOfTodayPayment: 'Просроченный долг должен быть погашен СЕГОДНЯ! ООО МФК «ВЭББАНКИР» тел.88003332990 Оплата по ссылке https://wbnkr.com/#login#',
      smsDemandOfObligatoryPayment: 'Просрочен долг! Срочно оплатите обеспечительный платеж по дополнительному соглашению! ООО МФК «ВЭББАНКИР» тел. 88003332990.',
      smsWarningInCaseOfRefusalToPay: 'Просрочен долг! Отказ от оплаты не освобождает от погашения задолженности. ООО МФК «ВЭББАНКИР» тел. 88003332990',
      smsOfferOfInstallment: 'НЕТ ВОЗМОЖНОСТИ оплатить просроченный долг полностью? Воспользуйтесь РАССРОЧКОЙ! Звоните в ООО МФК «ВЭББАНКИР» тел.88003332990',
      smsReminderOfPromisedPayment: 'Просрочен долг! #promisedAtDate# необходимо произвести платеж в сумме #promisedAmount# р. согласно Вашему обещанию. ООО МФК «ВЭББАНКИР» 88003332990',
      smsOfferOfAmnesty: 'Просрочен долг! Предлагаем прощение до 30% от суммы долга! Для оформления звоните по тел. 88003332990 ООО МФК "ВЭББАНКИР"',
      smsOfferOfUpTo6MonthInstallment: 'Просрочен долг! Доступна рассрочка до 6 месяцев с остановкой начисления процентов. Срочно звоните в ООО МФК «ВЭББАНКИР» 88003332990',
      smsInfoOfPaymentDetails: 'Просрочен долг по займу #login#, сумма #totalDebt# руб. оплата через терминалы КИВИ, картой на сайте по ссылке https://wbnkr.com/#login# ООО МФК «ВЭББАНКИР» тел.88003332990',
      smsReminderOfTodayAgreementPayment: 'Просрочен долг! СЕГОДНЯ необходимо оплатить доп. соглашение. ООО МФК «ВЭББАНКИР» тел.88003332990 https://wbnkr.com/#login#',
      smsDemandOfContact: 'За Вами числится просроченный долг! Для решения вопроса, срочно свяжитесь. ООО МФК «ВЭББАНКИР» тел. 88003332990',
      smsWarningInCaseOfRefusalToContact: 'Просрочен долг! Уклонение от разговоров не освобождает Вас от погашения задолженности. ООО МФК «ВЭББАНКИР» тел. 88003332990',
      smsWarningOfUnfulfilledPromise: 'Нарушена достигнутая договоренность по оплате просроченной задолженности. Долг #totalDebt# руб. ООО МФК «ВЭББАНКИР» Тел.88007755454',
      smsReminderOfPayment: 'Напоминаем о необходимости внести оплату по просроченному долгу согласно договоренности! ООО МФК «ВЭББАНКИР» Тел.88007755454',
      smsCreditHolidaysWhenGracePeriodIsGranted: 'Уведомляем о подтверждении установления льготного периода по договору займа. ООО МФК «ВЭББАНКИР» тел. 88007755454.',
      smsCreditHolidaysWhenGracePeriodIsNotConfirmed: 'Уведомляем о неподтверждении установления льготного периода по договору займа. Уточненный график платежей в Личном кабинете. ООО МФК «ВЭББАНКИР» тел. 88007755454.',
      smsCreditHolidaysWhenNonDocumentsHaveBeenProvided: 'Уведомляем об отказе в удовлетворении Вашего требования об установлении льготного периода по договору займа, в связи с непоступлением подтверждающих документов. ООО МФК «ВЭББАНКИР» тел. 88007755454.',
      smsCreditHolidaysWhenEarlyExpirationIsRequested: 'Льготный период прекращен по Вашему заявлению. Уточненный график платежей в Личном кабинете. ООО МФК «ВЭББАНКИР» тел. 88007755454.',
      smsCreditHolidaysWhenGracePeriodIsOver: 'Льготный период окончен. Уточненный график платежей в Личном кабинете. ООО МФК «ВЭББАНКИР» тел. 88007755454',
      autoSmsCreditHolidaysAcceptanceNotice: 'Сообщаем об изменении условий договора займа в соответствии с Вашим требованием. Просим предоставить подтверждающие документы в течение 90 дней. ООО МФК «ВЭББАНКИР» тел. 88007755454.',
      autoSmsCreditHolidaysRejectionNotice: 'Уведомляем об отказе в удовлетворении Вашего требования об изменении условий договора займа. ООО МФК «ВЭББАНКИР» тел. 88007755454.',
    }
  },
  email: {
    template: 'Шаблон E-mail сообщения и адрес отправки',
    text: 'Текст к отправке',
    sendInProgress: 'Отправляем...',
    sendSuccess: 'E-mail успешно отправлен!',
    templates: {
      informerEmailNoticeOfReportingToTheCreditBureau: '6 день. Предупреждение о БКИ.',
      informerEmailNoticeOfAheadOfSchedulePreTrialCollectionProcedure: '10 день. Досудебное взыскание.',
      informerEmailDelay20NoticeOfPreTrialCollectionProcedure: '20 день. Досудебное взыскание.',
      informerEmailDelay24NoticeOfStartingPreTrialCollectionProcedure: '24 день. Досудебное взыскание.',
      informerEmailDelay28NoticeOfStartingPreTrialCollectionProcedure: '28 день. Досудебное взыскание.',
      informerEmailDelay15NoticeOfPreTrialCollectionProcedure: '15 день. Досудебное взыскание.',
      informerEmailDelay37LastChanceOffer: '37 день. Досудебное взыскание',
      informerEmailDelay30WarningOfTransferingToCollectors: '30 день. Досудебное взыскание',
      blank: 'Вид шаблона',
      emailReminderOfOverdueDebt: 'Задолженность напоминание',
      emailWarningOfVisit: 'Выездные мероприятия',
      emailWarningOfTransferTo3rdPerson: 'Передача 3-м лицам',
      emailOfferOfInstallment: 'Предложение рассрочки',
      emailCreditHolidaysDocumentsAreInOrder: 'КК: документы предоставлены, льготный период подтвержден',
      emailCreditHolidaysDocumentsDoNotComply: 'КК: документы не соответствуют, льготный период отменен',
      emailCreditHolidaysDocumentsHaveNotBeenProvided: 'КК: документы не предоставлены, льготный период отменен',
      autoEmailCreditHolidaysAcceptanceNotice: 'КК: требование принято, необходимо предоставить док-ты', // авто
    },
    textForTemplates: {
      blank: 'Выберите вид шаблона и адрес отправки',
      emailReminderOfOverdueDebt: 'ВНИМАНИЕ!  Уведомляем Вас о том, что за Вами длительное время числится просроченная задолженность перед компанией ООО МФК «ВЭББАНКИР»! Отсутствие платежей и контактов с Вами длительное время может свидетельствовать о намеренном уклонении от уплаты долга.  Позвоните по указанному телефону, и МЫ ПОМОЖЕМ РЕШИТЬ ВАШУ ПРОБЛЕМУ   8-800-333-29-90 (многоканальный, звонок бесплатный).  ООО МФК «ВЭББАНКИР» www.webbankir.com',
      emailWarningOfVisit: 'ВНИМАНИЕ! За Вами длительное время числится просроченная задолженность перед компанией ООО МФК «ВЭББАНКИР»! В связи с отсутствием платежей и контактов с Вами длительное время ПО МЕСТУ ВАШЕЙ РЕГИСТРАЦИИ ГОТОВЯТСЯ ВЫЕЗДНЫЕ МЕРОПРИЯТИЯ. Для отмены выезда сотрудников отдела взыскания в СРОЧНОМ порядке позвоните по телефону 8-800-333-29-90 (многоканальный, звонок бесплатный). ООО МФК «ВЭББАНКИР» www.webbankir.com',
      emailWarningOfTransferTo3rdPerson: 'ВНИМАНИЕ! За Вами длительное время числится просроченная задолженность перед компанией ООО МФК «ВЭББАНКИР»! В связи с отсутствием платежей и контактов с Вами длительное время ВАШ ДОГОВОР ГОТОВИТСЯ ДЛЯ ПЕРЕДАЧИ 3-ИМ ЛИЦАМ для дальнейшего взыскания. Для урегулирования данного вопроса СРОЧНО позвоните по телефону 8-800-333-29-90 (многоканальный, звонок бесплатный). ООО МФК «ВЭББАНКИР» www.webbankir.com',
      emailOfferOfInstallment: 'ВНИМАНИЕ!  Уведомляем Вас о том, что на данный момент за Вами числится просроченная задолженность перед компанией ООО МФК «ВЭББАНКИР»!  Вы  игнорируете все уведомления со стороны нашей компании! Ваши действия могут быть расценены, как умышленное уклонение от исполнения взятых на себя обязательств, так как Вы не законно удерживаете денежные средства, причитающиеся нам! Любой вопрос можно решить мирным путем. Если у Вас нет возможности оплатить всю задолженность единым платежом, то мы можем предложить оформление дополнительного соглашения на рассрочку Вашего займа с приостановкой начисления процентов. Решили закрыть заём по рассрочке, тогда позвоните по указанному телефону, и МЫ ПОМОЖЕМ РЕШИТЬ ВАШУ ПРОБЛЕМУ  8-800-333-29-90 (многоканальный, звонок бесплатный).  ООО МФК «ВЭББАНКИР» www.webbankir.com',
      emailCreditHolidaysDocumentsAreInOrder: 'Уважаемый *И.О. клиента*!\n' +
        '\n' +
        '(число) в адрес ООО МФК «ВЭББАНКИР» поступили документы, подтверждающие Ваше право на предоставление Вам льготного периода по договору нецелевого потребительского займа (микрозайма) № ___ от __.__.___. г.\n' +
        '\n' +
        'Предоставленные Вами документы соответствуют требованиям Федерального закона от 03.04.2020 № 106-ФЗ «О внесении изменений в Федеральный закон «О Центральном банке Российской Федерации (Банке России)» и отдельные законодательные акты Российской Федерации в части особенностей изменения условий кредитного договора, договора займа».\n' +
        '\n' +
        'С уважением,\n' +
        '\n' +
        'ООО МФК «ВЭББАНКИР»',
      emailCreditHolidaysDocumentsDoNotComply: 'Уважаемый *И.О. клиента*!\n' +
        '\n' +
        'Извещаем Вас о том, что представленные Вами документы, полученные ООО МФК «ВЭББАНКИР» __.__.___. г., не соответствуют требованиям Федерального закона от 03.04.2020 № 106-ФЗ «О внесении изменений в Федеральный закон «О Центральном банке Российской Федерации (Банке России)» и отдельные законодательные акты Российской Федерации в части особенностей изменения условий кредитного договора, договора займа», и не подтверждают наличие условий для установления льготного периода по договору нецелевого потребительского займа (микрозайма) № ___ от __.__.____ г.\n' +
        '\n' +
        'Ранее ООО МФК «ВЭББАНКИР» извещало Вас о том, что предоставление документов, не соответствующих требованиям законодательства РФ, предоставление документов, не подтверждающих основание для установления Вам льготного периода , а равно предоставление недостоверных сведений и/или документов, влечет за собой признание льготного периода неустановленным, а условия договора неизмененными, включая начисление санкций за ненадлежащее исполнение обязательств в соответствии с условиями договора и возможного ухудшения Вашей кредитной истории в этой связи.\n' +
        '\n' +
        'Уточненный график платежей размещен в Вашем Личном кабинете.\n' +
        '\n' +
        'С уважением,\n' +
        '\n' +
        'ООО МФК «ВЭББАНКИР».',
      emailCreditHolidaysDocumentsHaveNotBeenProvided: 'Уважаемый …!\n' +
        '\n' +
        'Извещаем Вас о том, что по состоянию на (сегодняшнее число) документы, подтверждающие Ваше требование на установление льготного периода по договору нецелевого потребительского займа (микрозайма) № ___ от __.__.____ г. в адрес Общества не поступили.\n' +
        '\n' +
        'Ранее Общество извещало Вас о том, что непредоставление документов, подтверждающих наличие условий для установления льготного периода по договору нецелевого потребительского займа (микрозайма), влечет за собой признание льготного периода неустановленным, а условия договора неизмененными, включая начисление санкций за ненадлежащее исполнение обязательств в соответствии с условиями договора и возможного ухудшения Вашей кредитной истории в этой связи.\n' +
        '\n' +
        'Уточненный график платежей размещен в Вашем Личном кабинете.\n' +
        '\n' +
        'С уважением,\n' +
        '\n' +
        'ООО МФК «ВЭББАНКИР».',
      autoEmailCreditHolidaysAcceptanceNotice: 'Уважаемый *И.О. Клиента*, мы получили от Вас требование о предоставлении льготного периода по договору нецелевого потребительского займа.\n' +
        '\n' +
        'Начало льготного периода: __.__.__\n' +
        '\n' +
        'Согласно ч. 7 ст. 6 ФЗ «О внесении изменений в Федеральный закон «О Центральном банке Российской Федерации (Банке России)» и отдельные законодательные акты Российской Федерации в части особенностей изменения условий кредитного договора, договора займа» в срок не позднее 90 дней, с момента направления Вами требования о льготном периоде, Вам необходимо предоставить документы, подтверждающие снижение Вашего дохода более, чем на 30 % по сравнению со среднемесячным доходом за 2019 г., за месяц, предшествующий Вашему требованию. Такими документами могут быть:\n' +
        '\n' +
        'справка о полученных физическим лицом доходах и удержанных суммах налога (по форме 2-НДФЛ), за текущий год и за 2019 год;\n' +
        '\n' +
        'выписка из регистра получателей государственных услуг в сфере занятости населения - физических лиц о регистрации гражданина в качестве безработного;\n' +
        '\n' +
        'листок нетрудоспособности на срок не менее одного месяца;\n' +
        '\n' +
        'а также иные дополнительные документы (помимо вышеуказанных документов), свидетельствующие о снижении Вашего дохода.\n' +
        '\n' +
        'Просим данные документы предварительно направить нам в электронном виде на адрес электронной почты: info@webbankir.com.\n' +
        '\n' +
        'Информируем Вас, что ООО МФК «ВЭББАНКИР» имеет право осуществить проверку сведений и документов, подтверждающих наличие условий для установления Вам льготного периода, и в случае неподтверждения таких оснований, а равно в случае предоставления Вами недостоверных сведений и/или документов, льготный период будет признан не установленным, а условия договора неизмененными, включая начисление неустойки за ненадлежащее исполнение обязательств в соответствии с условиями договора и возможного ухудшения Вашей кредитной истории в этой связи.',
    }
  },
  channel: {
    incomingCall: 'Входящий звонок',
    outgoingAutodialCall: 'Исходящий звонок (авто)',
    outgoingManualCall: 'Исходящий звонок (ручн)',
    website: 'Сайт',
    messenger: 'Мессенджер',
    social: 'Соц. сеть.',
    sms: 'СМС',
    email: 'email',
    autoInformer: 'Автоинформер',
    unknown: 'Не известно'
  },
  promises: {
    notFulfilled: 'Не выполнено',
    fulfilled: 'Выполнено',
    partiallyFulfilled: 'Выполнено частично',
    prolonged: 'Пролонгировано',
    unknown: 'Нет данных'
  },
  errors: {
    required: 'Обязательно для заполнения'
  },
  headings: {
    calcFullPayment: 'Расчет полной оплаты',
    calcPartialPayment: 'Расчет частичной оплаты',
    calcRenewal: 'Расчет пролонгации',
    renewalDate: 'Дата обещания пролонгации',
    calcInstallment: 'Расчет рассрочки',
    amnesty: 'Расчет безусловного списания',
    calcPartialRelief: 'Расчет прощения',
    dateSum: 'Сумма на дату',
    remainedDebt: 'Остаток долга',
    renewalSum: 'Сумма для пролонгации',
    securityPayment: 'Обеспечительный платеж',
    partialReliefSum: 'Сумма прощения',
    paymentsSchedule: 'График платежей',
    gracePeriod: 'Льготный период',
  },
  placeholders: {
    currentDate: 'Текущая дата',
    payment: 'Сумма платежа',
    daysAmount: 'Количество дней',
    monthsAmount: 'Количество месяцев',
    percent: 'Процент',
    textArea: 'Деньги ждут Вас. Введите код подтверждения #КодПодтверждения# в личном кабинете',
    months: 'мес.',
    days: 'дн.',

  },
  sends: {
    text: 'Текст к отправке'
  },
  filters: {
    sms: 'SMS',
    email: 'Email',
    site: 'Сайт',
    noResult: 'Без результатов'
  },
  histories: {
    titles: {
      comments: 'История коммуникаций',
      accruals: 'История начислений',
      credits: 'Кредитная история',
      loans: 'История займов PDL',
      delays: 'История рассрочки',
      bundles: 'Связи данных',
      promises: 'Обещания об оплате',
      payments: 'История платежей',
      longs: 'История пролонгаций'
    }
  },
  notify: {
    communicationAdded: 'Коммуникация успешно добавлена.',
    communicationSaved: 'Коммуникация успешно сохранена.',
    addingAgreementTitle: 'Внимание! Создаётся Доп. Соглашение!',
    addingAgreementQuestion: 'Это действие нельзя отменить! Вы уверены?',
    addingAgreementOk: 'Да, создаем ДС!',
    addingAgreementCancel: 'Нет, отбой',
    isHardPromise: 'Дата выполнения обещания выходит на Хард!'
  },
  timeout: {
    message: 'В ближайшее время поступит новый звонок!'
  },
  schedule: {
    '#': '#',
    index: '№',
    paymentAmount: 'Сумма платежа',
    paymentDate: 'Дата платежа',
    paymentFact: 'Фатический платеж',
    paymentStatus: 'Статус'
  },
  notificationsTable: {
    title: 'Уведомления за:',
    today: 'Сегодня',
    thisWeek: 'Неделю',
    thisMonth: 'Месяц',
    unknown: 'Нет данных'
  },
  comments: {
    amnesty: 'Создано ДС на безусловное списание: к оплате {newPrincipalDebt}, к списанию {amount}'
  }
}
