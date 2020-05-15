<template lang="pug">
  div(:class="`${role}-ratings`")
    q-table(
      :columns="columns"
      :data="tableData"
      bordered
      separator="cell"
      :class="`my-sticky-header-table-${role}`"
      :pagination.sync="pagination"
      :diasble="$managerWB.user.loading.ratings"
      :loading="$managerWB.user.loading.ratings"
      row-key="name"
      color="WB-secondary"
      dark
    )
      template(#header="props")
        q-tr
          q-th
            download-xlsx(
              v-if="excelRows.length"
              :data="excelData"
              :columns="excelCols"
              :filename="filename"
              :sheetname="`${role}Ratings`"
            )
              q-btn(
                label="Download Excel"
                color="WB-secondary"
                icon="cloud_download"
              )
          template(v-for="col in colsPeriods")
            q-th(
              colspan="2"
              :key="col.name"
            )
              span {{col.label}}
        q-tr
          q-th(
            :props="props"
            v-for="col in props.cols"
            :key="col.name"
          )
            span {{col.label}}

      template(#body="props")
        q-tr
          template(v-for="col in props.cols")
            q-td(:class="['col-' + col.name, 'text-' + col.align]")
              span {{col.value}}
      template(#bottom="props")
        table.q-table.bottom-row
          tbody
            q-tr
              template(v-for="(value, key) in totalSum")
                q-td(:class="['col-' + key, 'text-' + (key === 'name' ? 'right' : 'center')]")
                  template(v-if="key === 'name' || key.includes('rating')")
                    strong {{value}}
                  template(v-else)
                    strong {{money(value)}}
</template>

<script>
import { money } from 'src/utils/helpers'
import DownloadXlsx from '../DownloadXLSX/index'

export default {
  name: 'RatingsTable',
  components: { DownloadXlsx },
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    excelData: {
      type: Array,
      required: true,
    },
    excelCols: {
      type: Array,
      required: true,
    },
    excelRows: {
      type: Array,
      required: true,
    },
    colsPeriods: {
      type: Array,
      required: true,
    },
    totalSum: {
      type: Object,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      ...this.options,
      money
    }
  },
}
</script>

<style lang="stylus">
</style>
