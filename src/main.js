import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store.js'
import './assets/scss/app.scss'
import './assets/scss/mobile.scss'
import Vuex from 'vuex'
import Dropdown from 'bp-vuejs-dropdown'
import APlayer from '@moefe/vue-aplayer'
import VueMarkdown from 'vue-markdown'

Vue.use(VueAxios, axios)
Vue.use(Dropdown)
Vue.use(Vuex)
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true
})
Vue.use(VueMarkdown)


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
