<template lang="pug">
  q-dialog.auto-fill-dialog(v-model="$managerWB.layout.schedule.autoFillGraphicsModal" persistent)
    q-card.row.justify-center.items-center(class="bg-WB-modal-bg-color text-WB-text-profile-color")
      q-card-section.col-12.flex.justify-start.items-center.text-justify.font-size-normal
        span Чтобы автозаполнить пустой табель, нужно проставить по одному первому запланированному рабочему дню (Р) для каждого сотрудика.&nbsp;
        br
        span Оставшиеся дни для сотрудника должны быть без статуса (БС).&nbsp;
        br
        span Для тех сотрудников, чьи первые дни графика автозаполнились при создании на основании данных с прошлого месяца, проставлять первый запланированный рабочий день не требуется.
        br
        br
        .flex.justify-center.full-width
          .text-negative
            strong ВНИМАНИЕ! ЭТА ОПЕРАЦИЯ ОТМЕНИТ ВСЕ ИЗМЕНЕНИЯ, СДЕЛАННЫЕ РАНЕЕ!!!
      q-card-actions.col-12.flex.justify-end.items-center.text-WB-primary(align="right")
        q-btn(
          color="WB-secondary"
          :label="$t('schedule.labels.noDoNotFill')"
          flat
          v-close-popup
        )
        q-btn(
          @click="$managerWB.schedule.autoFillGraphics({ id: $managerWB.schedule.idOfThisMonthTimesheet, schedules: $managerWB.schedule.schedulesForChanges })"
          color="WB-secondary"
          :label="$t('schedule.labels.yesFill')"
          v-close-popup
        )
</template>

<script>
export default {
  name: 'AutoFillDialog',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
</style>
