import _ from 'lodash'
import { holidays } from './holydays2020'
import { Notify, date, LocalStorage } from 'quasar'
import { i18n } from '../boot/i18n'

const { formatDate, extractDate, subtractFromDate } = date

const TZ = -new Date().getTimezoneOffset() / 60

export const notify = (obj = {}, customBtn = {}) => {
  const actions = Object.keys(customBtn).length ? [customBtn] : []
  actions.push({
    label: i18n.t('notify.hide'),
    color: obj.textColor || 'white'
  })
  return Notify.create({
    message: obj.message || '',
    caption: obj.caption || '',
    color: obj.color || 'negative',
    textColor: obj.textColor || 'white',
    position: obj.position || 'bottom-left',
    icon: obj.icon || 'warning',
    progress: obj.progress || true,
    html: obj.html || true,
    timeout: obj.timeout || 10000,
    actions
  })
}

export const actionNotAvailableNotify = (context) => {
  if (!context.$operatorWB.layout.cancelWBOperatorActionNotAvailableNotify) {
    notify({
      message: i18n.t('notify.actionNotAvailable'),
      color: context.$app.layout.activeColor,
      textColor: context.$app.layout.activeTextColor,
      icon: 'lock',
      timeout: 5000,
    }, {
      label: i18n.t('notify.dontShowAgain'),
      color: context.$app.layout.activeTextColor,
      handler: () => {
        LocalStorage.set('cancelWBOperatorActionNotAvailableNotify', true)
        context.$operatorWB.layout.cancelWBOperatorActionNotAvailableNotify = true
      }
    })
  }
  return {}
}

export function isRelevantStringValue (value, criteria = '', type = null) {
  if (!criteria) return true
  const pos = (value + '').toLowerCase().indexOf((criteria + '').toLowerCase())
  return 0 ||
    (type === 'first' && pos === 0) ||
    (type !== 'first' && pos !== -1)
}

export function isRelevantRangeValueNumber (value, criteria = {
  min: null,
  max: null
}) {
  if (criteria.min === null && criteria.max === null) {
    if (criteria.notNull === true) {
      return !!value
    } else {
      return true
    }
  }
  const ret = value
    ? _.gte(value, criteria.min) && _.lte(value, criteria.max)
    : !criteria.notNull

  return ret
}

export function isRelevantRangeValueDateString (value, criteria = {
  notNull: false,
  min: null,
  max: null
}) {
  if (criteria.min === null && criteria.max === null) return true
  const ret = value
    ? Date.parse(value) >= Date.parse(criteria.min) && Date.parse(value) <= Date.parse(criteria.max)
    : !criteria.notNull
  return ret
}

export function isRelevantCell (value, criteria, col) {
  let isRelevant = true
  switch (col.type) {
    case 'text':
    case 'string':
      isRelevant = isRelevantStringValue(value, criteria, col.search)
      break
    case 'number':
    case 'range':
      isRelevant = isRelevantRangeValueNumber(value, criteria)
      break
    case 'date':
    case 'datetime':
      isRelevant = isRelevantRangeValueDateString(value, criteria)
      break
  }
  return isRelevant
}

export function isRelevantRow (cols, row, criterias = {}) {
  if (isRelevantRow.cols !== cols) {
    isRelevantRow.hashCols = cols.reduce((hash, column) => {
      hash[column.field] = column
      return hash
    }, {})
    isRelevantRow.cols = cols
  }
  return Object.keys(criterias)
    .filter(criteriaID => {
      return criterias[criteriaID]
    })
    .every(criteriaID => {
      switch (criteriaID) {
        case 'fulltext': {
          return Object.keys(row).some(fieldID => {
            return isRelevantStringValue(row[fieldID], criterias[criteriaID])
          })
        }
        default: {
          const criteria = criterias[criteriaID]
          const col = isRelevantRow.hashCols[criteriaID]
          const value = row[criteriaID]
          return isRelevantCell(value, criteria, col)
        }
      }
    })
}

export function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

export function sortDate (a, b) {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}

export function queries (filters, col, value) {
  if (filters[col]) {
    const re = new RegExp(filters[col], 'gi')
    const res = value.match(re)
    return res ? [...res] : []
  }
  return []
}

export function secondsToHms (d) {
  d = Number(d)
  const h = Math.floor(d / 3600)
  const m = Math.floor(d % 3600 / 60)
  const s = Math.floor(d % 3600 % 60)
  return ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2)
}

export const money = (val, sign = false) => {
  const value = Number(val).toLocaleString('ru-RU', { minimumFractionDigits: 2 })
  return value + (sign ? ' ₽' : '')
}

export const getShortDate = date => {
  if (!date) return null
  return formatDate(subtractFromDate(date, { hours: TZ > 3 ? TZ - 3 : 0 }), 'DD.MM.YYYY')
}
export const getDateTime = date => {
  if (!date) return null
  return formatDate(subtractFromDate(date, { hours: TZ > 3 ? TZ - 3 : 0 }), 'DD.MM.YYYY HH:mm:ss')
}

export const getTimezoneName = tz => i18n.t(`clients.timezone[${(tz || 3)}]`)

export const getTimezoneDigits = tz => `+${tz < 10 ? '0' + tz : tz}`

export const changeDateFormat = (dateString = '', inputFormat = 'YYYY/MM/DD', outputFormat = 'DD.MM.YYYY') => {
  const result = formatDate(extractDate(dateString, inputFormat), outputFormat)
  if (result) return result
  return ''
}

export const isHoliday = date => {
  const today = date || formatDate(new Date(), 'YYYY-MM-DD')
  return holidays.includes(today)
}
