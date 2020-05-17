<template lang="pug">
  .wb__block
    ProjectCard(:projectObj="obj")
      template(#actions)
        q-btn(
          @click="wbOperatorDialog = true"
          :label="$t('wb.text.btns.operator')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          :size="$app.layout.btnsSizeForProjectCard"
          icon-right="headset_mic"
        )
        q-btn(
          @click="wbManagerDialog = true"
          :label="$t('wb.text.btns.manager')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          :size="$app.layout.btnsSizeForProjectCard"
          icon-right="record_voice_over"
        )
    template(v-if="$q.platform.is.mobile")
      DesktopOnlyDialog(@hide="wbOperatorDialog = false" :show="wbOperatorDialog")
      DesktopOnlyDialog(@hide="wbManagerDialog = false" :show="wbManagerDialog")
    template(v-else)
      ProjectDialog(@hide="wbOperatorDialog = false" :show="wbOperatorDialog" name="operatorWB")
        WBOperatorProject
      ProjectDialog(@hide="wbManagerDialog = false" :show="wbManagerDialog" name="managerWB")
        WBManagerProject
</template>

<script>
import ProjectCard from '../ProjectCard/index'
import ProjectDialog from '../ProjectDialog/index'
import WBOperatorProject from './ProjectOperator/index'
import WBManagerProject from './ProjectManager/index'
import DesktopOnlyDialog from '../ProjectDialog/DesktopOnlyDialog'

export default {
  name: 'Webbankir',
  components: { DesktopOnlyDialog, WBManagerProject, WBOperatorProject, ProjectDialog, ProjectCard },
  data () {
    return {
      wbOperatorDialog: false,
      wbManagerDialog: false,
    }
  },
  computed: {
    obj () {
      return {
        title: this.$t('layout.drawer.wb'),
        employees: [
          {
            type: this.$t('wb.text.team.frontend'),
            number: 2,
          },
          {
            type: this.$t('wb.text.team.backend'),
            number: 3,
          },
          {
            type: this.$t('wb.text.team.design'),
            number: 1,
          },
          {
            type: this.$t('wb.text.team.manager'),
            number: 1,
          },
        ],
        technologies: 'SPA, Vue.js, WebSocket, JWT, REST API, Agile, Kanban',
        description: this.$t('wb.text.description'),
        time: this.$t('wb.text.time'),
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
