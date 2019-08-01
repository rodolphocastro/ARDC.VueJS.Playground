import Vue from 'vue'
import App from './App.vue'

import router from './router'   // Importing our router and its settings
import store from './store'     // Importing our store and its settings

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

