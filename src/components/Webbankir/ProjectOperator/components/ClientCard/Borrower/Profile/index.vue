<template lang="pug">

  q-card.card.brs5.ovh.profile-block.q-ml-xs
    q-card-section.q-pa-none
      .card__title.flex.justify-between.items-center
        .card__title-left.flex
          .card__title-loaner {{$t('clients.card.main.borrower')}}
          Clock.card__title-city(v-if="client" :timeZone="client.timeZone")
        .card__title-right.flex
          .q-pa-none
            span.q-mr-sm {{$t('clients.card.main.lastLogin')}}:
            strong.text-amber-9 {{clientLastLogin}}

    q-card-section.card__content.q-pa-none(v-if="client")
      .card__profile.flex
        .card__profile-left
          .card__row.flex.items-center.justify-between
            .card__row-left {{$t('clients.labels.name')}}
            .card__row-right.name
              q-icon(:name="clientGenderClass" :color="clientGenderColor")
              template(v-if="currentCard && currentCard.isEditing")
                .flex.justify-between.items-center.full-width
                  q-input.input-for-profile(
                    v-model="client.lastName"
                    outlined
                    color="WB-warning-color"
                    placeholder="Фамилия"
                  )
                  q-input.input-for-profile(
                    v-model="client.firstName"
                    outlined
                    color="WB-warning-color"
                    placeholder="Имя"
                  )
                  q-input.input-for-profile(
                    v-model="client.middleName"
                    outlined
                    color="WB-warning-color"
                    placeholder="Отчество"
                  )
              template(v-else)
                span {{clientName}}
          .card__row.flex.items-center.justify-between
            .card__row-left {{$t('clients.labels.birthDate')}}
            .card__row-right
              template(v-if="currentCard && currentCard.isEditing")
                .flex.justify-between
                  q-input.date-picker.input-for-profile(
                    v-model="birthDate"
                    :format="'DD.MM.YYYY'"
                    outlined
                    readonly
                  )
                    template(slot="append")
                      q-icon.cursor-pointer(name="event")
                        q-popup-proxy(
                          ref="qDateProxy2"
                          transition-show="scale"
                          transition-hide="scale"
                        )
                          q-date(
                            v-model="birthDate"
                            :default-year-month="defaultDate(birthDate)"
                            @input="hideQDate('qDateProxy2', 'birthDate')"
                            :mask="'DD.MM.YYYY'"
                          )
                  .text-center полных лет {{yearsFromNow}}
              template(v-else)
                span {{clientBirthDate}} (полных лет {{client.age}})
          .card__row.mh40.flex.justify-between
            .card__row-left {{$t('clients.labels.address')}}
            .card__row-right.flex
              template(v-if="currentCard && currentCard.isEditing")
                .flex.justify-between.items-start.full-width
                  q-input.input-for-profile.smaller-input(
                    type="number"
                    v-model="client.homeAddress && client.homeAddress.postalCode"
                    outlined
                    color="WB-warning-color"
                    placeholder="Индекс"
                  )
                  q-input.input-for-profile.smaller-input(
                    v-model="client.homeAddress && client.homeAddress.city"
                    outlined
                    color="WB-warning-color"
                    placeholder="Город"
                  )
                  q-input.input-for-profile.smaller-input(
                    v-model="client.homeAddress && client.homeAddress.street"
                    outlined
                    color="WB-warning-color"
                    placeholder="Улица"
                  )
                .flex.justify-between.items-end.full-width
                  q-input.input-for-profile.smaller-input(
                    v-model="client.homeAddress && client.homeAddress.house"
                    outlined
                    color="WB-warning-color"
                    placeholder="Дом"
                  )
                  q-input.input-for-profile.smaller-input(
                    v-model="client.homeAddress && client.homeAddress.building"
                    outlined
                    color="WB-warning-color"
                    placeholder="Строение"
                  )
                  q-input.input-for-profile.smaller-input(
                    v-model="client.homeAddress && client.homeAddress.flat"
                    outlined
                    color="WB-warning-color"
                    placeholder="Квартира"
                  )
              template(v-else)
                span {{clientAddress}}
          .card__row.mh40.flex.justify-between(:class="currentCard && currentCard.isEditing ? 'xs-padding' : ''")
            .card__row-left.flex.items-center {{$t('clients.labels.passport')}}
            .card__row-right
              template(v-if="currentCard && currentCard.isEditing")
                .flex.justify-between.items-center.full-width.full-height
                  .q-pa-none
                    .text-WB-text-profile-color.font-size-sm.q-pb-xs Серия и номер
                    q-input.input-for-profile(
                      type="number"
                      v-model="client.passport.number"
                      outlined
                      color="WB-warning-color"
                    )
                  .q-pa-none
                    .text-WB-text-profile-color.font-size-sm.q-pb-xs Дата выдачи
                    q-input.date-picker.input-for-profile(
                      v-model="issuedAt"
                      :format="'DD.MM.YYYY'"
                      outlined
                      readonly
                    )
                      template(slot="append")
                        q-icon.cursor-pointer(name="event")
                          q-popup-proxy(
                            ref="qDateProxy4"
                            transition-show="scale"
                            transition-hide="scale"
                          )
                            q-date(
                              v-model="issuedAt"
                              :default-year-month="defaultDate(issuedAt)"
                              @input="hideQDate('qDateProxy4')"
                              :mask="'DD.MM.YYYY'"
                            )
                  .q-pa-none
                    .text-WB-text-profile-color.font-size-sm.q-pb-xs Код подразделения
                    q-input.input-for-profile(
                      v-model="client.passport.dept"
                      outlined
                      color="WB-warning-color"
                    )
              template(v-else)
                span {{clientPassport}}
          .card__row.flex.justify-between
            .card__row-left {{$t('clients.labels.phone')}}
            .card__row-right
              template(v-if="isApplicationCard")
                .phone-for-application {{client.phone}}
              template(v-else)
                Phones(:profile="client.profile")
          .card__row.flex.items-center.justify-between
            .card__row-left {{$t('clients.labels.email')}}
            template(v-if="isApplicationCard")
              .card__row-right.flex.justify-between.items-center.email-for-application {{client.email}}
            template(v-else)
              Emails(:client="client")
          .card__row.card__row-children.flex.items-center.justify-between
            .card__row-left {{$t('clients.labels.marital')}}
            .card__row-right.flex.justify-between.items-center
              .card__married {{clientMartial}}
              .card__children {{$t('clients.labels.children')}}
              .card__children-amount {{children}}
          .card__row.flex.items-center.justify-between
            .card__row-left {{$t('clients.labels.education')}}
            .card__row-right {{clientEducation}}
          .card__row.flex.items-center.card__socials.justify-between
            .card__row-left {{$t('clients.labels.socialNetworks')}}
            SocialNetworks(:client="client")
        .card__profile-right
          .card__right-block.flex
            .card__right-info
              .card__row.mh40.flex
                .card__row-left {{$t('clients.labels.secretPhrase')}}
                .card__row-right
                  span.card__secret-question.q-mb-xs {{client.secretCustomQuestion || (client.secret && client.secret.type)}}
                  .card__secret-answer {{client.secret && client.secret.answer}}
              .card__row.flex
                .card__row-left {{$t('clients.labels.employment')}}
                .card__row-right
                  span(:class="client.workAddress ? 'link' : ''")
                    span(v-html="client.employerName")
                    q-tooltip
                      span {{(client.workAddress && (client.workAddress.fullByGuid || client.workAddress.fullAddress)) || workAddress}}

              .card__row.flex.items-center
                .card__row-left {{$t('clients.labels.industry')}}
                .card__row-right {{client.employerIndustry}}
              .card__row.flex.items-center
                .card__row-left {{$t('clients.labels.position')}}
                .card__row-right {{client.position || client.employmentType}}
              .card__row.flex.items-center
                .card__row-left {{$t('clients.labels.income')}}
                .card__row-right {{money(client.monthlyIncome, true)}}
              .card__row.flex.items-center
                .card__row-left {{$t('clients.labels.account')}}
                .card__row-right.min-w-200px.max-w-300px
                  template(v-if="currentCard && currentCard.isEditing")
                    q-select.select-for-profile(
                      v-model="$operatorWB.communication.paymentSystemSelect"
                      :options="paymentSystemOptions"
                      color="WB-warning-color"
                      options-dense
                      outlined
                    )
                      template(#option="scope")
                        q-item(v-bind="scope.itemProps" v-on="scope.itemEvents")
                          q-item-section
                            q-item-label(v-html="scope.opt.label")
                            q-item-label(caption) {{ scope.opt.description }}
                  template(v-else)
                    span {{paymentSystem}}
              .card__row.flex.items-center
                .card__row-left {{$t('clients.labels.additional')}}
                .card__row-right(v-if="isApplicationCard")
                  span.link(@click="setView('relations')") Связи данных {{$operatorWB.clients.currentRelations && $operatorWB.clients.currentRelations.length ? `(${$operatorWB.clients.currentRelations.length})` : ''}}
                  span &nbsp;&nbsp;&nbsp;
                  span.link(@click="setView('creditHistory')") Кредитная история {{$operatorWB.clients.currentCreditHistory && $operatorWB.clients.currentCreditHistory.length ? `(${$operatorWB.clients.currentCreditHistory.length})` : ''}}
                .card__row-right(v-else)
                  span.card__link-file.link(v-if="client.files") {{$t('clients.labels.attachments')}} ({{client.files && client.files.length}})
              .card__row.flex.items-center(v-if="isApplicationCard && !(currentCard && currentCard.isEditing)")
                q-btn.full-width(
                  @click="currentCard.isEditing = !currentCard.isEditing"
                  label="Изменить регистрационные данные заёмщика"
                  color="WB-primary"
                )

            POS(v-if="loan && loan.product === 'pos'")
            Loan(v-else)
          Reliability(v-if="!isApplicationCard")
</template>

<script>
import camelCase from 'lodash/camelCase'
import Reliability from './Reliability'
import Loan from './Loan'
import Emails from './Emails'
import Phones from './Phones'
import Clock from './Clock'
import SocialNetworks from './SocialNetworks'
import POS from './POS'
import { num2words } from 'src/utils/mappers'
import { changeDateFormat, getShortDate, money } from 'src/utils/helpers'
import { date } from 'quasar'
import moment from 'moment/moment'

export default {
  name: 'Profile',
  components: {
    POS,
    Reliability,
    Loan,
    Emails,
    Clock,
    Phones,
    SocialNetworks
  },
  props: {
    client: {
      type: Object
    }
  },
  data () {
    return {
      camelCase,
      num2words,
      getShortDate,
      money,
      isVisible: false,
    }
  },
  mounted () {
    if (this.paymentSystemOptions) this.$operatorWB.communication.paymentSystemSelect = this.paymentSystemOptions[0]
  },
  methods: {
    setView (val) {
      this.$operatorWB.layout.view = val
    },
    showTooltip () {
      this.isVisible = !this.isVisible
    },
    hideQDate (ref, key = '') {
      this.$refs[ref].hide()
      if (key === 'birthDate') this.client.age = this.yearsFromNow
    },
    defaultDate (birthDate) {
      const arr = birthDate.split('.')
      return arr[2] + '/' + arr[1]
    }
  },
  computed: {
    currentCard () {
      return this.$operatorWB.layout.currentCard
    },
    isApplicationCard () {
      return this.$operatorWB.layout.isApplicationCard
    },
    loan () {
      return this.isApplicationCard ? this.$operatorWB.applications.get('item') : this.$operatorWB.loans.currentLoan
    },
    clientBirthDate () {
      return this.client && getShortDate(this.client.birthDate)
    },
    birthDate: {
      get () {
        return this.client && changeDateFormat(this.client.birthDate, 'YYYY-MM-DD', 'DD.MM.YYYY')
      },
      set (v) {
        this.client.birthDate = changeDateFormat(v, 'DD.MM.YYYY', 'YYYY-MM-DDTHH:mm:ssZ')
      }
    },
    issuedAt: {
      get () {
        return this.client && changeDateFormat(this.client.passport.issuedAt, 'YYYY-MM-DD', 'DD.MM.YYYY')
      },
      set (v) {
        this.client.passport.issuedAt = changeDateFormat(v, 'DD.MM.YYYY', 'YYYY-MM-DDTHH:mm:ssZ')
      }
    },
    clientLastLogin () {
      return this.client && date.formatDate(this.isApplicationCard
        ? this.$operatorWB.applications.get('item.lastLogin') && this.$operatorWB.applications.get('item.lastLogin.date')
        : this.client.lastLogin, 'DD.MM.YYYY HH:mm:ss'
      )
    },
    clientGenderClass () {
      return this.client && 'fa fa-' + this.client.gender
    },
    clientGenderColor () {
      return this.client && this.client.gender === 'male' ? 'blue' : 'pink'
    },
    clientName () {
      return this.client && (
        (this.client.lastName || '') +
        ' ' +
        (this.client.firstName || '') +
        ' ' +
        (this.client.middleName || '')
      )
    },
    clientMartial () {
      return this.client && !!this.client.maritalStatus
        ? this.$t('clients.marital.' + this.client.maritalStatus)
        : ''
    },
    clientEducation () {
      return this.client && !!this.client.education
        ? this.$t('clients.education.' + camelCase(this.client.education))
        : ''
    },
    paymentSystem () {
      if (!this.loan) return ''
      const { paymentSystem } = this.loan
      return paymentSystem &&
        this.$t('clients.paymentSystem.' + paymentSystem.type) +
        (paymentSystem.number ? ` (${paymentSystem.number.substring(0, 4)}******${paymentSystem.number.substring(paymentSystem.number.length - 4)})` : '')
    },
    paymentSystemOptions () {
      // eslint-disable-next-line no-prototype-builtins
      if (this.loan && this.loan.hasOwnProperty('paymentSystem')) {
        return [this.loan.paymentSystem].map(item => {
          return {
            label: item.number,
            type: item.type,
            description: this.$t(`clients.paymentSystem.${item.type}`)
          }
        }).concat([{
          label: 'CONTACT',
          type: 'contact',
          description: this.$t('clients.paymentSystem.contact')
        }]) || []
      }
      return []
    },
    clientAddress () {
      if (!(this.client)) return ''
      const { homeAddress } = (this.client) || null
      return homeAddress && (
        (homeAddress.postalCode || '') +
        ' ' +
        (homeAddress.city || '') +
        ' ' +
        (homeAddress.street || '') +
        ' ' +
        'д. ' +
        (homeAddress.house || '') +
        ' ' +
        (homeAddress.building || '') +
        ' ' +
        'кв. ' +
        (homeAddress.flat || '')
      )
    },
    workAddress () {
      if (!this.client) return ''
      const { workAddress } = (this.client) || null
      const wa = workAddress && (
        (workAddress.postalCode || '') +
        ((workAddress.city && ', ' + workAddress.city) || '') +
        ((workAddress.street && ', ' + workAddress.street) || '') +
        ((workAddress.house && ', д. ' + workAddress.house) || '') +
        ((workAddress.corpus && ', корп. ' + workAddress.corpus) || '') +
        ((workAddress.stroenie && ', стр. ' + workAddress.stroenie) || '') +
        ((workAddress.apartment && ', апарт. ' + workAddress.apartment) || '')
      )
      return wa
    },
    clientPassport () {
      if (!this.client) return ''
      const { passport } = this.client
      return passport && passport.number && (
        passport.number.slice(0, 4) +
        ' ' +
        passport.number.slice(4) +
        ' ' +
        getShortDate(passport.issuedAt) +
        ',' +
        ' код подразделения ' +
        passport.dept
      )
    },
    children () {
      let children
      if (this.client && this.client.childrenCount === 0) {
        children = 'Нет'
      } else {
        children =
          this.client &&
          this.client.childrenCount +
          ' ' +
          num2words(this.client.childrenCount, 'ребенок')
      }
      return children || null
    },
    yearsFromNow () {
      return moment().diff(this.client.birthDate, 'years')
    }
  },
  watch: {
    loan (v) {
      if (this.paymentSystemOptions) this.$operatorWB.communication.paymentSystemSelect = this.paymentSystemOptions[0]
    }
  }
}
</script>

<style lang="stylus">
  .input-for-profile
    font-size: $font-size-sm

    .q-field__control
      padding 0 6px

    .q-field__control, .q-field__append
      line-height: 15px
      font-size 11px
      min-height 15px
      height 15px

    .q-field__native
      min-height: 0
      padding-bottom: 0
      padding-top: 0
      height: 15px

  .select-for-profile
    font-size: $font-size-sm

    .q-field__control
      padding 0 6px

    .q-field__control, .q-field__append
      line-height: 18px
      font-size 12px
      min-height 18px
      height 18px

    .q-field__append
      font-size 18px

    .q-field__native
      min-height: 0
      padding-bottom: 0
      padding-top: 0
      height: 18px

  .smaller-input

    .q-field__control, .q-field__append
      line-height: 14px
      min-height 14px
      height 14px

    .q-field__native
      height: 14px

  .xs-padding
    padding-top 3px !important
    padding-bottom 3px !important

  .phone-for-application
    min-height 59px

  .email-for-application
    min-height 28px
</style>
