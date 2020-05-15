<template lang="pug">
  q-dialog.change-payment-group(:value="show" @hide="$emit('close')" :persistent="loading")
    q-card.change-payment-group__card.row.justify-center.items-center(class="bg-WB-modal-bg-color text-WB-text-profile-color")
      q-card-section.col-12.flex.justify-center.items-center.font-size-normal.q-pb-none
        span Изменение группы для платежа&nbsp;
        strong.text-WB-secondary {{paymentId}}
      q-card-section.col-12.row.justify-center.items-center
        q-select.min-w-200px.full-width(
          transition-show="fade"
          transition-hide="fade"
          v-model="group"
          :options="$managerWB.user.groupsForSelect"
          standout="bg-WB-secondary text-WB-secondary"
          color="WB-secondary"
          popup-content-class="bg-WB-dark text-white"
          clearable
          dense
          outlined
          options-dense
          dark
        )
      q-card-section.col-12.flex.justify-end.items-center.text-WB-primary.q-pt-none(align="right")
        q-btn.q-mr-md(
          @click="$emit('close')"
          color="WB-secondary"
          :loading="loading"
          label="Отмена"
          flat
        )
          template(#loading)
            q-skeleton.full-width.full-height
        q-btn(
          @click="changeGroupForPayment"
          :loading="loading"
          :disable="group === null"
          :color="group === null ? '' : 'WB-secondary'"
          label="Перезакрепить платёж"
        )
          template(#loading)
            q-skeleton.full-width.full-height
</template>

<script>
import { Notify } from 'quasar'

export default {
  name: 'changeGroupForPaymentDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    paymentId: {
      type: Number,
      default: 0
    },
  },
  data () {
    return {
      group: null,
      loading: false
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    async changeGroupForPayment () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        Notify.create({
          message: `Платёж ${this.paymentId} перезакреплён за группой ${this.group.label}`,
          color: 'positive',
          position: 'bottom',
          icon: 'check_circle_outline'
        })
        this.$emit('close')
      }, 2000)
    }
  },
}
</script>

<style scoped lang="stylus">
</style>
