<template lang="pug">
  form.form__send-template
    .send__template
      .send__template-title {{ $t('communications.email.template') }}
      .send__template-field.flex.q-mb-sm
        q-select.send__template-select.brs3.q-mr-md(
          v-model="$operatorWB.communication.emailForm.result"
          :options="emailOptions"
          outlined
          options-dense
          required
          emit-value
          map-options
          :dark="false"
          color="WB-primary"
        )
        q-select.send__template-select.brs3(
          v-model="email"
          :options="emailAddressOptions"
          outlined
          options-dense
          required
          emit-value
          map-options
          :dark="false"
          color="WB-primary"
        )
      .send__template-text {{ $t('communications.email.text') }}
      q-input.send__template-area.brs3.textarea-for-templates(
        :value="textForEmail"
        type="textarea"
        rows="2"
        readonly
        orientation="vertical"
        outlined
        dense
        :dark="false"
        color="WB-primary"
      )
      .send__template-submit.text-right
        .comments__buttons.flex.items-center.justify-end.send__template-submit
          q-btn.comments__link(
            @click.prevent="$operatorWB.communication.currentForm = 'result'"
            flat
          )
            | {{$t('modals.buttons.cancel')}}
          q-btn.comments__btn.brs3.text-right(
            :disable="$operatorWB.communication.emailForm.result === 'blank' || email === 'blank' || $operatorWB.communication.loading.sendEmail"
            :readonly="$operatorWB.communication.emailForm.result === 'blank' || email === 'blank' || $operatorWB.communication.loading.sendEmail"
            @click="fillFormForEmailAndSend"
            :loading="$operatorWB.communication.loading.sendEmail"
          )
            | {{$t('communications.labels.sendEmail')}}
            q-spinner(slot="loading" size="20px")
            span(slot="loading") {{$t('communications.email.sendInProgress')}}
</template>

<script>
import { date } from 'quasar'
import api from 'src/api'

export default {
  name: 'EmailForm',
  data () {
    return {
      email: 'blank'
    }
  },
  created () {
    this.email = this.emailAddressOptions[this.emailAddressOptions.length - 1]
    this.$operatorWB.communication.emailForm.result = 'blank'
  },
  computed: {
    emailOptions () {
      return this.$operatorWB.communication.emailOptions
    },
    emailAddressOptions () {
      return [{
        value: 'blank',
        label: 'Выберите адрес'
      }].concat(this.$operatorWB.clients.currentEmails)
    },
    textForEmail () {
      return this.$t(`communications.email.textForTemplates.${this.$operatorWB.communication.emailForm.result}`)
    }
  },
  methods: {
    async fillFormForEmailAndSend () {
      const emailForm = {
        clientId: this.$operatorWB.clients.current,
        productId: this.$operatorWB.loans.current,
        dealId: (!this.$operatorWB.loans.current || this.$operatorWB.loans.current > 0) ? null : this.$operatorWB.loans.currentDealId,
        comment: this.textForEmail,
        channel: {
          email: {
            variant: 'email',
            address: this.email
          }
        },
        contactedAt: date.formatDate(Date.now(), 'YYYY-MM-DDTHH:mm:ssZZ'),
        result: this.$operatorWB.communication.emailForm.result
      }
      this.$operatorWB.communication.emailForm = Object.assign({}, this.$operatorWB.communication.emailForm, emailForm)
      this.$operatorWB.communication.loading.sendEmail = true
      const res = await api.crm.addCommunication(this.$operatorWB.communication.emailForm, this)
      this.$operatorWB.communication.loading.sendEmail = false
      if (res.data) {
        this.$operatorWB.clients.getCommunications(this.$operatorWB.clients.current)
        if (!emailForm.result.includes('CreditHolidays')) {
          this.$operatorWB.loans.currentMessages.today++
          this.$operatorWB.loans.currentMessages.thisWeek++
          this.$operatorWB.loans.currentMessages.thisMonth++
        }
        if (this.$operatorWB.loans.isDisabledByLotOfMessages) {
          this.$operatorWB.communication.currentForm = 'result'
        }
        this.$operatorWB.messages.show({
          color: 'positive',
          message: this.$t('communications.email.sendSuccess')
        })
      }
    }
  },
  watch: {}
}
</script>

<style scoped lang="stylus">
  .send__template-select
    min-width 160px
</style>
