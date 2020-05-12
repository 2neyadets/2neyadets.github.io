<template lang="pug">
  q-dialog(:value="show" @hide="$emit('close')" ref="areYouSureDialog" persistent)
    q-card.modal-content
      q-card-section.q-pb-none
        .modal__title.q-mb-sm(v-html="question")
      q-card-actions(align="right")
        q-btn-group.modal__buttons.w100p.flex.justify-end
          q-btn.modal__btn(
            label="Нет, отменить"
            :loading="loading"
            :disable="loading"
            v-close-popup
          )
          q-btn.modal__btn(
            @click="doAction"
            label="Да, уверен"
            :loading="loading"
            :disable="loading"
          )
</template>

<script>
export default {
  name: 'AreYouSureDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    func: {
      type: Function,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async doAction () {
      await this.func(this.item)
      this.$refs.areYouSureDialog.hide()
      this.$emit('closeParent')
    }
  }
}
</script>

<style scoped lang="stylus">
  .modal__btn
    min-width: 120px
    padding 0 !important
</style>
