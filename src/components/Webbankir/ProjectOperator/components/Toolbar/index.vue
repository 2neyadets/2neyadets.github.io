<template lang="pug">
  q-toolbar.main-toolbar.bg-WB-dark.q-px-sm.no-wrap
    .row.items-center.justify-between.no-wrap.full-width
      .row.items-center.justify-start.no-wrap
        q-btn.button(flat color="red" @click="safeLogout")
          q-icon(class="fas fa-sign-out-alt")
        span.loans-list-header__title
          span {{$operatorWB.user.shortName}}
        Search.search-client.q-ml-md
        OpenedCards.q-mr-sm
      .row.items-center.justify-end.no-wrap
        q-btn.q-mx-sm(
          v-if="$operatorWB.layout.clientCardModalOpened"
          @click="$operatorWB.layout.returnToListOfClients({source: 'toolbar'})"
          size="small"
          color="WB-primary"
          :disable="$operatorWB.layout.isCallingCard"
        )
          .flex.no-wrap
            q-icon.q-mr-sm(name="fa fa-arrow-right")
            .text-no-wrap(v-html="$t('toolbar.backToList')")

        template(v-if="$operatorWB.user.isUserHaveRoles('operatorHard')")
          ContractsButton
          PaymentsButton
          OperatorHardScores.q-ml-sm
</template>

<script>
import Search from './Search'
import OpenedCards from './OpenedCards'
import OperatorHardScores from './OperatorHardScores'
import PaymentsButton from './RouteBtns/PaymentsButton'
import ContractsButton from './RouteBtns/ContractsButton'

export default {
  name: 'Toolbar',
  components: {
    ContractsButton,
    PaymentsButton,
    Search,
    OpenedCards,
    OperatorHardScores
  },
  data () {
    return {
      shortStat: false,
      fullStat: false
    }
  },
  computed: {
    disabled () {
      return !!this.$operatorWB.calls.currentCall
    }
  },
  methods: {
    safeLogout () {
      if (this.$operatorWB.layout.openedCards.length > 0) {
        this.$operatorWB.messages.show({
          position: 'top-right',
          message: this.$t('clients.card.alert.close'),
          timeout: 1000
        })
      } else {
        this.$operatorWB.user.logout()
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .search-client
    margin-left: 16px

  .back-to-list
    font-size: 12px
    margin-right: 20px
    color: white
    background: #008AB7
    text-transform: initial
    height: 25px

  .loans-list-header__title
    display: flex
    align-items: center
    justify-content: space-around
    font-size: 12px
    min-width: 130px
    user-select: none
    margin-right: 5px

  .user-departament_icon
    margin: 0 15px

</style>
