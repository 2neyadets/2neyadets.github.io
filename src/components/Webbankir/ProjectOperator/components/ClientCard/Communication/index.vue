<template lang="pug">
  q-card.card.comments.brs5.ovh
    q-card-section.q-pa-none
      CommunicationHeader
    q-card-section.card__content.q-pa-none
      .comments__content.flex
        CommunicationContact
        CommunicationActions
        template(v-if="$operatorWB.communication.currentForm === 'result'")
          ResultForm
        SMSForm(v-if="$operatorWB.communication.currentForm === 'sms'")
        EmailForm(v-if="$operatorWB.communication.currentForm === 'email'")
</template>

<script>
import CommunicationHeader from './Header'
import CommunicationContact from './Contact'
import CommunicationActions from './Actions'
import ResultForm from './Forms/ResultForm/'
import SMSForm from './Forms/SMSForm/'
import EmailForm from './Forms/EmailForm/index'

export default {
  name: 'Communication',
  components: {
    EmailForm,
    ResultForm,
    SMSForm,
    CommunicationHeader,
    CommunicationContact,
    CommunicationActions,
  }
}
</script>

<style scoped lang="stylus">

</style>
