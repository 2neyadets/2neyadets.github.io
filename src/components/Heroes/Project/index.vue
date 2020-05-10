<template lang="pug">
  .heroes__project
    template(v-if="$q.platform.is.mobile")
      .flex.flex-center.text-center.q-pa-sm
        h4 {{$t('layout.desktopOnly')}}
        q-btn(
          :label="$t('layout.close')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          v-close-popup
        )
    template(v-else)
      HeroesProjectIndexPage(v-if="$app.heroes.route.path === '/'")
      HeroesProjectTitlePage(v-if="$app.heroes.route.path === '/title'")
      .bg(v-if="$app.heroes.route.path !== '/' && $app.heroes.route.path !== '/title'" :class="classname")
        HeroesProjectPapersPage(v-if="$app.heroes.route.path === '/section'")
        HeroesProjectSectionPage(v-if="$app.heroes.route.path === '/section/culture'")
        HeroesProjectCategoryPage(v-if="$app.heroes.route.params.category && $app.heroes.route.params.item === null")
        HeroesProjectItemPage(v-if="$app.heroes.route.params.category && $app.heroes.route.params.item !== null")
</template>

<script>
import HeroesProjectTitlePage from './pages/title'
import HeroesProjectIndexPage from './pages/index'
import HeroesProjectPapersPage from './pages/papers'
import HeroesProjectSectionPage from './pages/section'
import HeroesProjectCategoryPage from './pages/category'
import HeroesProjectItemPage from './pages/item'
import { notify } from '../../../utils/helpers'
import { LocalStorage } from 'quasar'

export default {
  name: 'HeroesProject',
  components: { HeroesProjectItemPage, HeroesProjectCategoryPage, HeroesProjectSectionPage, HeroesProjectPapersPage, HeroesProjectIndexPage, HeroesProjectTitlePage },
  created () {
    this.$app.heroes.route.path = '/'
    if (!this.$app.heroes.cancelHeroesStartNotify && this.$q.platform.is.desktop) {
      notify({
        message: this.$t('heroes.notify.resolution'),
        color: this.$app.layout.activeColor,
        textColor: this.$app.layout.activeTextColor,
        icon: 'desktop_mac',
        timeout: 5000,
      }, {
        label: this.$t('notify.dontShowAgain'),
        color: this.$app.layout.activeTextColor,
        handler: () => {
          LocalStorage.set('cancelHeroesStartNotify', true)
          this.$app.heroes.cancelHeroesStartNotify = true
        }
      })
    }
  },
  computed: {
    classname () {
      let style = 'bg-'
      if (this.$app.heroes.route.path === '/section') {
        style += 'papers'
      } else {
        style += this.$app.heroes.route.path.split('/')[2]
        if (this.$app.heroes.route.params.category) style += '-' + this.$app.heroes.route.params.category
      }
      return style
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
</style>
