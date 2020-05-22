<template lang="pug">
  .heroes-page.relative-position
    .papers
      template(v-for="paper in papers")
        .paper.absolute(
          :key="paper.index"
          :style="styles(paper)"
          :class="`section__${paper.type} ${paper.type === 'culture' ? 'cursor-pointer' : ''} ${paper.type !== 'culture' ? 'cursor-not-allowed' : ''}`"
          :ref="'ref__' + paper.type "
          @mouseover="mouseOver(paper)"
          @mouseout="mouseOut(paper)"
          @click="click(paper.type)"
          v-ripple="paper.type === 'culture'"
        )
</template>

<script>
import { dom, LocalStorage } from 'quasar'
import { notify } from 'src/utils/helpers'
const { css } = dom

export default {
  name: 'HeroesProjectPapersPage',
  data () {
    return {
      sizes: {
        base: { w: 1015, h: 968 },
      },
      curr: 'war',
      paper: {
        war: {
          matrix: [0.99, 0.13, -0.13, 0.99],
          hover: [2, -10],
          top: 40,
          right: true
        },
        economic: {
          matrix: [0.99, -0.13, 0.13, 0.99],
          hover: [-1, -10],
          top: 40,
          left: true
        },
        politics: {
          matrix: [0.99, -0.13, 0.13, 0.99],
          hover: [-1, -10],
          top: 350,
          left: true
        },
        culture: {
          matrix: [0.97, 0.24, -0.24, 0.97],
          hover: [2, -10],
          top: 350,
          right: true
        }
      }
    }
  },
  created () {
    if (!this.$heroes.cancelHeroesPapersNotify && this.$q.platform.is.desktop) {
      notify({
        message: this.$t('heroes.notify.onlyCultureSection'),
        color: this.$app.layout.activeColor,
        textColor: this.$app.layout.activeTextColor,
        icon: 'info',
        timeout: 5000,
      }, {
        label: this.$t('notify.dontShowAgain'),
        color: this.$app.layout.activeTextColor,
        handler: () => {
          LocalStorage.set('cancelHeroesPapersNotify', true)
          this.$heroes.cancelHeroesPapersNotify = true
        }
      })
    }
  },
  computed: {
    papers () {
      const paper = { ...this.paper }
      return Object.keys(paper).map((i, index) => {
        return { index: index + 1, type: i, ...paper[i] }
      })
    },
    current: {
      get () {
        return this.curr
      },
      set (v) {
        this.curr = v
      },
    }
  },
  methods: {
    click (paperType) {
      if (paperType === 'culture') this.$heroes.route.path = `/section/${paperType}`
    },
    mouseOver (obj) {
      const el = this.$refs['ref__' + obj.type]
      css(el[0], {
        transform: `matrix(${obj.matrix.join(',')}, ${obj.hover.join(',')})`
      })
    },
    mouseOut (obj) {
      const el = this.$refs['ref__' + obj.type]
      css(el[0], {
        transform: `matrix(${obj.matrix.join(',')}, 0, 0)`
      })
    },
    styles (obj) {
      const centerX = 1024 / 2
      const ratio = 1.97
      const { w, h } = this.sizes.base
      const width = w / ratio
      const height = h / ratio
      const even = obj.right
      const stl = `
        background-image: url(statics/heroes/paper/${obj.type}.png);
        width: ${width}px; height: ${height}px;
        left: ${centerX + ((even ? 1 : -1) * width / 2.25) - height / 1.9 + (obj.index === 4 ? -55 : 0)}px;
        top: ${(50 / ratio) + obj.top + (obj.index > 2 && this.$q.screen.xl ? 70 : 0)}px;
        z-index: ${obj.index};
        transform: matrix(${obj.matrix.join(',')}, 0, 0)
        `
      return stl
    }
  }
}
</script>

<style lang="stylus" scoped>
  .paper
    background transparent no-repeat center center
    background-size cover
</style>
