import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store.js'
import './assets/scss/app.scss'
import VeLine from 'v-charts/lib/line.common'


Vue.use(VueAxios, axios)
Vue.component(VeLine.name, VeLine)


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
