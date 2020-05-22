<template lang="pug">
  .person-item.row.content-between.full-width(:style="{ minHeight: `${768 * 0.65}px` }")
    .col-4.q-pr-md.flex.justify-center.items-center
      q-img.full-height(
        :src="`statics/heroes/persons/${$heroes.route.params.section}/${person.photo}`"
        :style="{ maxHeight: `${768 * 0.65}px` }"
        contain
      )
    .col-8.q-pl-md
      q-scroll-area.full-width.q-pr-sm.text-shadow(
        ref="scrollAreaPerson"
        :thumb-style="$app.layout.thumbStyle"
        :style="height"
      )
        .name.q-mb-lg {{person.name}}
        .main-info {{person.description}}
        .row.q-py-lg
          .col-1
            q-separator
        .dates-and-places.q-mb-xl
          .years-of-life {{person.life}}
          .born Родился: {{person.born}}
          .died Умер: {{person.dead}}
        .quote(v-html="person.quote")
</template>

<script>
import data from '../../data'

export default {
  name: 'PersonItem',
  computed: {
    person () {
      return data[this.$heroes.route.params.category][this.$heroes.route.params.section][this.$heroes.route.params.item]
    },
    height () {
      return { height: `${768 * 0.68}px` }
    }
  },
  methods: {
    goToStartScroll () {
      this.$nextTick(() => {
        const el = this.$refs.scrollAreaPerson
        if (el.setScrollPosition) el.setScrollPosition(0)
      })
    }
  },
  watch: {
    '$heroes.route.params.item' (v) {
      this.goToStartScroll()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
