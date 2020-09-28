import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './GlobalComponents'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import swal from './components/mixins/swal'
import logout from './components/mixins/logout'
import VueToast from 'vue-toast-notification'
import VueSweetalert2 from 'vue-sweetalert2'
// Import one of available themes
import 'vue-toast-notification/dist/theme-sugar.css'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueToast, {
  position: 'top-right'
})
Vue.use(VueSweetalert2)
Vue.mixin(swal)
Vue.mixin(logout)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
