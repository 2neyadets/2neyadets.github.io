<template lang="pug">
  .contactsWithClient__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span {{$t('loanRedistribution.filters.titles.contactsWithClient')}}
    .flex.justify-around.items-center
      q-checkbox.q-mx-xs(
        v-model="$managerWB.loanRedistribution.filters.contactsWithClient.isContacted.yes"
        @input="uncheckContactWithClient(true)"
        :label="$t('loanRedistribution.filters.labels.yes')"
        color="positive"
        keep-color
      )
      q-checkbox.q-mx-xs(
        v-model="$managerWB.loanRedistribution.filters.contactsWithClient.isContacted.no"
        @input="uncheckContactWithClient(false)"
        :label="$t('loanRedistribution.filters.labels.no')"
        color="negative"
        keep-color
      )
      .q-ma-xs
        .text-center
          span {{$t('loanRedistribution.filters.labels.oldestDate')}}
        .flex.justify-center.items-center.q-my-xs.q-mx-sm
          q-input.q-px-xs(
            v-model="rusDate"
            mask="##.##.####"
            color="WB-secondary"
            input-class="text-center text-WB-bg-profile-color q-pa-none"
            standout="bg-WB-secondary"
            dense
            dark
            outlined
            readonly
          )
            q-popup-proxy(
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            )
              q-date(
                v-model="$managerWB.loanRedistribution.filters.contactsWithClient.oldestDate"
                @input="() => $refs.qDateProxy.hide()"
                color="WB-modal-bg-color"
                :dark="false"
              )
            template(#append)
              q-icon.cursor-pointer(name="event")
</template>

<script>
import { changeDateFormat } from 'src/utils/helpers'

export default {
  name: 'ContactWithClientBlock',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    rusDate: {
      get () {
        return changeDateFormat(this.$managerWB.loanRedistribution.filters.contactsWithClient.oldestDate)
      },
      set (v) {
        this.$managerWB.loanRedistribution.filters.contactsWithClient.oldestDate = changeDateFormat(v, 'DD.MM.YYYY', 'YYYY/MM/DD')
      }
    },
  },
  methods: {
    uncheckContactWithClient (source) {
      if (source) {
        this.$managerWB.loanRedistribution.filters.contactsWithClient.isContacted.no = false
      } else {
        this.$managerWB.loanRedistribution.filters.contactsWithClient.isContacted.yes = false
      }
    },
  }
}
</script>

<style scoped lang="stylus">
</style>
