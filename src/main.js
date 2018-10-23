import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import './styles/quasar.styl'
import 'quasar-framework/dist/quasar.ie.polyfills'
import lang from 'quasar-framework/i18n/pt-br'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import Quasar from 'quasar'

import VueHead from 'vue-head'

Vue.use(VueHead)
Vue.use(Quasar, {
  config: {}, i18n: lang
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
