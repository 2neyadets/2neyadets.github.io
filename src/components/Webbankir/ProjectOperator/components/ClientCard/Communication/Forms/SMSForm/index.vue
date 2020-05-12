<template lang="pug">
  form.form__send-template
    .send__template
      .row.justify-between
        .min-w-60
          .send__template-title {{ $t('communications.sms.template') }}
          .send__template-field.flex.justify-between.q-mb-sm
            q-select.send__template-select.brs3.full-width(
              v-model="$operatorWB.communication.smsForm.result"
              :options="smsOptions"
              outlined
              options-dense
              required
              emit-value
              map-options
              :dark="false"
              color="WB-primary"
            )
      .send__template-text {{ $t('communications.sms.text') }}
      q-input.send__template-area.brs3.textarea-for-templates(
        :value="textForSMS"
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
            :disable="$operatorWB.communication.smsForm.result === 'blank' || $operatorWB.communication.loading.sendSMS"
            :readonly="$operatorWB.communication.smsForm.result === 'blank' || $operatorWB.communication.loading.sendSMS"
            @click="fillFormForSmsAndSend"
            :loading="$operatorWB.communication.loading.sendSMS"
          )
            | {{$t('communications.labels.sendSMS')}}
            q-spinner(slot="loading" size="20px")
            span(slot="loading") {{$t('communications.sms.sendInProgress')}}
</template>

<script>
import { date } from 'quasar'
import api from 'src/api'

export default {
  name: 'SMSForm',
  data () {
    return {
      activeSms: true,
    }
  },
  computed: {
    smsOptions () {
      return this.$operatorWB.communication.smsOptions
    },
    textForSMS () {
      let resultText = this.$t(`communications.sms.textForTemplates.${this.$operatorWB.communication.smsForm.result}`)
      if (resultText.includes('#login#')) {
        resultText = this.changeTextForSMS('#login#', resultText)
      }
      if (resultText.includes('#totalDebt#')) {
        resultText = this.changeTextForSMS('#totalDebt#', resultText)
      }
      if (resultText.includes('#contract#')) {
        resultText = this.changeTextForSMS('#contract#', resultText)
      }
      if (resultText.includes('#promisedAmount#')) {
        resultText = this.changeTextForSMS('#promisedAmount#', resultText)
      }
      if (resultText.includes('#promisedAtDate#')) {
        resultText = this.changeTextForSMS('#promisedAtDate#', resultText)
      }
      return resultText
    },
    textForSMSForBackEnd () {
      return this.$t(`communications.sms.textForTemplates.${this.$operatorWB.communication.smsForm.result}`) || ''
    },
    currentPhones () {
      return this.$operatorWB.clients.currentPhones || []
    },
    mainPhone () {
      return this.currentPhones.find(item => item.main === true) || {}
    }
  },
  methods: {
    changeTextForSMS (variable, string) {
      const index = string.indexOf(variable)
      let middle = ''
      let lengthOfVar = 0
      switch (variable) {
        case '#login#':
          middle = this.$operatorWB.clients.currentClient.login.toString()
          lengthOfVar = 7
          break
        case '#totalDebt#':
          middle = this.$operatorWB.clients.currentFullDebt.toString()
          lengthOfVar = 11
          break
        case '#contract#':
          middle = this.$operatorWB.loans.currentLoan.contract.toString()
          lengthOfVar = 10
          break
        case '#promisedAmount#':
          lengthOfVar = 16
          // eslint-disable-next-line no-prototype-builtins
          if (this.$operatorWB.loans.lastPromise && this.$operatorWB.loans.lastPromise.hasOwnProperty('promisedAmount')) {
            middle = this.$operatorWB.loans.lastPromise.promisedAmount.toString()
          } else {
            middle = this.$operatorWB.loans.currentLoan.current.interests.toString()
          }
          break
        case '#promisedAtDate#':
          lengthOfVar = 16
          if (this.$operatorWB.loans.lastPromise) {
            middle = this.$operatorWB.loans.lastPromise.promisedAt.toString()
            middle = middle[8] + middle[9] + '.' + middle[5] + middle[6] + '.' + middle[0] + middle[1] + middle[2] + middle[3]
            break
          } else {
            middle = '!!!ОШИБКА!!!'
            break
          }
        default:
          middle = '!!!ОШИБКА!!!'
      }
      const firstPartOfString = string.slice(0, index) || ''
      const secondPartOfString = string.slice(index + lengthOfVar, string.length) || ''
      return firstPartOfString + middle + secondPartOfString
    },
    async fillFormForSmsAndSend () {
      const smsForm = {
        clientId: this.$operatorWB.clients.current,
        productId: this.$operatorWB.loans.current,
        dealId: (!this.$operatorWB.loans.current || this.$operatorWB.loans.current > 0) ? null : this.$operatorWB.loans.currentDealId,
        comment: this.textForSMSForBackEnd,
        channel: {
          phone: {
            number: this.mainPhone && this.mainPhone.number,
            variant: 'sms'
          }
        },
        contactedAt: date.formatDate(Date.now(), 'YYYY-MM-DDTHH:mm:ssZZ'),
        result: this.$operatorWB.communication.smsForm.result
      }
      this.$operatorWB.communication.smsForm = { ...this.$operatorWB.communication.smsForm, ...smsForm }
      this.$operatorWB.communication.loading.sendSMS = true
      const res = await api.crm.addCommunication(this.$operatorWB.communication.smsForm, this)
      this.$operatorWB.communication.loading.sendSMS = false
      if (res.data) {
        this.$operatorWB.clients.getCommunications(this.$operatorWB.clients.current)
        if (!smsForm.result.includes('CreditHolidays')) {
          this.$operatorWB.loans.currentMessages.today++
          this.$operatorWB.loans.currentMessages.thisWeek++
          this.$operatorWB.loans.currentMessages.thisMonth++
        }
        if (this.$operatorWB.loans.isDisabledByLotOfMessages) {
          this.$operatorWB.communication.currentForm = 'result'
        }
        this.$operatorWB.messages.show({
          color: 'positive',
          message: this.$t('communications.sms.sendSuccess')
        })
      }
    }
  },
  created () {
  },
  watch: {}
}
</script>

<style scoped lang="stylus">
</style>
