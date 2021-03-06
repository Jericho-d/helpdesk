import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from "axios";
import router from './router'

Vue.config.productionTip = false
window.axios = require('axios');
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
