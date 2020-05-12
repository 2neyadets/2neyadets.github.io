<template lang="pug">
  q-table.brs5(
    :columns="columns"
    :data="data"
    :pagination.sync="pagination"
    row-key="name" color="WB-secondary"
    hide-bottom
    separator="cell"
    :dark="false"
  )
</template>

<script>
export default {
  name: 'HistoryTable',
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      pagination: {
        rowsPerPage: 0
      }
    }
  }
}
</script>

<style scoped>

</style>
