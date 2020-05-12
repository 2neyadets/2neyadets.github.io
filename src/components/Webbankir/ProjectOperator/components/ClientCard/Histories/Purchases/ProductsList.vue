<template lang="pug">
  q-table(
    :columns="columns"
    :data="products"
    row-key="id"
    :pagination="pagination"
    hide-bottom
    separator="cell"
  )
    q-tr(slot="body" slot-scope="props" :data-prop="props")
      q-td(v-for="col in props.cols" :key="col.name" :props="props")
        template(v-if="col.name === 'status'" )
          strong(
            :class="{'text-positive': col.value === 'not_returned', 'text-negative': col.value === 'returned'}"
          ) {{ $t('histories.purchases.status.' + col.value) }}

        template(v-else)
          span {{ col.value }}

</template>

<script>
import { money } from 'src/utils/helpers'

export default {
  name: 'ProductsList',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      pagination: {
        page: 1,
        rowsPerPage: 10
      },
      columns: [
        {
          name: 'name',
          label: this.$t('histories.products.name'),
          field: 'name',
          required: true,
          align: 'left'
        },
        {
          name: 'price',
          label: this.$t('histories.products.price'),
          field: row => money(row.price),
          required: true,
          align: 'right'
        },
        {
          name: 'status',
          label: this.$t('histories.products.status'),
          field: 'status',
          required: true,
          align: 'center'
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>
