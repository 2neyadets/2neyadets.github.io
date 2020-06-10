<template lang="pug">
  .card__row-right.flex.justify-between.items-center
    .socials
      q-list.socials__list.no-border.flex.items-center.q-pa-none
        q-item.socials__item.q-pa-none(v-for="social in socials" :key="social.value")
          a.socials__link(:href="social.link" :title="social.value" target="_blank" rel="noopener")
            svg.socials__icon(width="25" height="25")
              image(:href="social.path")
    q-btn(
      v-if="!$operatorWB.layout.isApplicationCard"
      @click="showModal"
      icon="add"
      color="green-8"
      dense
      outline
    )
    template
      q-dialog(v-model="isOpened" content-style="z-index: 6100;")
        q-card.modal-content.modal-social
          q-card-section
            .modal__title.q-mb-sm {{ $t('modals.socials.add') }}
          q-card-section
            q-input.modal__input(
              v-model="socialNetwork.url"
              type="url"
              placeholder="https://..."
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
  name: 'SocialNetworks',
  data () {
    return {
      isOpened: false,
      socialNetwork: {
        url: null,
        icon: 'Facebook'
      },
      socials: [
        {
          link: 'https://facebook.com',
          class: 'socials__icon_fb',
          value: 'Facebook',
          path: '/statics/icons/socials/facebook.svg'
        },
        {
          link: 'https:///twitter.com',
          class: 'socials__icon_tw',
          value: 'Twitter',
          path: '/statics/icons/socials/twitter.svg'
        },
        {
          link: 'https://google.com',
          class: 'socials__icon_go',
          value: 'Google+',
          path: '/statics/icons/socials/googleplus.svg'
        },
        {
          link: 'https://instagram.com',
          class: 'socials__icon_inst',
          value: 'Instagram',
          path: '/statics/icons/socials/instagram.svg'
        },
        {
          link: 'https://vk.com',
          class: 'socials__icon_vk',
          value: 'VKontakte',
          path: '/statics/icons/socials/vk.svg'
        },
        {
          link: 'https://ok.ru',
          class: 'socials__icon_ok',
          value: 'Odnoklassniki',
          path: '/statics/icons/socials/ok.svg'
        }
      ]
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
    background: $modal-bg-color
</style>
