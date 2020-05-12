<template lang="pug">
  span.underwriter.cursor-pointer {{($operatorWB.applications.get('item.underwriter') && $operatorWB.applications.get('item.underwriter.fullName')) || 'не назначен'}}
    SubMenu(
      @openDialog="showUnderwritersDialog = true"
      label="Изменить ответственного"
    )
    ChooseDialog(
      :show="showUnderwritersDialog"
      @close="showUnderwritersDialog = false"
      @openAreYouSureDialog="openAreYouSureDialog"
      title="Выбор ответственного по заявке"
      :optionsForSelect="underwritersForSelect"
      placeholder="Начните набирать фамилию андеррайтера"
    )
    AreYouSureDialog(
      :show="showAreYouSureDialog"
      @close="showAreYouSureDialog = false"
      @closeParent="showUnderwritersDialog = false"
      :item="newUnderwriter"
      :question="`Вы уверены, что хотите изменить ответственного на <strong style='color: red'>${newUnderwriter.label}</strong>?`"
      :func="changeUnderwriter"
      :loading="$operatorWB.applications.get('loading.item')"
    )
</template>

<script>
import SubMenu from './MenusAndDialogs/SubMenu'
import ChooseDialog from './MenusAndDialogs/ChooseDialog'
import AreYouSureDialog from './MenusAndDialogs/AreYouSureDialog'

export default {
  name: 'Underwriter',
  components: {
    AreYouSureDialog,
    ChooseDialog,
    SubMenu
  },
  data () {
    return {
      showUnderwritersDialog: false,
      showAreYouSureDialog: false,
      newUnderwriter: {},
    }
  },
  computed: {
    underwritersForSelect () {
      if (this.$operatorWB.user.allEmployeesUnder && this.$operatorWB.user.allEmployeesUnder.length) {
        return this.$operatorWB.user.allEmployeesUnder.map(underwriter => {
          return {
            label: underwriter.fullName,
            value: underwriter.id,
          }
        })
      }
      return []
    },
  },
  methods: {
    openAreYouSureDialog (newUnderwriter) {
      this.newUnderwriter = newUnderwriter
      this.showAreYouSureDialog = true
    },
    changeUnderwriter (underwriter) {
      this.$operatorWB.applications.changeUnderwriter(({
        applicationId: this.$operatorWB.applications.get('item.id'),
        underwriterId: underwriter.value
      }))
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
