import { QIcon } from 'quasar'

export default {
  name: 'IconCustom',
  props: {
    props: Object,
    size: String
  },
  render (h) {
    return h(QIcon, {
      props: {
        name: this.props.name,
        color: this.props.color,
        size: this.size
      }
    })
  }
}
