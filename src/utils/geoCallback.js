import { i18n } from 'boot/i18n'
import { LocalStorage } from 'quasar'
import api from 'src/api'
import { notify } from 'src/utils/helpers'

export const geolocationSuccess = async (coords) => {
  if (coords.accuracy > 50000) {
    if (LocalStorage.getItem('cancelGeolocationNotify')) return false
    notify({
      message: i18n.t('notify.geolocationFailureAccuracy'),
      caption: i18n.t('notify.bigAccuracy'),
    }, {
      label: i18n.t('notify.dontShowAgain'),
      textColor: 'white',
      handler: () => LocalStorage.set('cancelGeolocationNotify', true)
    })
    return false
  }
  const address = await api.geo.getLocationByCoordinates(coords)
  if (address && address.country_code && address.country_code !== 'ru' && !LocalStorage.has('lang')) {
    return 'en-us'
  }
  return false
}

export const geolocationFailure = async (coords) => {
  if (LocalStorage.getItem('cancelGeolocationNotify')) return false
  notify({
    message: i18n.t('notify.geolocationFailure'),
    caption: LocalStorage.has('lang') ? '' : i18n.t('notify.languageChanged', { language: i18n.t('lang.ru') }),
    color: 'warning',
    textColor: 'black',
    icon: 'priority_high',
  }, {
    label: i18n.t('notify.dontShowAgain'),
    textColor: 'black',
    handler: () => LocalStorage.set('cancelGeolocationNotify', true)
  })
}
