<template lang="pug">
  .column.borrower.ovh.card-block
    .row.profile-block.q-ml-xs
      .col.main(:class="$operatorWB.layout.isApplicationCard ? 'q-pr-sm' : ''")
        Profile(:client="clientInfo")
      .col.debt.q-mr-xs(v-if="!$operatorWB.layout.isApplicationCard")
        Debt
</template>

<script>
import Profile from './Profile'
import Debt from './Debt'

export default {
  name: 'Borrower',
  components: {
    Profile,
    Debt
  },
  data () {
    return {
    }
  },
  computed: {
    clientInfo () {
      return (this.$operatorWB.layout.currentCard && this.$operatorWB.layout.isApplicationCard)
        ? this.$operatorWB.applications.get('item.profile')
        : this.$operatorWB.clients.currentClient
    }
  }
}
</script>

<style scoped lang="stylus">
  .borrower
    /*height: 550px*/

    .debt
      max-width 240px
      margin-left: 5px

    pre
      background: rgba(white, .8)
      padding 10px
      left 650px
      top 0
      border 1px dashed red
</style>
