<template lang="pug">
  q-card.card.brx5.pretty-table.q-pa-xs
    HardTable
</template>

<script>
import HardTable from './Table/index'
import { notify } from 'src/utils/helpers'
import { LocalStorage } from 'quasar'

export default {
  name: 'Hard',
  components: { HardTable },
  created () {
    if (!this.$operatorWB.layout.cancelWBOperatorDblClickNotify && this.$q.platform.is.desktop) {
      notify({
        message: this.$t('wb.notify.dblClick'),
        color: this.$app.layout.activeColor,
        textColor: this.$app.layout.activeTextColor,
        icon: 'mouse',
        timeout: 8000,
      }, {
        label: this.$t('notify.dontShowAgain'),
        color: this.$app.layout.activeTextColor,
        handler: () => {
          LocalStorage.set('cancelWBOperatorDblClickNotify', true)
          this.$operatorWB.layout.cancelWBOperatorDblClickNotify = true
        }
      })
    }
  }
}

</script>

<style scoped lang="stylus">

</style>
