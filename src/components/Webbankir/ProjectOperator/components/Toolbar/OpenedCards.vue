<template lang="pug">
  .card-list.row.justify-start.items-center.q-ml-md(v-if="$operatorWB.layout.openedCards.length > 0")
    .card-list__item(
      v-for="(card, index) in $operatorWB.layout.openedCards"
      :key="card.id"
      @click="changeCard(card.id, card.clientId, card.type, index)"
      :class="{'active': index === $operatorWB.layout.activeCardIndex, 'application': card.type === 'application', 'call': card.source === 'call'}"
    )
      q-icon.far.fa-file-alt
      sup {{ index + 1 }}
      q-tooltip(anchor="bottom left" self="top right" :offset="[0, 5]")
        strong {{ clientName(card.clientId) }} <br>
        span тел.: {{ clientPhone(card.clientId) }} <br>
        span д.р.: {{ clientBirthDate(card.clientId) }} <br>
        span source: {{card.source}} <br>
        span cardType: {{card.type}}
</template>

<script>
import { changeDateFormat } from 'src/utils/helpers'

export default {
  name: 'openedCards',
  computed: {},
  methods: {
    clientBirthDate (clientId) {
      const client = this.$operatorWB.clients.get(clientId)
      return client && changeDateFormat(client.birthDate, 'YYYY-MM-DD', 'DD.MM.YYYY')
    },
    clientName (clientId) {
      const client = this.$operatorWB.clients.get(clientId)
      return client && (client.lastName + ' ' + client.firstName + ' ' + client.middleName)
    },
    clientPhone (clientId) {
      const client = this.$operatorWB.clients.get(clientId)
      const mainPhone = client && client.phones && client.phones.find(phone => phone.main)
      return (mainPhone && mainPhone.number) || 'нет основного номера'
    },
    changeCard (id, clientId, cardType, index) {
      if (this.$operatorWB.layout.isCallingCard) return false
      this.$operatorWB.layout.switchClientCard({
        id,
        clientId,
        cardType,
        source: 'openedCards',
        index
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .card-list
    &__item
      cursor: pointer
      font-size: 18px
      width: 30px
      height: 32px
      border-radius: 5px
      padding: 3px
      border: 1px solid #818181
      color: #818181
      position: relative

      sup
        font-size: 10px
        position: absolute
        top: 2px
        right: 2px

    &__item.active
      background: green
      border-color: white
      color: white

    &__item.active.application
      background: orange

    &__item.active.call
      background: red

</style>
