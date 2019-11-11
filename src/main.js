import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './firebase'

import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate'

import { messages } from './config/i18n'

Vue.use(VueI18n)
Vue.use(Vuelidate)

Vue.config.productionTip = false

export const i18n = new VueI18n({
  locale: 'es',
  messages
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
