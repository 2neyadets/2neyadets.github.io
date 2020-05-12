<template lang="pug">
  q-dialog(:value="show" @hide="closeDialog")
    q-card.modal-content
      q-card-section
        .modal__title.q-mb-sm Выбор нового портфеля
      q-card-section
        q-select.min-w-300px(
          v-model="model"
          :options="options"
          @filter="filterFn"
          placeholder="Начните набирать название портфеля"
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
  name: 'PortfolioDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: false,
      model: null,
      options: [],
    }
  },
  computed: {
    groupsForSelect () {
      if (this.$operatorWB.user.groups && this.$operatorWB.user.groups.length) {
        return this.$operatorWB.user.groups.map(group => {
          return {
            label: group.name,
            value: group.id,
          }
        })
      } else {
        return []
      }
    },
  },
  methods: {
    closeDialog () {
      this.model = null
      this.$emit('close')
    },
    async filterFn (val, update, abort) {
      this.options = this.groupsForSelect.filter(group => group.label.toLowerCase().includes(val.toLowerCase()))
      update()
    },
    openAreYouSureDialog () {
      this.$emit('openAreYouSureDialog', this.model)
    }
  }
}
</script>

<style scoped lang="stylus">
  .modal__btn
    padding 0 !important
</style>
