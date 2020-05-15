<template lang="pug">
  RatingsTable(
    :tableData="tableData"
    :options="options"
    :excelData="excelData"
    :excelCols="excelCols"
    :excelRows="excelRows"
    :colsPeriods="colsPeriods"
    :totalSum="totalSum"
    :role="'hard'"
    :filename="filename"
  )
</template>

<script>
import options from './options'
import { formatDate } from 'quasar/src/utils/date'
import { orderBy } from 'lodash'
import RatingsTable from '../RatingTable'

export default {
  name: 'HardRatings',
  components: { RatingsTable },
  data () {
    return {
      options,
    }
  },
  created () {
    if (!this.tableData.length) this.$managerWB.user.getRatings()
  },
  computed: {
    tableData () {
      const groups = (this.$managerWB.user.ratings && this.$managerWB.user.ratings.groups) || []
      if (!groups) return []
      const result = groups.map(group => {
        const valuesMonthly = Object.keys(group.indicators.monthly).map(item => {
          return {
            period: item,
            label: formatDate(item, 'MMMM'),
            value: group.indicators.monthly[item]
          }
        })
        if (valuesMonthly.length > 3) valuesMonthly.splice(0, valuesMonthly.length - 3)
        const valuesDaily = Object.keys(group.indicators.daily).map(item => {
          return {
            period: item,
            label: formatDate(item, 'DD.MM.YYYY'),
            value: group.indicators.daily[item]
          }
        })
        return {
          fullName: group.employeeFullName,
          groupName: group.name,
          groupId: group.id,
          values: valuesMonthly.concat(valuesDaily)
        }
      })
      return orderBy(result, ['fullName'], ['asc'])
    },
    filename () {
      return `hardRatings_${formatDate(Date.now(), 'YYYY-MM-DD_HH-mm-ssZZ')}_${Date.now()}`
    },
    colsPeriods () {
      if (!this.tableData.length) return ['Первый', 'Второй', 'Третий', 'Вчера', 'Сегодня'].map(item => ({ label: item }))
      return this.tableData[0].values.map(item => {
        return {
          name: item.period,
          label: item.label,
        }
      })
    },
    excelRows () {
      if (!this.tableData.length) return []
      return this.tableData.map(item => {
        const r = {}
        r.name = `${item.fullName} (${item.groupName})`
        item.values.forEach((val, idx) => {
          r['amount_' + idx] = Number(val.value.amount).toFixed(2)
          r['rating_' + idx] = Number(val.value.rating).toFixed(2)
        })
        return r
      })
    },
    totalSum () {
      if (!this.excelRows.length) return {}
      const rows = this.excelRows
      const keys = Object.keys(rows[0])
      keys.splice(keys.indexOf('name'), 1)
      const sum = rows.reduce((acc, row) => {
        keys.forEach(key => {
          if (acc[key] === undefined) acc[key] = 0
          if (key.includes('rating')) acc[key] = ''
          if (key.includes('amount')) acc[key] += row[key].replace(',', '.') * 1
        })
        return acc
      }, { name: 'Сумма:' })
      Object.keys(sum).forEach(key => {
        if (key.includes('amount') && typeof sum[key] === 'number') sum[key] = sum[key].toFixed(2)
      })
      return sum
    },
    excelData () {
      const arr = [...this.excelRows]
      arr.push(this.totalSum)
      return arr
    },
    excelCols () {
      if (!this.tableData.length) return []
      const headers = []
      headers.push({
        label: 'Сотрудник',
        field: 'name',
      })

      this.tableData[0].values.forEach((val, idx) => {
        headers.push({
          label: val.label + ' / сборы ',
          field: 'amount_' + idx,
          dataFormat: val => parseFloat(val)
        })
        headers.push({
          label: val.label + ' / рейтинг ',
          field: 'rating_' + idx,
          dataFormat: val => val ? Math.round(val) : ''
        })
      })
      return headers
    }
  }
}
</script>

<style lang="stylus">
</style>
