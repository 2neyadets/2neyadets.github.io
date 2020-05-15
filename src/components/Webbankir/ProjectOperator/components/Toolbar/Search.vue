<template lang="pug">
  .search
    q-select(
      v-model="model"
      :options="options"
      @input="selected"
      @filter="filterFn"
      placeholder="Найти клиента"
      :loading="loading"
      text-color="white"
      color="white"
      bg-color="WB-primary"
      use-input
      hide-selected
      fill-input
      input-debounce="1000"
      hide-dropdown-icon
      dense
      :dark="false"
      options-dense
      standout
      clearable
      :disable="$operatorWB.layout.isCallingCard"
    )
      template(slot="prepend")
        q-icon.cursor-pointer(
          name="search"
          @click="search(query)"
        )
      template(slot="option" slot-scope="props")
        q-item(v-bind="props.itemProps" v-on="props.itemEvents")
          q-item-section
            q-item-label
              .text-black {{ props.opt.label }}
            q-item-label(caption) {{ props.opt.sublabel }}
          q-item-section(avatar)
            q-item-label(caption) {{ props.opt.stamp }}
</template>

<script>
import api from 'src/api'
import { changeDateFormat } from 'src/utils/helpers'

export default {
  name: 'Search',

  data () {
    return {
      query: null,
      model: null,
      options: [],
      loading: false
    }
  },
  methods: {
    async search (query) {
      this.loading = true
      const res = await api.crm.getClientsList()
      this.loading = false
      const arr = res.data.clients.map(item => ({
        id: item.id,
        value: item.fullName,
        label: item.fullName,
        sublabel: `(ID: ${item.id}) | ${item.mainProduct.client.city} ${item.mainProduct.client.phone ? `| ${item.mainProduct.client.phone}` : ''} ${item.mainProduct.product.group.name ? `| ${item.mainProduct.product.group.name}` : ''}`,
        stamp: changeDateFormat(item.mainProduct.client.birthDate, 'YYYY-MM-DD')
      }))
      return arr.filter(item => item.label.toLowerCase().includes(query.toLowerCase())).slice(0, 20)
    },
    selected (item) {
      if (item) {
        this.$operatorWB.layout.openClientCard({
          clientId: item.id,
          source: 'search',
          cardType: 'classic'
        })
      }
    },
    async filterFn (val, update, abort) {
      this.query = val
      if (!val || val.length < 1) {
        this.options = []
        abort()
        return
      }
      this.options = await this.search(val)
      update()
    }
  },
  watch: {
    '$operatorWB.user.token' (v) {
      this.model = null
    }
  }
}
</script>

<style scoped lang="stylus">
  .q-select
    width 400px
</style>
