<template lang="pug">

  .card__right-loan
    .card__row.flex.items-center.bg-profile
      .card__row-left.card__loan-left.text-left.card__loan-text Данные по займам
      .card__row-right.card__loan-right.text-right.info
        b POS
    .card__row.flex.items-center
      .card__row-left.card__loan-left.text-left Одобренный лимит
      .card__row-right.card__loan-right.text-right.info
        strong {{limit}}
    .card__row.flex.items-center
      .card__row-left.card__loan-left.text-left Доступно
      .card__row-right.card__loan-right.text-right {{available}}
    .card__row.flex.items-center
      .card__row-left.card__loan-left.text-left Первая покупка
      .card__row-right.card__loan-right.text-right {{firstDeal}}
    .card__row.flex.items-center
      .card__row-left.card__loan-left.text-left Сумма покупок
      .card__row-right.card__loan-right.text-right {{sumDeals}}
    .card__row.flex.items-center
      span.debt__accruals-link.link(@click="$operatorWB.layout.set('view', 'purchases')") История покупок
    .card__row.flex.items-center(:class="$operatorWB.layout.isApplicationCard ? '' : 'card__right-product'")
      .card__row-left.card__loan-left.text-left Продукт
      .card__row-right.card__loan-right.text-right
        strong {{loan && $t('loans.product.' + loan.product)}}

</template>

<script>
import { getShortDate, money } from 'src/utils/helpers'
import RateList from '../../Tooltip/RateList'
import minBy from 'lodash/minBy'

export default {
  name: 'POS',
  components: { RateList },
  data () {
    return {
      getShortDate,
      minBy,
      money
    }
  },
  computed: {
    loan () {
      return this.$operatorWB.loans.currentLoan
    },
    firstDeal () {
      return this.loan && getShortDate(minBy(this.loan.deals.map(item => item.purchasedAt)))
    },
    limit () {
      return this.loan && money(this.loan.amount, true)
    },
    available () {
      return this.loan && money(this.loan.current.amount, true)
    },
    sumDeals () {
      return this.loan && money(this.loan.deals.reduce((acc, item) => {
        return acc + item.products.reduce((sum, product) => {
          return sum + product.price
        }, 0)
      }, 0), true)
    }
  }
}
</script>

<style scoped>
</style>
