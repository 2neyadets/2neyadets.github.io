<template lang="pug">
  form.comments__result.classic-result-form(@submit.prevent="$operatorWB.communication.save")

    .comments__result-form.flex
      .comments__result-main(:class="{'comments__result-main_full-width': !$operatorWB.communication.needCalc}")
        .comments__result-title.q-pb-sm {{$t('communications.labels.result')}}
        .comments__result-content
          .comments__result-fields.flex.items-start
            q-select.comments__select.brs3(
              v-model="$operatorWB.communication.form.status"
              :options="statusOptions"
              options-dense
              outlined
              required
              emit-value
              map-options
              :dark="false"
              color="WB-primary"
            )
            q-select.comments__select.brs3(
              v-model="$operatorWB.communication.form.result"
              :options="resultOptions"
              options-dense
              outlined
              required
              emit-value
              map-options
              :dark="false"
              color="WB-primary"
            )

            .q-mr-md.flex.items-start(v-if="$operatorWB.loans.currentLoan && $operatorWB.loans.currentLoan.product !== 'pos'")
              NotificationsTable

            p(v-if="$operatorWB.user.isUserHaveRoles(['operatorSoft', 'supervisorSoft', 'leaderSoft', 'operatorCallCenter', 'supervisorCallCenter', 'leaderCallCenter']) && $operatorWB.loans.currentLoan && $operatorWB.loans.currentLoan.product !== 'pos'")
              | {{$t('communications.labels.renewalDays')}}:&nbsp;
              | {{$operatorWB.clients.currentClient && $operatorWB.clients.currentClient.restrictions.renewalDays}}

          .comments__result-area_comment.flex.items-center {{ $t('communications.labels.comment') }}
          q-input.comments__result-area.brs3(
            v-model="form.comment"
            type="text"
            placeholder="Введите комментарий"
            orientation="vertical"
            :disable="isAmnesty"
            outlined
            dense
            :dark="false"
            color="WB-primary"
          )

      PromiseCalculators(v-if="form.promise")

      InstallmentCalculator(v-if="form.installment")

      RenewalCalculator(v-if="form.renewal")

      AmnestyCalculator(v-if="form.amnesty")

      CreditHolidaysCalculator(v-if="form.creditHolidays")

    .comments__buttons.flex.items-center.justify-end(:class="{updated: !!$operatorWB.communication.edited}")
      .comments__info.self-center.flex.items-center.justify-between(v-if="$operatorWB.communication.edited")
        strong {{$t('communications.labels.editMode')}}
        em(v-if="$operatorWB.communication.form.updatedAt") Посл. изм.: {{$operatorWB.communication.form.updatedAt}}
      q-chip(
        v-if="$operatorWB.clients.currentClient && $operatorWB.clients.currentClient.actions && $operatorWB.clients.currentClient.actions.length"
        v-for="item in $operatorWB.clients.currentClient.actions"
        :key="item.id"
        :label="item.message"
        icon="alarm"
        color="red"
        text-color="white"
      )

      Timeout(v-if="showTimer && $operatorWB.layout.isCallingCard")

      q-btn.comments__link(
        v-if="!$operatorWB.calls.currentCall"
        :disable="$operatorWB.communication.loading.saveCommunication"
        color="negative"
        @click.prevent="close"
      ) {{$t('communications.labels.closeBtn')}}

      q-btn.comments__btn.brs3.text-right(
        :loading="$operatorWB.communication.loading.saveCommunication"
        :disable="isDisableSaveBtn"
        @click.prevent="$operatorWB.communication.save"
      )
        | {{$t('communications.labels.submitBtn')}}
        q-spinner(slot="loading" size="20px")
        span(slot="loading") {{$t('communications.labels.submitBtnLoading')}}

</template>

<script>
import InstallmentCalculator from './Calculators/InstallmentCalculator/index'
import RenewalCalculator from './Calculators/RenewalCalculator/index'
import Timeout from './Timeout'
import NotificationsTable from './NotificationsTable'
import AmnestyCalculator from './Calculators/AmnestyCalculator/index'
import PromiseCalculators from './Calculators/PromiseCalculators/index'
import CreditHolidaysCalculator from './Calculators/CreditHolidaysCalculator/index'

export default {
  name: 'ResultForm',
  components: {
    CreditHolidaysCalculator,
    PromiseCalculators,
    AmnestyCalculator,
    NotificationsTable,
    Timeout,
    RenewalCalculator,
    InstallmentCalculator,
  },
  data () {
    return {
    }
  },
  computed: {
    form () {
      return this.$operatorWB.communication.form
    },
    scheme () {
      return this.$operatorWB.communication.scheme
    },
    statusOptions () {
      return this.$operatorWB.communication.statusOptions
    },
    resultOptions () {
      return this.$operatorWB.communication.resultOptions
    },
    showTimer () {
      return this.$operatorWB.communication.timeout !== null || this.$operatorWB.communication.timer !== null
    },
    isAmnesty () {
      return this.form.result === 'amnesty'
    },
    isDisableSaveBtn () {
      return (this.form.result === 'blank' && this.form.status === 'blank') ||
        this.$operatorWB.communication.loading.saveCommunication ||
        this.form.amnesty === null
    }
  },
  methods: {
    close () {
      this.$operatorWB.layout.closeClientCard({ closing: 'manual', ...this.$operatorWB.communication.form })
    }
  }
}
</script>

<style scoped lang="stylus">
  .dev-btns
    border 1px dashed red

  .q-mr-none-i
    margin-right 0 !important

  .offset-for-title
    top 10px
</style>
