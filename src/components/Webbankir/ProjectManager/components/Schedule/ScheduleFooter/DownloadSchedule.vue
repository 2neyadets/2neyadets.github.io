<template lang="pug">
  download-xlsx(
    :data="$managerWB.schedule.tableDataForDownload"
    :columns="$managerWB.schedule.columnsForDownload"
    :filename="filename"
    :sheetname="$managerWB.schedule.monthAndYear"
  )
    q-btn(
      :loading="$managerWB.schedule.loading"
      :color="$managerWB.schedule.loading ? '' : 'info'"
      label="Скачать Excel"
      icon-right="cloud_download"
    )
      template(#loading)
        q-skeleton.full-width.full-height
</template>

<script>
import DownloadXlsx from '../../DownloadXLSX/index'

export default {
  name: 'DownloadSchedule',
  components: { DownloadXlsx },
  data () {
    return {
    }
  },
  computed: {
    filename () {
      return `${this.$managerWB.schedule.monthAndYear}_${Date.now()}`
    },
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
</style>
