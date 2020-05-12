<template lang="pug">

  q-card.card.history.brs5.ovh(:class="size" :dark="false")
    q-card-section.q-pa-none
      .card__title.flex.justify-between
        .left
          slot(name="title-left")
        .right.flex.justify-between
          slot(name="title-right")
          .expander.flex.items-center
            q-btn(@click="toggleSize" size="sm" flat)
              q-icon(:name="size === 'half' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'")
    q-card-section.card__content.q-pa-none
      q-scroll-area.full-height(:dark="false")
        slot

</template>

<script>

export default {
  name: 'HistoryBlock',
  props: {
    icon: String,
  },
  computed: {
    size () {
      return this.$operatorWB.layout.size
    }
  },
  methods: {
    toggleSize () {
      if (this.size === 'half') {
        this.$operatorWB.layout.size = 'full'
      } else {
        this.$operatorWB.layout.size = 'half'
      }
    }
  }
}
</script>

<style lang="stylus">
  .section
    position relative

  .container
    overflow-y auto
    height 100%

  .left
    display: flex
    align-items center

</style>
