<template lang="pug">
  .card
    .card__header.flex.items-center.justify-between.q-pa-none
      .q-pa-none.flex.items-center.justify-between
        template(v-if="$operatorWB.layout.isApplicationCard")
          .card__header-text.card__header-text_bordered.q-pr-md
            span Заявка №
            span {{$operatorWB.applications.get('item.externalId')}}
          .card__header-text.card__header-text_bordered.q-px-md
            span.text-profile Статус:
            span(:class="{ 'text-positive': $operatorWB.applications.get('item.status.code') === 1300, 'text-negative': $operatorWB.applications.get('item.status.code') === 1400 }") {{$operatorWB.applications.get('item.status.description')}} ({{$operatorWB.applications.get('item.status.code')}})
          .card__header-text.card__header-text_bordered.q-px-md
            span.text-profile Ответственный:
            Underwriter
        template(v-else)
          template(v-if="loan")
            .card__header-text.card__header-text_bordered.q-pr-md(v-if="loan.hasOwnProperty('contract')")
              span {{ $t('clients.card.header.contract') }}:
              span № {{loan.contract}}
            .card__header-text.card__header-text_bordered.q-pr-md(v-if="loan.product === 'pos'")
              span {{ $t('clients.card.header.client') }}:
              span {{ client && client.login }}
            .card__header-text.card__header-text_bordered.q-px-md(v-if="loan.hasOwnProperty('portfolio')")
              span.text-profile {{ $t('clients.card.header.portfolio') }}:
              Portfolio
            .card__header-text.card__header-text_bordered.q-px-md(v-if="loan.hasOwnProperty('status')")
              span.text-profile {{ $t('clients.card.header.statusOfContract') }}:
              span  {{loan.status.message}}
            .card__header-text.card__header-text_bordered.q-px-md(v-if="loan")
              span.text-profile {{ $t('clients.card.header.agreement') }}:
              template(v-if="loan.activeAgreement")
                span(v-if="loan.activeAgreement.type === 'installment'") {{ $t('loans.agreements.installment') }}
                span(v-else-if="loan.activeAgreement.type === 'renewal'") {{ $t('loans.agreements.renewal') }}
                span(v-else) {{ $t('loans.agreements.additionalAgreement') }}
              template(v-else)
                span {{ $t('loans.agreements.missing') }}
            .card__header-text.card__header-text_pad(v-if="client && client.hasOwnProperty('communications') && client.communications.length")
              span.text-profile {{ $t('clients.card.header.lastCommunication') }}:
              q-icon.q-ml-xs(name="assignment" size="25px")
                q-tooltip(anchor="bottom right" self="top right" style="min-width: 100px; max-width: 500px")
                  .q-pa-none
                    span {{ $t('clients.card.header.lastCommunicationDetails.operator')}}:&nbsp;
                    span {{ $operatorWB.clients.currentAssigned || $t('clients.card.header.unknown')}}
                  .q-pa-none
                    span {{ $t('clients.card.header.lastCommunicationDetails.status')}}:&nbsp;
                    span {{ $t('communications.status.' + $operatorWB.clients.currentLastCommunicationStatus) }}
                  .q-pa-none
                    span {{ $t('clients.card.header.lastCommunicationDetails.result')}}:&nbsp;
                    span(v-if="['smsToClient', 'emailToClient'].includes($operatorWB.clients.currentLastCommunicationStatus)")
                      | {{ $operatorWB.clients.currentLastCommunicationStatus === 'smsToClient' ? $t('communications.sms.templates.' + $operatorWB.clients.currentLastCommunicationResult) : $t('communications.email.templates.' + $operatorWB.clients.currentLastCommunicationResult)}}
                    span(v-else) {{ $t('communications.result.' + $operatorWB.clients.currentLastCommunicationResult) }}
      .q-pa-none.flex.items-center.justify-end(v-if="$operatorWB.layout.isApplicationCard")
        q-btn.q-ml-md(
          @click="$operatorWB.layout.openClientCard({clientId: client.id, source: 'applicationCardHeader', cardType: 'classic'})"
          label="Открыть классическую карту"
          color="green"
          text-color="black"
          size="12px"
          dense
        )
      .q-pa-none.flex.items-center.justify-between(v-else)
        .card__header-text.q-px-md {{ $t('clients.card.header.totalDebt') }}:
          span.info {{ money($operatorWB.clients.currentFullDebt, true) }}

        q-radio.card__header-radio.q-pa-sm(
          v-for="loan in $operatorWB.clients.currentLoansDebt"
          v-model="$operatorWB.loans.current"
          @input="checkSmsForm(loan.product)"
          :key="loan.id"
          :val="loan.id"
          color="green"
          name="money"
          :label="loanProduct(loan)"
          dense
          dark
        )
</template>

<script>
import { money } from 'src/utils/helpers'
import Portfolio from './Portfolio'
import Underwriter from './Underwriter'

export default {
  name: 'ClientCardHeader',
  components: {
    Underwriter,
    Portfolio
  },
  data () {
    return {
      money,
    }
  },
  computed: {
    loan () {
      return this.$operatorWB.loans.currentLoan
    },
    client () {
      return this.$operatorWB.clients.currentClient
    }
  },
  methods: {
    loanProduct (loan) {
      return loan && this.$t('loans.product.' + loan.product) + ': ' + money(loan.total, true)
    },
    checkSmsForm (loanProduct) {
      if (loanProduct === 'pos') this.$operatorWB.communication.currentForm = 'result'
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
