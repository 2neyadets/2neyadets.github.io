<template lang="pug">
  q-layout.my-layout(view="hHh lpR fFf")
    q-header(:class="$q.dark.isActive ? 'bg-grey-8' : 'bg-grey-2 text-grey-8'" elevated)
      q-toolbar(ref="toolbar")
        q-btn(
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        )
        template(v-if="$q.screen.gt.sm")
          h5.q-my-none.q-ml-md(:class="`text-${$app.layout.activeColor}`")
            strong {{$t('layout.header.title')}}

        q-space

        .q-gutter-sm-md.q-gutter-xs-sm.row.items-center.no-wrap
          q-toggle(
            v-model="darkMode"
            :label="$t('layout.header.darkTheme')"
            color="grey-10"
            icon="nights_stay"
          )
          q-select(
            v-model="lang"
            :options="langOptions"
            :label="$t('layout.header.language')"
            emit-value
            map-options
            dense
            options-dense
            square
            outlined
            style="min-width: 120px"
            :color="$app.layout.activeColor"
            :popup-content-class="`text-${$q.dark.isActive ? 'white' : 'dark' }`"
          )

    q-drawer(
      ref="drawer"
      v-model="leftDrawerOpen"
      :content-class="$q.dark.isActive ? 'bg-grey-8 text-white' : 'bg-grey-2 text-grey-8'"
      :width="$q.platform.is.mobile && $q.screen.lt.lg ? 200 : 240"
      bordered
    )
      q-scroll-area.fit
        q-list(padding)
          template(v-for="(project, index) in projects")
            q-item(
              @click="$app.layout.goToSectionIndex(index, index > $app.layout.currentBlockIndex)"
              :key="project.text"
              :active="index === $app.layout.currentBlockIndex"
              :active-class="`bg-${$app.layout.activeColor} text-${$app.layout.activeTextColor}`"
              v-ripple
              clickable
            )
              q-item-section(avatar)
                q-icon(:name="project.icon")
              q-item-section
                q-item-label {{ project.text }}

          q-separator.q-mt-md.q-mb-lg

          .q-px-md.flex.items-center
            a.drawer-footer-link(
              href="mailto:avsintsov91@gmail.com"
            )
              q-icon(name="mail")
              span.q-px-sm avsintsov91@gmail.com
    q-page-container
      div(
        @click.middle="handleEvent"
        @scroll="handleEvent"
        @wheel="handleEvent"
        @keydown.up.down="handleEvent"
        @keypress.up.down="handleEvent"
        tabindex="-1"
        style="outline: none;"
      )
        q-scroll-area(
          @scroll="scrollObserver"
          @touchstart.native="$app.layout.touchStart"
          @touchmove.native="$app.layout.touchMove"
          @touchend.native="$app.layout.endOrCancelTouchAction"
          @touchcancel.native="$app.layout.endOrCancelTouchAction"
          ref="scroll"
          id="scroll"
          :style="`height: ${$q.screen.height - 50}px;`"
          :bar-style="{ 'pointer-events': 'none', opacity: 0 }"
          :thumb-style="{ 'pointer-events': 'none', opacity: 0 }"
        )
          router-view

</template>

<script>
import { LocalStorage } from 'quasar'
import { geolocationFailure, geolocationSuccess } from '../utils/geoCallback'
import { notify } from 'src/utils/helpers'
import { i18n } from 'src/boot/i18n'
import TermsList from '../components/Heroes/Project/components/Terms/index'

export default {
  name: 'MyLayout',
  components: { TermsList },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      lang: this.$i18n.locale,
      langOptions: [
        {
          value: 'ru',
          label: 'Русский'
        },
        {
          value: 'en-us',
          label: 'English'
        },
      ],
      scrollTimeoutId: null,
    }
  },
  created () {
    if (LocalStorage.has('leftDrawerOpen')) this.leftDrawerOpen = !!LocalStorage.getItem('leftDrawerOpen')
    if (LocalStorage.has('darkMode')) this.darkMode = !!LocalStorage.getItem('darkMode')
    if (LocalStorage.has('lang')) this.lang = LocalStorage.getItem('lang')
    navigator.geolocation.getCurrentPosition((v) => this.geolocationSuccessCallback(v.coords), geolocationFailure)
    window.addEventListener('resize', this.$app.layout.windowResized)
  },
  mounted () {
    this.$app.layout.scroll.el = this.$refs.scroll
    this.$app.layout.updateVars(this.$app.layout.scroll.el)
  },
  updated () {
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.$app.layout.windowResized)
    clearTimeout(this.scrollTimeoutId)
  },
  computed: {
    darkMode: {
      get () {
        return this.$q.dark.isActive
      },
      set (v) {
        this.$q.dark.set(v)
        LocalStorage.set('darkMode', v)
      }
    },
    projects () {
      return [
        {
          icon: 'forward',
          text: this.$t('layout.drawer.start')
        },
        {
          icon: 'group',
          text: this.$t('layout.drawer.heroes')
        },
        {
          icon: 'local_atm',
          text: this.$t('layout.drawer.wb')
        },
        {
          icon: 'emoji_objects',
          text: this.$t('layout.drawer.rozetki')
        },
      ]
    },
  },
  methods: {
    async geolocationSuccessCallback (coords) {
      const res = await geolocationSuccess(coords)
      if (res) {
        this.lang = res
        this.$nextTick(() => {
          notify({
            message: i18n.t('notify.languageChanged', { language: i18n.t(`lang.${i18n.locale}`) }),
            caption: i18n.t('notify.notInRussia'),
            color: 'positive',
            textColor: 'black',
            icon: 'done_outline',
          }, {
            label: i18n.t('notify.dontShowAgain'),
            color: 'black',
            handler: () => LocalStorage.set('cancelGeolocationNotify', true)
          })
        })
      }
    },
    scrollObserver (v) {
      // console.log('Scrolling', v)
      clearTimeout(this.scrollTimeoutId)
      this.$app.layout.scroll.ready = false
      this.$app.layout.scroll.position.current = v.verticalPosition
      this.scrollTimeoutId = setTimeout(() => {
        // console.log('Scroll ended')
        this.$app.layout.scroll.ready = true
        this.$app.layout.updateVars(this.$app.layout.scroll.el)
      }, 100)
    },
    handleEvent (event) {
      this.$app.layout.scrollEvent = event
    }
  },
  watch: {
    leftDrawerOpen (v) {
      LocalStorage.set('leftDrawerOpen', v)
    },
    lang (v) {
      this.$i18n.locale = v
      LocalStorage.set('lang', v)
    },
  }
}
</script>

<style lang="stylus" scoped>
  .my-layout

    .q-item__section--side
      padding-right 0
    .q-item__section--avatar
      min-width 40px

    .drawer-footer-link
      color: inherit
      text-decoration: none
      font-weight: 500
      font-size: 14px
      line-height 14px

      @media (max-width 768px)
        font-size 12px

      &:hover
        color: #000
</style>
