import { date } from 'quasar'

const { formatDate } = date

export const communicationSchemeClassic = ({ isHard, isSoft, isCall, isUnder, isSuper }) => {
  const blank = [
    'blank'
  ]
  const creditHolidays = [
    'jobLoss',
    'incomeDecline',
    'sickLeave',
    'undefinedChannel'
  ]

  if (isHard) {
    creditHolidays.push(
      'promiseOfInstallment',
      'promiseToRepayInFullHard',
      'promiseToRepayPartiallyHard',
      'amnesty'
    )
  } else if (isSoft || isCall) {
    creditHolidays.push(
      'promiseOfRenewal',
      'promiseToRepayInFull',
      'promiseToRepayPartially',
      'renewal'
    )
  }
  if (isSuper) creditHolidays.push('creditHolidays')
  creditHolidays.push('other')

  const withoutClientContact = [
    'withoutClientContact',
  ]
  let contactWithClient = []
  if (isHard) {
    contactWithClient = [
      'promiseOfInstallment',
      'promiseToRepayInFullHard',
      'promiseToRepayPartiallyHard',
      'clientPaid',
      'amnesty',
      'failureToPay',
      'failureToIdentify',
      'failureToInteract',
      'refusalToPay',
      'clientWentBankrupt',
      'needToCallback',
      'didNotGetLoan',
      'other',
    ]
  } else if (isSoft) {
    contactWithClient = [
      'promiseOfRenewal',
      'promiseToRepayInFull',
      'promiseToRepayPartially',
      'renewal',
      'failureToPay',
      'clientPaid',
      'failureToIdentify',
      'failureToInteract',
      'refusalToPay',
      'clientWentBankrupt',
      'needToCallback',
      'didNotGetLoan',
      'other',
    ]
  } else if (isCall) {
    contactWithClient = [
      'promiseOfRenewal',
      'promiseToRepayInFull',
      'promiseToRepayPartially',
      'problemsWithPayment',
      'problemsWithPersonalAccount',
      'problemsWithLoan',
      'problemsWithPos',
      'refusalByAmountReason',
      'refusalByTopicalityReason',
      'refusalByNewApplication',
      'issueTroubles',
      'transferToHard',
      'transferToSoft',
      'transferToPos',
      'negative',
      'other',
    ]
  } else {
    contactWithClient = [
      'clarifyingOfInformation',
      'other',
    ]
  }

  let contactWith3rdPerson = []
  if (isHard || isSoft) {
    contactWith3rdPerson = [
      'promiseToProvideInfo',
      'refusalToProvideInfo',
      'impossibleToProvideInfo',
      'clientIsUnknown',
      'negative',
      'needToCallback',
      'other',
    ]
  } else if (isCall) {
    contactWith3rdPerson = [
      'promiseToProvideInfo',
      'refusalToProvideInfo',
      'impossibleToProvideInfo',
      'clientIsUnknown',
      'transferToHard',
      'transferToSoft',
      'negative',
      'other',
    ]
  } else {
    contactWith3rdPerson = [
      'clarifyingOfInformation',
      'other',
    ]
  }

  let contactWithEmployer = []
  if (isHard || isSoft) {
    contactWithEmployer = [
      'promiseToProvideInfo',
      'refusalToProvideInfo',
      'clientIsUnknown',
      'clientDoesNotWork',
      'negative',
      'needToCallback',
      'other',
    ]
  } else if (isCall) {
    contactWithEmployer = [
      'promiseToProvideInfo',
      'refusalToProvideInfo',
      'clientIsUnknown',
      'clientDoesNotWork',
      'transferToHard',
      'transferToSoft',
      'negative',
      'needToCallback',
      'other',
    ]
  } else {
    contactWithEmployer = ['blank']
  }

  let contactWithRelative = []
  if (isHard || isSoft) {
    contactWithRelative = [
      'promiseToProvideInfo',
      'clientPaid',
      'refusalToProvideInfo',
      'impossibleToProvideInfo',
      'clientHasDied',
      'transferToHard',
      'transferToSoft',
      'negative',
      'needToCallback',
      'other',
    ]
  } else if (isCall) {
    contactWithRelative = [
      'promiseToProvideInfo',
      'clientPaid',
      'refusalToProvideInfo',
      'impossibleToProvideInfo',
      'clientHasDied',
      'negative',
      'needToCallback',
      'other',
    ]
  } else {
    contactWithRelative = ['blank']
  }

  if (isUnder) {
    const result = {
      blank,
      contactWithClient,
      contactWith3rdPerson,
      doesNotRespond: withoutClientContact,
      isNotAvailable: withoutClientContact,
      isDisabled: withoutClientContact,
      redirects: withoutClientContact,
      additionalComment: withoutClientContact,
    }
    if (isSuper) result.supervisorComment = withoutClientContact
    return result
  } else {
    const result = {
      blank,
      creditHolidays,
      contactWithClient,
      contactWith3rdPerson,
      contactWithEmployer,
      contactWithRelative,
      doesNotRespond: withoutClientContact,
      isNotAvailable: withoutClientContact,
      isDisabled: withoutClientContact,
      redirects: withoutClientContact,
      notSetOrSilence: withoutClientContact,
    }
    if (isSuper) result.supervisorComment = withoutClientContact
    return result
  }
}

export const smsScheme = ({ isHard, isSoft, isCall, isUnder, isSuper }) => {
  let scheme
  if (isHard) {
    scheme = [
      'blank',
      'smsInfoOfInstallment',
      'smsWarningOfVisit',
      'smsWarningOfTransferTo3rdPerson',
      'smsWarningOfDebtIncrease',
      'smsDemandOfUrgentPayment',
      'smsWarningOfUnfulfilledPromises',
      'smsInfoOfUnfulfilledPromise',
      'smsReminderOfTodayPromisedPayment',
      'smsWarningOfCourt',
      'smsInfoOfNonReceivedPayment',
      'smsInfoOfDelayedAgreementPayment',
      'smsReminderOfTodayPayment',
      'smsDemandOfObligatoryPayment',
      'smsWarningInCaseOfRefusalToPay',
      'smsOfferOfInstallment',
      'smsReminderOfPromisedPayment',
      'smsOfferOfAmnesty',
      'smsOfferOfUpTo6MonthInstallment',
      'smsInfoOfPaymentDetails',
      'smsReminderOfTodayAgreementPayment',
      'smsDemandOfContact',
      'smsWarningInCaseOfRefusalToContact',
    ]
  } else if (isSoft) {
    scheme = [
      'blank',
      'smsWarningOfUnfulfilledPromise',
      'smsReminderOfPayment',
    ]
  } else if (isCall) {
    scheme = [
      'blank',
    ]
  } else if (isUnder) {
    scheme = [
      'blank',
    ]
  }
  return scheme
}

export const emailScheme = ({ isHard, isSoft, isCall, isUnder, isSuper }) => {
  let scheme
  if (isHard) {
    scheme = [
      'blank',
      'emailReminderOfOverdueDebt',
      'emailWarningOfVisit',
      'emailWarningOfTransferTo3rdPerson',
      'emailOfferOfInstallment',
    ]
  } else if (isSoft) {
    scheme = [
      'blank',
    ]
  } else if (isCall) {
    scheme = [
      'blank',
    ]
  } else if (isUnder) {
    scheme = [
      'blank',
    ]
  }
  return scheme
}

export const optionsForCallForward = () => {
  return [
    'blank',
    'hardAll',
    'hardMoscow',
    'hardYaroslavl',
    'softAll',
    'callCenter',
    'underwriting',
    'other'
  ]
}

export const colorClass = (value) => {
  let colorClass = ''
  if (value <= 4) {
    colorClass = 'green'
  } else if (value >= 4 && value <= 30) {
    colorClass = 'orange'
  } else {
    colorClass = 'red'
  }
  return colorClass
}

export const num2words = (num, words) => {
  if (words === 'day') {
    words = ['день', 'дня', 'дней']
  }
  if (words === 'proc') {
    words = ['процент', 'процента', 'процентов']
  }
  if (words === 'rub') {
    words = ['рубль', 'рубля', 'рублей']
  }
  if (words === 'credit') {
    words = ['займ', 'займа', 'займов']
  }
  if (words === 'ребенок') {
    words = ['ребенок', 'детей', 'ребенка']
  }

  num = num % 100
  if (num > 19) {
    num = num % 10
  }

  switch (num) {
    case 1: {
      return words[0]
    }
    case 2:
    case 3:
    case 4: {
      return words[1]
    }
    case 0: {
      return words[1]
    }
    default: {
      return words[2]
    }
  }
}
export const isSoftPromise = (result) => {
  return [
    'promiseToRepayInFull',
    'promiseToRepayPartially',
    'promiseOfRenewal',
  ].includes(result)
}
export const isHardPromise = (result) => {
  return [
    'promiseToRepayInFullHard',
    'promiseToRepayPartiallyHard',
    'promiseOfInstallment'
  ].includes(result)
}
export const isPromiseAgreement = (result) => {
  return [
    'promiseOfRenewal',
    // 'promiseOfInstallment'
  ].includes(result)
}
export const isAction = (result) => {
  return [
    'renewal',
    'installment',
    'amnesty',
    'jobLoss',
    'incomeDecline',
    'sickLeave',
    'creditHolidays'
  ].includes(result)
}

export const currentPeriod = (date, real = false, daily = false) => {
  let now = date || new Date()
  if (daily) {
    now = new Date()
  }
  if (date && !real) now.setDate(1)
  if (!date) {
    if (now.getDate() === 1) {
      now.setDate(0)
    }
    now.setDate(1)
  }
  return formatDate(now, 'YYYY-MM-DD')
}
export const getQuarterMonth = (current = false) => {
  const now = new Date()
  const last = new Date(now.getFullYear(), now.getMonth() - 3, 1)
  const quarter = getQuarter(!current && last)
  const firstMonth = new Date(now.getFullYear() - (quarter === 4 ? 1 : 0), quarter * 3, 1)
  const secondMonth = new Date(firstMonth.getFullYear(), firstMonth.getMonth() + 2, 0)
  const thirdMonth = new Date(firstMonth.getFullYear(), firstMonth.getMonth() + 3, 0)
  const periods = [currentPeriod(firstMonth), currentPeriod(secondMonth), currentPeriod(thirdMonth)]
  return current ? periods : periods.reverse()
}

export const getQuarter = (d) => {
  d = d || new Date() // If no date supplied, use today
  const q = [4, 1, 2, 3]
  return q[Math.floor(d.getMonth() / 3)]
}

export const getBeforeQuarterStart = (d) => {
  d = d || new Date() // If no date supplied, use today
  const q = [4, 1, 2, 3]
  const curIndex = Math.floor(d.getMonth() / 3) - 1
  const beforeIndex = curIndex === -1 ? 3 : curIndex
  const beforeQuarter = q[beforeIndex]

  const firstMonth = new Date(
    d.getFullYear() - ((beforeQuarter === 4 || beforeQuarter === 3) ? 1 : 0),
    beforeQuarter * 3,
    1,
    -1 * d.getTimezoneOffset() / 60,
    0,
    0
  )
  return firstMonth
}
