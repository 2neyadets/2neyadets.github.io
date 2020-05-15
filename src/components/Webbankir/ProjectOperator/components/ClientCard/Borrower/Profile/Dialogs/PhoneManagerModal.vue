<template lang="pug">
  q-dialog(v-model="$operatorWB.layout.phoneModalOpened" content-class="operatorWB__dialog" content-style="z-index: 6100;")
    q-card.phone-manager__card.modal-content.phone-manager.brs6.ovh
      q-card-section.phone-manager__content
        q-btn.close-button.q-mr-sm(
          flat
          round
          dense
          v-close-popup
          icon="close"
        )

        FullPhoneList
      q-card-section.phone-manager__footer
        PhoneForm
</template>

<script>
import { mask } from 'vue-the-mask'
import FullPhoneList from './FullPhoneList/index'
import PhoneForm from './FullPhoneList/PhoneForm'

export default {
  name: 'PhoneManagerModal',
  props: ['opened', 'loading', 'phones'],
  components: {
    FullPhoneList,
    PhoneForm
  },
  directives: { mask },
  data () {
    return {
      options: [
        {
          label: this.$t('clients.phones.mobile'),
          value: 'mobile'
        },
        {
          label: this.$t('clients.phones.work'),
          value: 'work'
        },
        {
          label: this.$t('clients.phones.home'),
          value: 'home'
        },
      ],
    }
  },
  computed: {
    clientPhonesFull () {
      const phones = this.$operatorWB.clients.currentClient.phones
      return (phones && phones
        .map(item => {
          return Object.assign(item, {
            phone: {
              type: item.type,
              number: item.number
            }
          })
        })) || []
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }

  }
}
</script>

<style scoped lang="stylus">
  .phone-manager__content
    padding-top 40px
    padding-bottom 0

  .phone-manager__card
    min-width 1000px
</style>
