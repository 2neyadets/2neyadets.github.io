<template lang="pug">
  .rozetki__block
    ProjectCard(:projectObj="obj")
      template(#actions)
        q-btn(
          type="a"
          href="https://rozetki-shop.ru/"
          target="_blank"
          :label="$t('rozetki.text.btns.rozetki')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          :size="$app.layout.btnsSizeForProjectCard"
          icon-right="emoji_objects"
        )
          q-tooltip(anchor="top middle" self="bottom middle" :offset="[0, 5]")
            span {{$t('rozetki.text.tooltip')}}
</template>

<script>
import ProjectCard from '../ProjectCard/index'

export default {
  name: 'Rozetki',
  components: { ProjectCard },
  data () {
    return {
    }
  },
  computed: {
    obj () {
      return {
        title: this.$t('layout.drawer.rozetki'),
        employees: [
          {
            type: this.$t('rozetki.text.team.frontend'),
            number: 1,
          },
          {
            type: this.$t('rozetki.text.team.backend'),
            number: 1,
          },
        ],
        technologies: 'SSR, SPA, Vue.js, Vuex',
        description: this.$t('rozetki.text.description'),
        time: this.$t('rozetki.text.time'),
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
