<template lang="pug">
  .heroes__block
    ProjectCard(:projectObj="obj")
      template(#actions)
        q-btn(
          @click="heroesDialog = true"
          :label="$t('layout.try')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          :size="$q.screen.gt.md ? 'md' : 'sm'"
          icon="group"
          icon-right="group"
        )
    ProjectDialog(@hide="heroesDialog = false" :show="heroesDialog" name="heroes")
      div(:class="{'app-win': $app.layout.getOS === 'win', 'app-macos': $app.layout.getOS === 'mac', 'desktop': $q.platform.is.desktop}")
        HeroesProject
</template>

<script>
import ProjectCard from '../ProjectCard/index'
import HeroesProject from './Project/index'
import ProjectDialog from '../ProjectDialog'
export default {
  name: 'Heroes',
  components: { ProjectDialog, HeroesProject, ProjectCard },
  data () {
    return {
      heroesDialog: false,
    }
  },
  computed: {
    obj () {
      return {
        title: this.$t('layout.drawer.heroes'),
        employees: [
          {
            type: this.$t('heroes.text.team.frontend'),
            number: 2,
          },
          {
            type: this.$t('heroes.text.team.content'),
            number: 1,
          },
          {
            type: this.$t('heroes.text.team.design'),
            number: 1,
          },
        ],
        technologies: 'SPA, Vue.js, Quasar Framework, Electron',
        description: this.$t('heroes.text.description'),
        time: '11.2019 - 01.2020',
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
