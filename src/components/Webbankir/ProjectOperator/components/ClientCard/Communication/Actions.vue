<template lang="pug">
  .comments__action
    .comments__action-title {{$t('communications.labels.actions')}}
    .comments__action-list.q-mb-xs
      .flex.items-center.justify-between.q-mb-sm
        .comments__action-left(:class="isDisabledManualCalls ? '' : 'active-btn'")
          q-btn.btn.comments__action-btn.btn_disabled(
            :disable="isDisabledManualCalls"
            @click="callStart"
            size="sm"
            icon="phone"
          )
          span.q-ml-sm {{$t('communications.labels.callStart')}}
        .comments__action-right(
          v-if="$operatorWB.dialer.hold"
          :class="($operatorWB.calls.currentCall === null) ? '' : 'active-btn'"
        )
          q-btn.btn.comments__action-btn.btn_disabled(
            :disable="$operatorWB.calls.currentCall === null"
            @click="$operatorWB.dialer.sayUnhold"
            size="sm"
            icon="phone_callback"
          )
          span.q-ml-sm {{$t('communications.labels.unhold')}}
        .comments__action-right(
          v-else
          :class="($operatorWB.calls.currentCall === null) ? '' : 'active-btn'"
        )
          q-btn.btn.comments__action-btn.btn_disabled(
            :disable="$operatorWB.calls.currentCall === null"
            @click="$operatorWB.dialer.sayHold"
            size="sm"
            icon="phone_paused"
          )
          span.q-ml-sm {{$t('communications.labels.callHold')}}

      .flex.items-center.justify-between.q-mb-sm
        .comments__action-left(:class="$operatorWB.calls.currentCall === null ? '' : 'active-btn-red'")
          q-btn.btn.comments__action-btn.btn_disabled(
            :disable="$operatorWB.calls.currentCall === null"
            @click="$operatorWB.dialer.sayDrop"
            size="sm"
            icon="call_end"
          )
          span.q-ml-sm {{$t('communications.labels.callEnd')}}
        .comments__action-right(:class="$operatorWB.calls.currentCall === null || $operatorWB.dialer.phoneForCallForward === 'blank' ? '' : 'active-btn'")
          q-btn.btn.comments__action-btn.btn_disabled(
            :disable="$operatorWB.calls.currentCall === null || $operatorWB.dialer.phoneForCallForward === 'blank'"
            @click="$operatorWB.dialer.sayTransfer({phone: $operatorWB.dialer.choosePhoneForCallForward($operatorWB.dialer.phoneForCallForward)})"
            size="sm"
            icon="phone_forwarded"
          )
          span.q-ml-sm {{$t('communications.labels.callForward')}}
      .flex.items-center.justify-between.q-mb-sm
        .comments__action-left(:class="$operatorWB.user.isUserSupervisor ? '' : 'active-btn_sms'")
          q-btn.btn.comments__action-btn.btn_disabled(
            @click="fillRestoreAccessFormAndOpenModal()"
            :disable="$operatorWB.user.isUserSupervisor"
            size="sm"
            icon="contact_mail"
          )
            q-tooltip(anchor="bottom right" self="top right")
              | {{$t('communications.labels.restoreAccessToAccountTooltip')}}
          span.q-ml-sm.smaller {{$t('communications.labels.restoreAccessToAccount')}}
        .comments__action-right
          .form__send-template.full-width.q-pt-none
            .send__template
              .send__template-field.flex.justify-between.full-width
                q-select.send__template-select.brs3.full-width(
                  v-model="$operatorWB.dialer.phoneForCallForwardSelect"
                  :options="phonesOptionsCallForward"
                  disable
                  options-dense
                  outlined
                  required
                  :dark="false"
                  color="WB-primary"
                )
              template(v-if="$operatorWB.dialer.phoneForCallForward === 'other'")
                .send__template-field.flex.justify-between.full-width.phone
                  q-input.q-mt-xs.q-pa-none.full-width.send__template-select.brs3.q-pa-none(
                    v-model="$operatorWB.dialer.directPhone"
                    placeholder="79123456789"
                    type="number"
                    outlined
                    :dark="false"
                    color="WB-primary"
                  )
      .comments__action-row_last.flex.items-center.justify-between.q-mb-sm
        .comments__action-left(:class="isDisabledSMS ? '' : 'active-btn_sms'")
          q-btn.btn.comments__action-btn.btn_disabled(
            @click="$operatorWB.communication.currentForm = 'sms'"
            :disable="isDisabledSMS"
            size="sm"
            icon="sms"
          )
          span.q-ml-sm {{$t('communications.labels.sendSMS')}}
        .comments__action-right(:class="isDisabledEmail ? '' : 'active-btn_email'")
          q-btn.btn.comments__action-btn.btn_disabled(
            @click="$operatorWB.communication.currentForm = 'email'"
            :disable="isDisabledEmail"
            size="sm"
            icon="email"
          )
          span.q-ml-sm {{$t('communications.labels.sendEmail')}}
    q-dialog(v-model="$operatorWB.layout.areYouSureSendSmsModal" content-style="z-index: 6100;")
      q-card.modal-content
        q-card-section
          .modal__title.q-mb-sm {{ $t('modals.sendSms.areYouSure') }}
        q-card-actions.justify-end
          q-btn-group.modal__buttons.w100p.flex.justify-end
            q-btn.modal__btn(:label="$t('modals.buttons.cancel')" v-close-popup)
            q-btn.modal__btn(
              @click="sendRestoreAccessSMS"
              :label="$t('modals.buttons.send')"
              :loading="$operatorWB.communication.loading.sendSMS"
              v-close-popup
            )
              q-spinner(slot="loading" size="20px")
</template>

<script>
import { date } from 'quasar'
import camelCase from 'lodash/camelCase'
import api from 'src/api'
import { optionsForCallForward } from 'src/utils/mappers'

const initialSMSFormForRestoreAccess = () => ({
  status: 'contactWithClient',
  result: 'restoreAccessSms'
})

export default {
  name: 'Actions',
  computed: {
    lastCall () {
      return this.$operatorWB.calls.lastCallOfClient(this.$operatorWB.clients.current)
    },
    currentOptionsForCallForward () {
      return optionsForCallForward(this.$operatorWB.user.isUserHaveRoles('operatorHard'))
    },
    phonesOptionsCallForward () {
      const arr = []
      Object.assign({}, this.currentOptionsForCallForward.map(item => (arr.push({
        value: item,
        label: this.$app.$t('calls.phonesForCallForward.' + item)
      }))))
      return arr
    },
    isDisabledManualCalls () {
      return this.$operatorWB.dialer.phoneForManualDial === 'blank' ||
        this.$operatorWB.calls.currentCall !== null ||
        this.$operatorWB.clients.isDisabledCallsAndSMSByTimeAndRole ||
        this.$operatorWB.loans.isDisabledCallsAndSMSByDelay
    },
    isDisabledMessages () {
      return this.$operatorWB.user.isUserHaveRoles(['operatorUnderwriting', 'supervisorUnderwriting', 'leaderUnderwriting'])
    },
    isDisabledSMS () {
      return this.$operatorWB.communication.currentForm === 'sms' || this.isDisabledMessages
    },
    isDisabledEmail () {
      return this.$operatorWB.communication.currentForm === 'email' || this.isDisabledMessages
    },
  },
  methods: {
    callStart () {
      const additional = {
        contactedAt: date.formatDate(Date.now(), 'YYYY-MM-DDTHH:mm:ssZZ'),
        action: 'manualDial',
        channel: {
          phone: {
            variant: 'outgoingManualCall',
            number: this.$operatorWB.dialer.phoneForManualDial
          }
        }
      }
      const form = this.$operatorWB.communication.form
      this.$operatorWB.communication.form = Object.assign({}, form, additional)
      const obj = {
        client_id: this.$operatorWB.clients.current,
        loan_id: this.$operatorWB.loans.current,
        phone: this.$operatorWB.dialer.phoneForManualDial
      }
      this.$operatorWB.dialer.sayMake(obj)
    },
    fillRestoreAccessFormAndOpenModal () {
      this.$operatorWB.communication.smsFormForRestoreAccess = null
      let additional = { action: 'other' }
      if (this.lastCall && this.lastCall.client_id === this.$operatorWB.clients.current) {
        additional = {
          action: (this.lastCall.direction.includes('autodial') || this.lastCall.direction.includes('incoming'))
            ? 'autoDial'
            : 'manualDial',
          channel: {
            phone: {
              number: this.lastCall.phone_number,
              variant: `${camelCase(this.lastCall.direction) + 'Call'}`
            }
          }
        }
      }
      const data = {
        clientId: this.$operatorWB.clients.current,
        contactedAt: date.formatDate(Date.now(), 'YYYY-MM-DDTHH:mm:ssZZ'),
        productId: this.$operatorWB.loans.current,
        comment: this.$t('communications.labels.restoreAccessToAccountComment')
      }
      this.$operatorWB.communication.smsFormForRestoreAccess = Object.assign(
        {},
        initialSMSFormForRestoreAccess(),
        { ...data, ...additional }
      )
      this.$operatorWB.layout.areYouSureSendSmsModal = true
    },
    async sendRestoreAccessSMS () {
      this.$operatorWB.communication.loading.sendSMS = true
      const res = await api.crm.addCommunication(this.$operatorWB.communication.smsFormForRestoreAccess, this)
      this.$operatorWB.communication.loading.sendSMS = false
      if (res.data) {
        this.$operatorWB.messages.show({
          color: 'positive',
          message: this.$t('communications.sms.sendSuccess')
        })
        this.$operatorWB.layout.areYouSureSendSmsModal = false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .form__send-template
    padding-top 0

  .smaller
    font-size .65rem

  .phone .relative-position
    padding 0 0 0 5px

</style>
