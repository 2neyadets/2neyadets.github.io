<template lang="pug">
  q-form.payments-search.q-pa-sm(@submit.prevent="findPayments")
    .flex.justify-around.items-center
      .q-ma-xs
        .text-center
          span Клиент
        .flex.justify-center.items-center.q-my-xs.q-mx-sm
          q-input.search.min-w-225px(
            v-model="login"
            placeholder="Введите логин клиента"
            color="WB-secondary"
            input-class="text-center text-WB-bg-profile-color q-pa-none"
            standout="bg-WB-secondary text-WB-secondary"
            dense
            outlined
            clearable
            dark
          )
            template(#prepend)
              q-icon(name="person")
      .q-ma-xs
        .text-center
          span Платежи от
        .flex.justify-center.items-center.q-my-xs.q-mx-sm
          q-input.q-px-xs(
            :value="valueForDate"
            :disable="all"
            color="WB-secondary"
            input-class="text-center text-WB-bg-profile-color q-pa-none"
            standout="bg-WB-secondary text-WB-secondary"
            dense
            outlined
            readonly
            dark
          )
            q-popup-proxy(
              ref="qDateProxyFrom"
              transition-show="scale"
              transition-hide="scale"
            )
              q-date(
                v-model="from"
                @input="() => $refs.qDateProxyFrom.hide()"
                :options="canChooseDatesFrom"
                color="WB-modal-bg-color"
                :dark="false"
              )
            template(#append)
              q-icon.cursor-pointer(name="event")
      .q-ma-xs
        .flex.justify-center.items-center.q-my-xs.q-mx-sm
          q-toggle(
            v-model="all"
            label="Все платежи клиента"
            color="WB-secondary"
            checked-icon="check"
            unchecked-icon="clear"
            size="lg"
            dark
          )
      .q-ma-xs
          q-btn(
            type="submit"
            :loading="loading"
            :disable="!login"
            :color="!login ? '' : 'WB-secondary'"
            label="Найти платежи"
            icon-right="search"
          )
            template(#loading)
              q-skeleton.full-width.full-height
</template>

<script>
import api from 'src/api'
import { Notify, date } from 'quasar'
const { formatDate, extractDate } = date
import moment from 'moment/moment'
import { changeDateFormat } from 'src/utils/helpers'

const today = moment().format('YYYY/MM/DD')
const fiveYearsAgo = moment().add({ years: -5 }).format('YYYY/MM/DD')

export default {
  name: 'PaymentsSearch',
  data () {
    return {
      login: '190679010',
      from: moment().format('YYYY/MM/DD'),
      all: true,
      loading: false
    }
  },
  created () {
  },
  computed: {
    valueForDate () {
      return changeDateFormat(this.from)
    }
  },
  methods: {
    canChooseDatesFrom (date) {
      return date >= fiveYearsAgo && date <= today
    },
    async findPayments () {
      if (!this.login || this.loading) return false
      this.loading = true
      setTimeout(async () => {
        const res = await api.crm.getPayments({
          login: this.login,
          from: formatDate(extractDate(this.from, 'YYYY/MM/DD'), 'YYYY-MM-DD'),
          to: moment().format('YYYY-MM-DD'),
          all: this.all
        })
        this.loading = false
        if (res) {
          if (res.data.payments.length === 0) {
            Notify.create({
              message: `Для клиента с логином ${this.login} не найдены платежи по заданным критериям`,
              color: 'warning',
              textColor: 'black',
              position: 'bottom',
              icon: 'warning'
            })
          }
          if (res.data.payments.length) {
            Notify.create({
              message: 'Платежи для перезакрепления получены',
              color: 'positive',
              position: 'bottom',
              icon: 'check_circle_outline'
            })
          }
          this.$emit('loaded', Object.assign({}, res.data, { from: changeDateFormat(this.from), all: this.all }))
        }
      }, 800)
    }
  },
  watch: {
    loading (v) {
      this.$emit('loading', v)
    }
  }
}
</script>

<style scoped lang="stylus">
  .payments-search
    border: 1px solid
    border-radius 5px
    border-color #979797
    background #575657

    .q-field--with-bottom
      padding 0
</style>
