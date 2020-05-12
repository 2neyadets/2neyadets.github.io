<template lang="pug">

  .card__right-block.card__reliability
    .card__row.flex.items-center.card__reliability-block
      .card__row-left.card__reliability-left.text-left.card__reliability-text {{ $t('clients.reliability.info') }}
      .card__row-right.card__reliability-right.text-right.danger(v-show="currentClient && currentClient.blacklisted")
        b {{ $t('clients.reliability.blacklist') }}
    .card__row.flex.items-center
      .card__row-left.card__reliability-left.text-left {{ $t('clients.reliability.amount') }}
        span.card__reliability-text.card__reliability-amount {{$operatorWB.clients.currentLoansHistory && $operatorWB.clients.currentLoansHistory.length}}
      .card__row-right.card__reliability-right.text-right
        span.card__reliability-link.link(@click="() => setView('loans')") {{ $t('clients.reliability.history') }}
    .card__row.flex.items-center
      .card__row-left.card__reliability-left.text-left {{ $t('clients.reliability.promises') }}
      .card__row-right.card__reliability-right.text-right
        .card__reliability-promises.flex.justify-end
          .card__reliability-give {{ $t('clients.reliability.given') }}
            span.card__reliability-amount.card__reliability-text {{reliability && reliability.promises.total}}
          .card__reliability-done {{ $t('clients.reliability.done') }}
            span.card__reliability-amount.card__reliability-text {{reliability && reliability.promises.fulfilled}}
    .card__row.card__reliability-legends.flex
      .card__row-left.card__reliability-left.card__reliability-left_w80p {{ $t('clients.reliability.legend') }}
        .card__reliability-days.flex.items-center
          .card__reliability-item.flex
            span.card__reliability-color.brs2.legend.red
            span.card__reliability-desc - {{$t('clients.reliability.colors.danger')}}
          .card__reliability-item.flex
            span.card__reliability-color.brs2.legend.orange
            span.card__reliability-desc - {{$t('clients.reliability.colors.warning')}}
          .card__reliability-item.flex
            span.card__reliability-color.brs2.legend.green
            span.card__reliability-desc - {{$t('clients.reliability.colors.info')}}
      .card__row-right.card__reliability-right.card__reliability-right_w20p.flex.justify-end
        .card__reliability-color.brs2.legend(v-for="(legend, idx) in legends" :key="idx" :class="legend")

</template>

<script>
import { colorClass } from 'src/utils/mappers'

export default {
  name: 'Reliability',
  computed: {
    currentClient () {
      return this.$operatorWB.clients.currentClient
    },
    legends () {
      const list = this.$operatorWB.clients.currentLoansHistory
      return list.reverse().slice(0, 10).map(item => this.colorClass(item.max_delay))
    },
    reliability () {
      return this.currentClient && this.currentClient.reliability
    }
  },
  methods: {
    setView (val) {
      this.$operatorWB.layout.view = val
    },
  },
  data () {
    return {
      colorClass
    }
  }
}
</script>

<style scoped>
</style>
