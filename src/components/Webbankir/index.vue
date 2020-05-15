<template lang="pug">
  .wb__block
    ProjectCard(:projectObj="obj")
      template(#actions)
        q-btn(
          @click="wbOperatorDialog = true"
          :label="$t('wb.text.btns.operator')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          :size="btnsSize"
          icon-right="headset_mic"
        )
        q-btn(
          @click="wbManagerDialog = true"
          :label="$t('wb.text.btns.manager')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          :size="btnsSize"
          icon-right="record_voice_over"
        )
    ProjectDialog(@hide="wbOperatorDialog = false" :show="wbOperatorDialog" name="operatorWB")
      WBOperatorProject
    ProjectDialog(@hide="wbManagerDialog = false" :show="wbManagerDialog" name="managerWB")
      WBManagerProject
</template>

<script>
import ProjectCard from '../ProjectCard/index'
import ProjectDialog from '../ProjectDialog'
import WBOperatorProject from './ProjectOperator/index'
import WBManagerProject from './ProjectManager/index'

export default {
  name: 'Webbankir',
  components: { WBManagerProject, WBOperatorProject, ProjectDialog, ProjectCard },
  data () {
    return {
      wbOperatorDialog: false,
      wbManagerDialog: false,
    }
  },
  computed: {
    btnsSize () {
      return this.$q.screen.gt.md
        ? 'md'
        : this.$q.screen.gt.sm
          ? 'sm'
          : this.$q.screen.gt.xs
            ? '9px'
            : '7px'
    },
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
        technologies: 'SPA, Vue.js, Quasar Framework, WebSocket, JWT, REST API, Agile, Kanban',
        description: this.$t('wb.text.description'),
        time: this.$t('wb.text.time'),
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
