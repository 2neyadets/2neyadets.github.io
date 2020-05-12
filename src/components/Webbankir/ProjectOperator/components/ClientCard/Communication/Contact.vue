<template lang="pug">
  .comments__contact
    .comments__contact-title {{$t('communications.labels.contact')}}
    .comments__contact-main
      .comments__contact-phone.flex.justify-between.active-bg
        .comments__contact-number {{lastCall && lastCall.phone_number}}
        template(v-if="lastCallPhoneObj.hasOwnProperty('blocked')")
          q-icon.q-mx-sm(v-if="lastCallPhoneObj.blocked" name="not_interested" color="negative")
            q-tooltip(anchor="bottom left" self="bottom left")
              span(v-if="lastCallPhoneObj.blocked") {{$t('tooltips.phoneStatus.blocked')}}
        .comments__contact-type {{$t('clients.phones.' + typeOfPhone)}}
      .comments__contact-comm.flex.justify-between
        .comments__contact-last {{$t('communications.labels.lastContact')}}
        .comments__contact-established {{getShortDate($operatorWB.clients.currentLastCommunicationDate) || $t('communications.labels.never')}}
      .comments__contact-conversation.flex.justify-between.items-center
        .comments__contact-time {{$t('communications.labels.callDuration')}}
        .comments__contact-minutes.active-text.flex.items-center
          q-icon.comments__contact-mic(name="headset_mic")
          p {{timeOfLastCall}}
      .comments__contact-comm.flex.justify-between
        .comments__contact-last {{$t('communications.labels.callType')}}
        .comments__contact-established
          span(:class="lastCall && callColor(lastCall.direction)") {{(lastCall && lastCall.direction && $t('calls.type.' + camelCase(lastCall.direction))) || $t('calls.type.unknown')}}
      .comments__contact-comm.flex.justify-between
        .form__send-template.full-width.q-pt-none
          .send__template.q-pr-none
            .row.justify-between
              .send__template-field.flex.justify-between.full-width
                q-select.send__template-select.brs3.full-width(
                  v-model="$operatorWB.dialer.phoneForManualDialSelect"
                  :options="phonesOptions"
                  options-dense
                  outlined
                  required
                  :dark="false"
                  color="WB-primary"
                )
                  template(slot="option" slot-scope="props")
                    q-item(v-bind="props.itemProps" v-on="props.itemEvents")
                      q-item-section
                        q-item-label {{ props.opt.label }}
                        q-item-label(caption) {{ props.opt.sublabel }}
</template>

<script>
import { getShortDate } from 'src/utils/helpers'
import camelCase from 'lodash/camelCase'

export default {
  name: 'Contact',
  data () {
    return {
      camelCase,
      getShortDate,
      number: null,
      direction: null,
    }
  },
  computed: {
    lastCall () {
      return this.$operatorWB.calls.lastCallOfClient(this.$operatorWB.clients.current)
    },
    timeOfLastCall () {
      return this.$operatorWB.calls.timeOfLastCall
    },
    currentPhones () {
      return this.$operatorWB.clients.currentPhones
    },
    lastCallPhoneObj () {
      const phone = this.lastCall && this.currentPhones && this.currentPhones.find(item => item && item.number === this.lastCall.phone_number)
      return phone || {}
    },
    typeOfPhone () {
      // eslint-disable-next-line no-prototype-builtins
      return this.lastCallPhoneObj.hasOwnProperty('type') ? this.lastCallPhoneObj.type : 'unknown'
    },
    timeOfCall () {
      return this.lastCall && (this.lastCall.call_end - this.lastCall.call_start)
    },
    phonesOptions () {
      return this.$operatorWB.dialer.phonesOptions
    }
  },
  methods: {
    callColor (direction) {
      let color = ''
      if (direction && direction.match('incoming')) {
        color = 'red'
      }
      if (direction && direction.match('outgoing')) {
        color = 'orange'
      }
      return color
    }
  }
}
</script>

<style scoped lang="stylus">
  .form__send-template
    padding-top 0

    .send__template
      padding-right 0

  .red, .orange
    font-weight: bold

  .red
    color #f82317

  .orange
    color #f5a623
</style>
