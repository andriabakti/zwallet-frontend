import Vue from 'vue'

// atoms
Vue.component('g-image',
  () => import('./components/global/image.vue')
)
Vue.component('g-button',
  () => import('./components/global/button.vue')
)