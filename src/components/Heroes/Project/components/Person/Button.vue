<template lang="pug">
  q-btn.num-btn(
    :outline="questionValue"
    :label="label + 1"
    color="white"
    :unelevated="questionValue"
    :text-color="!questionValue ? 'black' : 'white'"
    @click="changeQuestionValue"
  )
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: Number,
      required: true
    },
    questionValue: {
      type: Boolean,
      required: true
    },
    hero: {
      type: String,
      required: true
    }
  },
  methods: {
    changeQuestionValue () {
      if (!this.questionValue) {
        this.$app.heroes[this.$app.heroes.route.params.section][this.hero][this.label] = true
      }
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .num-btn
    /*margin-right 12px*/
    font-weight bold
    font-size 19px

    .q-btn__wrapper
      padding 0
    .q-btn__content > div
      position: relative
      .app-win &
        top 10px

  /*.num-btn:last-child*/
  /*  margin-right 0*/

  .q-btn--rectangle
    border-radius 3px
</style>
