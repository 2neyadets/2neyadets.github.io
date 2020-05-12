<template lang="pug">
  .card__phone
    .card__phone-list
      .flex.items-center.card__phone-item(v-for="phone in phones" :key="phone.id" :class="isCurrent(phone.number) && 'current'")
        span.card__phone-type {{$t('clients.phns.' + phone.type)}}
        | {{phone.number}}&nbsp;
        span.card__phone-type(v-html="phone.owner")
        q-icon.q-mx-sm(v-if="phone.blocked" name="not_interested" color="negative")
          q-tooltip(anchor="bottom left" self="bottom left")
            span(v-if="phone.blocked") {{$t('tooltips.phoneStatus.blocked')}}
      .card__phone-numbers
        span.card__phones-all.link {{$t('clients.labels.allPhones')}} ({{$operatorWB.clients.currentPhones.length}})
          PhonesList(:phones="$operatorWB.clients.currentPhones")
        <!--span.card__phones-excluded.danger {{ $t('clients.phones.excluded') }}-->
    q-btn(
      @click="$operatorWB.layout.phoneModalOpened = true"
      icon="add"
      color="green-8"
      dense
      outline
    )

    PhoneManagerModal(:opened="isOpened")
</template>

<script>
import PhonesList from '../../Tooltip/PhonesList'
import PhoneManagerModal from './Dialogs/PhoneManagerModal'
import { uid } from 'quasar'

export default {
  name: 'Phones',
  components: {
    PhonesList,
    PhoneManagerModal
  },
  props: {
    profile: {
      type: Object
    }
  },
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
      number: '',
      isOpened: false,
      form: {
        type: 'mobile',
        number: null,
        owner: null,
        comment: null,
        source: 'Profile',
        autodial: true
      }
    }
  },
  computed: {
    phones () {
      let phones = []
      if (this.profile) {
        phones = [{
          id: uid(),
          number: this.profile.phone
        }]
      } else {
        phones = this.$operatorWB.clients.currentPhones.slice(0, 2)
      }
      return phones
    }
  },
  methods: {
    isCurrent (number) {
      return number.substring(1) === ((this.$operatorWB.calls.currentCall && this.$operatorWB.calls.currentCall.phone_number) || this.number).substring(1)
    }
  },
  watch: {
    currentCall (v) {
      if (v) {
        this.number = this.$operatorWB.calls.currentCall.phone_number
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .current
    font-weight: bold
    background yellow
    display: inline-block
</style>
