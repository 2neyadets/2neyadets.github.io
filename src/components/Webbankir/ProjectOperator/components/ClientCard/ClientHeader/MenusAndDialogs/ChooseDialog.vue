<template lang="pug">
  q-dialog(:value="show" @hide="closeDialog")
    q-card.modal-content
      q-card-section
        .font-size-large {{title}}
      q-card-section.flex.justify-center(v-if="$operatorWB.layout.isApplicationCard && $operatorWB.user.profile.userId !== ($operatorWB.applications.get('item.underwriter') && $operatorWB.applications.get('item.underwriter.id'))")
        q-btn(
          @click="makeMyselfUnderwriter"
          label="Назначить ответственным себя"
          color="WB-primary"
        )
      q-card-section
        q-select.min-w-300px(
          v-model="model"
          :options="options"
          @filter="filterFn"
          :placeholder="placeholder"
          :loading="$operatorWB.user.loading.groups"
          bg-color="WB-primary"
          use-input
          hide-selected
          fill-input
          hide-dropdown-icon
          dense
          options-dense
          standout
          clearable
        )
      q-card-actions(align="right")
        q-btn-group.modal__buttons.w100p.flex.justify-end
          q-btn.modal__btn(label="Отмена" v-close-popup)
          q-btn.modal__btn(@click="openAreYouSureDialog" label="Изменить" :disable="!model")
</template>

<script>
export default {
  name: 'ChooseDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    optionsForSelect: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      dialog: false,
      model: null,
      options: [],
    }
  },
  methods: {
    closeDialog () {
      this.model = null
      this.$emit('close')
    },
    async filterFn (val, update, abort) {
      this.options = this.optionsForSelect.filter(group => group.label.toLowerCase().includes(val.toLowerCase()))
      update()
    },
    openAreYouSureDialog () {
      this.$emit('openAreYouSureDialog', this.model)
    },
    makeMyselfUnderwriter () {
      this.model = { label: this.$operatorWB.user.fullNameByLastName, value: this.$operatorWB.user.profile.userId }
      this.openAreYouSureDialog()
    }
  }
}
</script>

<style scoped lang="stylus">
  .modal__btn
    padding 0 !important
</style>
