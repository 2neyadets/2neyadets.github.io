<template lang="pug">
  .start__block.q-pa-xs-xs.q-pa-sm-sm.q-pa-md-md.flex.flex-center(style="height: calc(100vh - 50px)")
    q-card.shadow-12(style="text-align: justify")
      q-card-section.q-pa-xs-xs.q-pa-md-sm.q-pa-lg-md
        p(v-html="$t('start.text.hello')")
      q-card-section.q-px-xs-xs.q-px-md-sm.q-px-lg-md.q-pb-xs-sm.q-pb-md-sm.q-pb-lg-md.q-pt-none
        p(v-html="$t('start.text.myNameIs')")
        p(v-html="$t('start.text.loveAndHate')")
        p(v-html="$t('start.text.enjoying')")
      q-separator(inset)
      q-card-section.q-pa-xs-xs.q-pa-md-sm.q-pa-lg-md.q-pt-xs-sm.q-pt-md-sm.q-pb-lg-md
        p(v-html="$t('start.text.dareToSuggest')")
        p(v-html="$t('start.text.portfolio')")
      q-card-actions.q-pa-none(align="center")
        q-btn.full-width.full-height(
          @click="$app.layout.goToSection(true)"
          :label="$t('start.letsGo')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          icon="arrow_downward"
          icon-right="arrow_downward"
        )
</template>

<script>
export default {
  name: 'Start'
}
</script>

<style lang="stylus" scoped>
</style>
