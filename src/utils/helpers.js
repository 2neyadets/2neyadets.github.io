import { Notify } from 'quasar'
import { i18n } from 'boot/i18n'

export const notify = (obj = {}, customBtn = {}) => {
  const actions = Object.keys(customBtn).length ? [customBtn] : []
  actions.push({ label: i18n.t('notify.hide'), color: obj.textColor || 'white' })
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
