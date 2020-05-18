<template lang="pug">
  .start__block.q-pa-xs-xs.q-pa-sm-sm.q-pa-md-md.flex.flex-center(ref="startBlock" :style="`height: ${$q.screen.height - 50}px;`")
    q-card.shadow-12(style="text-align: justify")
      q-card-section.q-pa-xs-xs.q-pa-md-sm.q-py-lg-md.q-px-lg-lg
        p(v-html="$t('start.text.hello')")
      q-card-section.q-px-xs-sm.q-px-md-sm.q-px-lg-lg.q-pb-xs-sm.q-pb-md-sm.q-pb-lg-md.q-pt-none.md-opacity
        p(v-html="$t('start.text.myNameIs')")
        p(v-html="$t('start.text.loveAndHate')")
        p(v-html="$t('start.text.enjoying')")
      q-separator(inset)
      q-card-section.q-px-xs-sm.q-px-md-sm.q-px-lg-lg.q-py-xs-sm.q-py-md-sm.q-py-lg-md.md-opacity
        p(v-html="$t('start.text.dareToSuggest')")
        p(v-html="$t('start.text.portfolio')")
      q-card-actions.q-pa-none(align="center")
        q-btn.full-width.full-height(
          @click="$app.layout.goToSection(true)"
          :label="$t('start.letsGo')"
          :color="$app.layout.activeColor"
          :textColor="$app.layout.activeTextColor"
          :size="$app.layout.btnsSizeForProjectCard"
          icon="arrow_downward"
          icon-right="arrow_downward"
        )
</template>

<script>
export default {
  name: 'Start',
}
</script>

<style lang="stylus" scoped>
</style>
