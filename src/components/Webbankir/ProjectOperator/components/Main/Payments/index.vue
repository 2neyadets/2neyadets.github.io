<template lang="pug">

  q-card.card.brx5.pretty-table.q-pa-xs
    PaymentsTable

</template>

<script>
import PeriodSelector from './Table/PeriodSelector'
import { getQuarter, getBeforeQuarterStart } from 'src/utils/mappers'
import PaymentsTable from './Table/index'

export default {
  name: 'PaymentsReport',
  components: {
    PaymentsTable,
    PeriodSelector
  },
  data () {
    return {
      getQuarter,
      getBeforeQuarterStart
    }
  }
}
</script>

<style scoped>
</style>
