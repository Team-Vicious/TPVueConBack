import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import {BootstrapVue, IconsPlugins} from 'bootstrap-vue'

Vue.use(BootstrapVue);
//Vue.use(IconsPlugins);
Vue.use(VueAxios, Axios);

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
