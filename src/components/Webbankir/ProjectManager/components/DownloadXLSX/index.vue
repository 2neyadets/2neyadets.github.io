<template lang="pug">
  span(@click="exportExcel")
    slot
</template>

<script>
import XLSX from 'xlsx/xlsx'

export default {
  name: 'download-xlsx',

  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    filename: {
      type: String,
      default: () => 'excel'
    },
    sheetname: {
      type: String,
      default: () => 'SheetName'
    }
  },

  methods: {
    exportExcel () {
      const createXLSLFormatObj = []
      const newXlsHeader = []
      const vm = this
      if (vm.columns.length === 0) {
        return
      }
      if (vm.data.length === 0) {
        return
      }
      vm.columns.forEach(value => {
        newXlsHeader.push(value.label)
      })

      createXLSLFormatObj.push(newXlsHeader)
      vm.data.forEach(value => {
        const innerRowData = []
        vm.columns.forEach(val => {
          if (val.dataFormat && typeof val.dataFormat === 'function') {
            innerRowData.push(val.dataFormat(value[val.field]))
          } else {
            innerRowData.push(value[val.field])
          }
        })
        createXLSLFormatObj.push(innerRowData)
      })

      const filename = vm.filename + '.xlsx'

      const wsName = vm.sheetname

      const wb = XLSX.utils.book_new(),
        ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj)
      XLSX.utils.book_append_sheet(wb, ws, wsName)
      XLSX.writeFile(wb, filename)
    }
  }
}
</script>
