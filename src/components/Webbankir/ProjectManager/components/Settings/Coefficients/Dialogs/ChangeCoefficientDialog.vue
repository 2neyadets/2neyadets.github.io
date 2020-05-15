<template lang="pug">
  q-dialog.change-coefficient-dialog(v-model="$managerWB.layout.dialogs.settings.changeCoefficient")
    q-card.change-coefficient-dialog__card.row.justify-center.items-center.max-w-300px(class="bg-WB-modal-bg-color text-WB-text-profile-color")
      q-card-section.col-12.flex.justify-center.items-center.font-size-normal.q-mb-sm
        span Изменение весового коэффициента для группы&nbsp;
        strong.text-WB-secondary {{row.name}}
      q-card-section.col-12.row.justify-center.items-center
        .col-11
          q-slider(
            v-model="coefficient"
            color="WB-secondary"
            :step="25"
            markers
            label
            label-always
          )
      q-card-actions.col-12.flex.justify-end.items-center.text-WB-primary(align="right")
        q-btn(
          color="WB-secondary"
          :label="$t('schedule.labels.cancel')"
          flat
          v-close-popup
        )
        q-btn(
          @click="changeCoefficient({ id: row.id, rank: coefficient })"
          :disable="coefficient === row.rank"
          :color="coefficient === row.rank ? '' : 'WB-secondary'"
          label="Изменить весовой коэффициент"
          v-close-popup
        )
</template>

<script>
import { Notify } from 'quasar'

export default {
  name: 'ChangeCoefficientDialog',
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      coefficient: null
    }
  },
  created () {
    this.coefficient = this.row.rank
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    async changeCoefficient (obj) {
      this.$managerWB.user.groups.find(group => group.id === obj.id).rank = obj.rank
      Notify.create({
        message: `Весовой коэффициент группы ${this.row.name} успешно изменён`,
        color: 'positive',
        position: 'bottom',
        icon: 'check_circle_outline'
      })
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
