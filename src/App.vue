<template>
  <div id="q-app" :class="{'app-win': $app.layout.getOS === 'win', 'app-macos': $app.layout.getOS === 'mac'}">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import layout from './services/Layout'
import heroes from './services/Heroes'
import layoutOperator from 'src/services/WB/operator/layout'
import userOperator from 'src/services/WB/operator/User'
import clientsOperator from 'src/services/WB/operator/Clients'
import loansOperator from 'src/services/WB/operator/Loans'
import communicationOperator from 'src/services/WB/operator/Communication'
import hardOperator from 'src/services/WB/operator/Hard'
import paymentsOperator from 'src/services/WB/operator/Payments'
import dialerOperator from 'src/services/WB/operator/Dialer'
import callsOperator from 'src/services/WB/operator/Calls'
import messagesOperator from 'src/services/WB/operator/Messages'

export default {
  name: 'App',
  created () {
    Vue.prototype.$app = this
    Vue.prototype.$operatorWB = {
      layout: new Vue(layoutOperator),
      user: new Vue(userOperator),
      clients: new Vue(clientsOperator),
      loans: new Vue(loansOperator),
      communication: new Vue(communicationOperator),
      hard: new Vue(hardOperator),
      payments: new Vue(paymentsOperator),
      dialer: new Vue(dialerOperator),
      calls: new Vue(callsOperator),
      messages: new Vue(messagesOperator),
    }
  },
  data () {
    return {
      layout: new Vue(layout),
      heroes: new Vue(heroes),
    }
  }
}
</script>
