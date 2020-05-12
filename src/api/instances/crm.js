import axios from 'axios'
import { notify } from 'src/utils/helpers'
import { i18n } from 'boot/i18n'

const instance = axios.create({
  baseURL: 'https://bankir.com/',
  timeout: 30000
})

instance.interceptors.request.use(
  conf => conf,
  error => {
    return Promise.reject(error)
  })

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      notify({ message: i18n.t('notify.networkError', { status: error.response.status }) })
    }
    return Promise.reject(error.response.data)
  }
)
export default instance
