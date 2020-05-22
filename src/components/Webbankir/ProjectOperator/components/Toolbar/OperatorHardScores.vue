<template lang="pug">
  div
    .operator-scores-hard
      .row.items-center.full-height
        .col-5.q-px-sm
          q-select.select__group(
            v-model="$operatorWB.user.currentGroup"
            :options="groups"
            bg-color="grey-9"
            label-color="white"
            color="WB-primary"
            :dark="true"
            popup-content-class="text-black bg-white"
            dense
            options-dense
            standout
          )
        .col-5
          .row(@click="hardStat = !$operatorWB.user.loading.ratings && !hardStat")
            .full-width.flex.justify-between.text-bold.text-yellow-6
              span Ваш рейтинг:
              span {{ params && params.rating }}
            .full-width.flex.justify-between.text-bold
              span Cбор:
              span {{ params && params.amount && money(params.amount, true) }}
        .col-2.text-grey-5
          .row.justify-center {{ updated }}
          .row.justify-center(@click="$operatorWB.user.loadRatings()")
            q-icon(size="16px" name="cached")

      q-inner-loading(:showing="$operatorWB.user.loading.ratings")
        q-spinner(size="20" color="white")

    q-dialog(v-model="hardStat" content-style="min-width: 730px;" content-class="operatorWB__dialog operatorWB__stat-dialog")
      HardStat(@close="hardStat = !hardStat")
</template>

<script>
import HardStat from '../../components/Stats/Hard/HardStat'
import { money } from 'src/utils/helpers'
import { currentPeriod } from 'src/utils/mappers'
import { date } from 'quasar'

export default {
  name: 'OperatorHardScores',
  components: { HardStat },
  data () {
    return {
      hardStat: false,
      money,
      visible: true,
      group: null
    }
  },
  computed: {
    updated () {
      const mess = this.$operatorWB.user.updated && date.formatDate(this.$operatorWB.user.updated, 'HH:mm')
      return mess
    },
    groups () {
      return (this.$operatorWB.user.ratings && this.$operatorWB.user.ratings.employee &&
        this.$operatorWB.user.ratings.employee.groups.map(item => ({
          label: item.name,
          value: item.id
        }))) || []
    },
    params () {
      if (!this.$operatorWB.user.ratings || !this.$operatorWB.user.ratings.groups) return {}
      const group = this.$operatorWB.user.ratings.groups.find(i => this.$operatorWB.user.currentGroup ? i.id === this.$operatorWB.user.currentGroup.value : false)
      return group && group.indicators.monthly[currentPeriod()]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .operator-scores-hard
    cursor: pointer
    border: 1px solid white
    padding: 2px
    border-radius: 4px
    width: 350px
    font-size: 11px
    position: relative
    height 35.42px

  .q-input-target
    color: white

</style>
