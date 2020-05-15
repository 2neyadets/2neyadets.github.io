<template lang="pug">
  .settings
    .flex.justify-around.items-center
      q-btn.q-ma-sm(
        @click="$managerWB.layout.changeRoute('/settings/mailing')"
        label="Рассылка"
        color="WB-secondary"
        icon-right="mail_outline"
      )
      q-btn.q-ma-sm(
        @click="$managerWB.layout.changeRoute('/settings/loanRedistribution')"
        label="Управление нагрузкой"
        color="WB-secondary"
        icon-right="work"
      )
      q-btn.q-ma-sm(
        @click="$managerWB.layout.changeRoute('/settings/coefficients')"
        label="Управление коэффициентами"
        color="WB-secondary"
        icon-right="repeat_one"
      )
      q-btn.q-ma-sm(
        @click="$managerWB.layout.changeRoute('/settings/payments')"
        label="Перезакрепление платежей"
        color="WB-secondary"
        icon-right="attach_money"
      )
    router-view
</template>
