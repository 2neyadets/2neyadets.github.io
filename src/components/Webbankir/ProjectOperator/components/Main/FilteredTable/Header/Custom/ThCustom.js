
export default {
  name: 'ThCustom',
  props: {
    props: Object,
    autoWidth: Boolean
  },
  render (h) {
    if (!this.props) {
      return h('td', {
        class: { 'q-table-col-auto-width': this.autoWidth }
      }, this.$slots.default)
    }

    let col
    const
      name = this.$vnode.key,
      child = [].concat(this.$slots.default)

    if (name) {
      col = this.props.colsMap[name]
      if (!col) {
        return
      }
    } else {
      col = this.props.col
    }

    return h('th', {
      style: col.style,
      class: [col.__thClass, {
        'q-table-col-auto-width': this.autoWidth
      }],
    }, child)
  }
}
