<template lang="pug">
  span.portfolio(:class="$operatorWB.user.isUserSupervisor ? 'cursor-pointer' : ''") {{currentPortfolio}}
    SubMenu(
      v-if="$operatorWB.user.isUserSupervisor"
      @openDialog="showPortfolioDialog = true"
      label="Выберите новый портфель"
    )
    ChooseDialog(
      :show="showPortfolioDialog"
      @close="showPortfolioDialog = false"
      @openAreYouSureDialog="openAreYouSureDialog"
      title="Выбор нового портфеля"
      :optionsForSelect="groupsForSelect"
      placeholder="Начните набирать название портфеля"
    )
    AreYouSureDialog(
      :show="showAreYouSureDialog"
      @close="showAreYouSureDialog = false"
      @closeParent="showPortfolioDialog = false"
      :item="newGroup"
      :question="`Вы уверены, что хотите изменить портфель текущего займа на <strong style='color: red'>${newGroup.label}</strong>?`"
      :func="$operatorWB.loans.changePortfolio"
      :loading="$operatorWB.loans.loading"
    )
</template>

<script>
import SubMenu from './MenusAndDialogs/SubMenu'
import ChooseDialog from './MenusAndDialogs/ChooseDialog'
import AreYouSureDialog from './MenusAndDialogs/AreYouSureDialog'

export default {
  name: 'Portfolio',
  components: {
    AreYouSureDialog,
    ChooseDialog,
    SubMenu
  },
  data () {
    return {
      showPortfolioDialog: false,
      showAreYouSureDialog: false,
      newGroup: {},
    }
  },
  computed: {
    loan () {
      return this.$operatorWB.loans.currentLoan
    },
    currentPortfolio () {
      if (this.$operatorWB.clients.currentLoansDebt.length > 0) {
        // eslint-disable-next-line no-prototype-builtins
        if (this.loan && this.loan.hasOwnProperty('portfolio')) {
          return this.loan.portfolio
        } else {
          return this.$t('loans.portfolio.unknown')
        }
      } else {
        return this.$t('loans.portfolio.unknown')
      }
    },
    groupsForSelect () {
      if (this.$operatorWB.user.groups && this.$operatorWB.user.groups.length) {
        return this.$operatorWB.user.groups.map(group => {
          return {
            label: group.name,
            value: group.id,
          }
        })
      }
      return []
    },
  },
  methods: {
    openAreYouSureDialog (newGroup) {
      this.newGroup = newGroup
      this.showAreYouSureDialog = true
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
