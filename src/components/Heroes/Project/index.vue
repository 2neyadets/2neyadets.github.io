<template lang="pug">
  .heroes__project
    HeroesProjectIndexPage(v-if="$heroes.route.path === '/'")
    HeroesProjectTitlePage(v-if="$heroes.route.path === '/title'")
    .bg(v-if="$heroes.route.path !== '/' && $heroes.route.path !== '/title'" :class="classname")
      HeroesProjectPapersPage(v-if="$heroes.route.path === '/section'")
      HeroesProjectSectionPage(v-if="$heroes.route.path === '/section/culture'")
      HeroesProjectCategoryPage(v-if="$heroes.route.params.category && $heroes.route.params.item === null")
      HeroesProjectItemPage(v-if="$heroes.route.params.category && $heroes.route.params.item !== null")
</template>

<script>
import HeroesProjectTitlePage from './pages/title'
import HeroesProjectIndexPage from './pages/index'
import HeroesProjectPapersPage from './pages/papers'
import HeroesProjectSectionPage from './pages/section'
import HeroesProjectCategoryPage from './pages/category'
import HeroesProjectItemPage from './pages/item'
import { notify } from 'src/utils/helpers'
import { LocalStorage } from 'quasar'

export default {
  name: 'HeroesProject',
  components: { HeroesProjectItemPage, HeroesProjectCategoryPage, HeroesProjectSectionPage, HeroesProjectPapersPage, HeroesProjectIndexPage, HeroesProjectTitlePage },
  created () {
    this.$heroes.route.path = '/'
    if (!this.$heroes.cancelHeroesStartNotify && this.$q.platform.is.desktop) {
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
          this.$heroes.cancelHeroesStartNotify = true
        }
      })
    }
  },
  computed: {
    classname () {
      let style = 'bg-'
      if (this.$heroes.route.path === '/section') {
        style += 'papers'
      } else {
        style += this.$heroes.route.path.split('/')[2]
        if (this.$heroes.route.params.category) style += '-' + this.$heroes.route.params.category
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
