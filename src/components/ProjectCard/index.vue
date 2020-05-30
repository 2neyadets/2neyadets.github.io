<template lang="pug">
  .project__card.q-pa-xs-xs.q-pa-sm-sm.q-pa-md-md.flex.flex-center(:style="`height: ${$q.screen.height - 50}px;`")
    q-card.shadow-12(style="text-align: justify" :class="$q.screen.gt.lg && $q.screen.height > 800 ? 'mx-for-project-card' : ''")
      q-card-section.q-pb-none.q-px-xs-xs.q-px-md-sm.q-px-lg-md.q-pt-xs-xs.q-pt-md-sm.q-pt-lg-sm(align="center")
        strong(:class="`text-${$app.layout.activeColor}`") {{projectObj.title}}
      q-card-section.q-px-xs-xs.q-px-md-sm.q-px-lg-md.q-py-xs-xs.q-py-md-sm.q-py-lg-sm
        q-card.shadow-6(bordered)
          q-card-section(horizontal)
            q-card-section.col-xl-4.q-pa-none(:class="projectObj.title === 'Webbankir' ? 'col-xs-4 col-sm-5' : 'col-xs-3 col-sm-4'")
              q-card-section.q-pa-xs-xs.q-pa-md-sm.q-px-lg-md.q-py-lg-sm.text-center
                strong {{$t('project.team')}}
              q-separator
              q-card-section.q-pa-xs-xs.q-pa-md-sm.q-px-lg-md.q-py-lg-sm.md-opacity
                template(v-for="item in projectObj.employees")
                  .flex.justify-between
                    .q-pa-none {{item.type}}:
                    .q-pl-xs-xs.q-pl-md-sm.q-pl-lg-md {{item.number}}
              q-separator
              q-card-section.q-pa-xs-xs.q-pa-md-sm.q-px-lg-md.q-py-lg-sm.text-center
                strong {{$t('project.tech')}}
              q-separator
              q-card-section.q-pa-xs-xs.q-pa-md-sm.q-px-lg-md.q-py-lg-sm.md-opacity {{projectObj.technologies}}
            q-separator(vertical)
            q-card-section.col-xl-8.q-pa-none(:class="projectObj.title === 'Webbankir' ? 'col-xs-8 col-sm-7' : 'col-xs-9 col-sm-8'")
              q-card-section.q-pa-xs-xs.q-pa-md-sm.q-px-lg-md.q-py-lg-sm.text-center
                strong {{$t('project.description')}}
              q-separator
              q-card-section.q-pa-xs-xs.q-pa-md-sm.q-px-lg-md.q-py-lg-sm.md-opacity(v-html="projectObj.description")
          q-separator
          q-card-section.q-pa-xs-xs.q-pa-md-sm.q-px-lg-md.q-py-lg-sm
            .flex.justify-between
              strong.q-pa-none {{$t('project.workTime')}}
              .md-opacity.q-pl-lg {{projectObj.time}}
      q-card-actions.q-pt-none.q-px-xs-xs.q-px-md-sm.q-px-lg-md.q-pb-xs-xs.q-pb-md-sm.q-pb-lg-sm(align="center")
        slot(name="actions")
</template>

<script>

export default {
  name: 'ProjectCard',
  props: {
    projectObj: {
      type: Object,
      required: true,
    }
  },
  mounted () {
  },
}
</script>

<style lang="stylus">
</style>
