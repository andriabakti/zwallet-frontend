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
import VueHtmlToPaper from 'vue-html-to-paper'
import VueCurrencyFilter from 'vue-currency-filter'
import swal from './components/mixins/swal'
import logout from './components/mixins/logout'
import VueToast from 'vue-toast-notification'
import VueSweetalert2 from 'vue-sweetalert2'
// Import one of available themes
import 'vue-toast-notification/dist/theme-sugar.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueFilterDateFormat from 'vue-filter-date-format'
import InfiniteLoading from 'vue-infinite-loading'

Vue.use(VueToast, {
  position: 'top-right'
})
Vue.use(VueCurrencyFilter, {
  symbol: 'Rp.'
})
Vue.use(VueSweetalert2)
Vue.use(InfiniteLoading)
Vue.mixin(swal)
Vue.mixin(logout)
Vue.use(VueFilterDateFormat, {
  dayOfWeekNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'
  ],
  dayOfWeekNamesShort: [
    'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
  ],
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
})
const options = {
  styles: [
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
  ]
}
Vue.use(VueHtmlToPaper, options)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
