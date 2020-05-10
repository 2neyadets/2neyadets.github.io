<template lang="pug">
  .webbankir__block
    ProjectCard(:projectObj="obj")
      template(#actions)
        q-btn(
          @click="webbankirOperatorDialog = true"
          :label="$t('webbankir.text.btns.operator')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          :size="btnsSize"
          icon="group"
          icon-right="group"
        )
        q-btn(
          @click="webbankirManagerDialog = true"
          :label="$t('webbankir.text.btns.manager')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          :size="btnsSize"
          icon="group"
          icon-right="group"
        )
    ProjectDialog(@hide="webbankirOperatorDialog = false" :show="webbankirOperatorDialog")
      div webbankirOperatorDialog
    ProjectDialog(@hide="webbankirManagerDialog = false" :show="webbankirManagerDialog")
      div webbankirManagerDialog
</template>

<script>
import ProjectCard from '../ProjectCard/index'
import ProjectDialog from '../ProjectDialog'
export default {
  name: 'Webbankir',
  components: { ProjectDialog, ProjectCard },
  data () {
    return {
      webbankirOperatorDialog: false,
      webbankirManagerDialog: false,
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
            type: this.$t('webbankir.text.team.frontend'),
            number: 2,
          },
          {
            type: this.$t('webbankir.text.team.backend'),
            number: 3,
          },
          {
            type: this.$t('webbankir.text.team.design'),
            number: 1,
          },
          {
            type: this.$t('webbankir.text.team.manager'),
            number: 1,
          },
        ],
        technologies: 'SPA, Vue.js, Quasar Framework, WebSocket, JWT, REST API, Agile, Kanban',
        description: this.$t('webbankir.text.description'),
        time: this.$t('webbankir.text.time'),
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
