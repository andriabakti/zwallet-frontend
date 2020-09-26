import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import Auth from '../views/Auth/index.vue'
import Login from '../views/Auth/Login/Login.vue'
import Register from '../views/Auth/Register/Register.vue'
import CreatePin from '../views/Auth/CreatePin/CreatePin.vue'
import ForgotPassword from '../views/Auth/ForgotPassword/ForgotPassword.vue'
import NewPassword from '../views/Auth/ForgotPassword/NewPassword.vue'

Vue.use(VueRouter)

const routes = [ //
  {
    path: '/',
    name: 'Home',
    component: Landing
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    // meta:
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'sign-up',
        component: Register
      },
      {
        path: 'create-pin',
        component: CreatePin
      },
      {
        path: 'forgot-password',
        component: ForgotPassword
      },
      {
        path: 'new-password',
        component: NewPassword
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
