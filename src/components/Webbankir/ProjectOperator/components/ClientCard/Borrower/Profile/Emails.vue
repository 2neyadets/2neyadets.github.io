<template lang="pug">
  .card__row-right.flex.justify-between.items-center(v-show="client")
    template(v-for="email in emails")
      span.card__link-email {{email}}
    q-btn(
      @click="showModal"
      icon="add"
      color="green-8"
      dense
      outline
    )
    template
      q-dialog(v-model="isOpened" content-style="z-index: 6100;")
        q-card.modal-content.modal-email
          q-card-section
            .modal__title.q-mb-sm E-mail
          q-card-section
            q-input.modal__input(
              v-model="email"
              type="email"
              placeholder="pochta@pochta.ru"
              bg-color="white"
              outlined
              dense
              :dark="false"
              color="WB-primary"
            )
          q-card-actions(align="right")
            q-btn-group.modal__buttons.w100p.flex.justify-end
              q-btn.modal__btn(:label="$t('modals.buttons.cancel')" v-close-popup)
              q-btn.modal__btn(@click="$operatorWB.communication.save()" :label="$t('modals.buttons.save')" v-close-popup)
</template>

<script>
export default {
  name: 'Emails',
  props: {
    client: Object
  },
  data () {
    return {
      email: null,
      isOpened: false
    }
  },
  computed: {
    emails () {
      return (this.client && this.client.emails) || []
    }
  },
  methods: {
    showModal () {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style scoped lang="stylus">
  .modal__input
    background: $WB-modal-bg-color
</style>
