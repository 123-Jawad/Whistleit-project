import Vue from 'vue'

import App from './App.vue'
import router from './router'
import vuetify from "./Plugins/vuetify"
import store from './store';


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
