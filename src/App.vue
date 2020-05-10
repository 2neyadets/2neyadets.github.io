<template>
  <div id="q-app" :class="{'app-win': $app.layout.getOS === 'win', 'app-macos': $app.layout.getOS === 'mac'}">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import layout from './services/Layout'
import heroes from './services/Heroes'

export default {
  name: 'App',
  created () {
    Vue.prototype.$app = this
  },
  data () {
    return {
      layout: new Vue(layout),
      heroes: new Vue(heroes),
    }
  }
}
</script>
