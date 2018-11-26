import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store.js'
import './assets/scss/app.scss'
import VeLine from 'v-charts/lib/line.common'
import Vuex from 'vuex'

Vue.use(VueAxios, axios)
Vue.component(VeLine.name, VeLine)
Vue.use(Vuex)


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
