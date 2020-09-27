import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import Auth from '../views/Auth/index.vue'
import Login from '../views/Auth/Login/Login.vue'
import Register from '../views/Auth/Register/Register.vue'
import CreatePin from '../views/Auth/CreatePin/CreatePin.vue'
import PinSuccess from '../views/Auth/CreatePin/PinSuccess.vue'
import ForgotPassword from '../views/Auth/ForgotPassword/ForgotPassword.vue'
import NewPassword from '../views/Auth/ForgotPassword/NewPassword.vue'
import Main from '../views/Main/index.vue'
import Home from '../views/Main/Home/Home.vue'
import Profile from '../views/Main/Profile/Profile.vue'
import Personal from '../views/Main/Personal/Personal.vue'
import ChangePassword from '../views/Main/ChangePassword/ChangePassword.vue'
import ChangePin from '../views/Main/ChangePin/ChangePin.vue'
import NewPin from '../views/Main/ChangePin/NewPin.vue'
import AddNumber from '../views/Main/PhoneNumber/AddNumber.vue'
import ManageNumber from '../views/Main/PhoneNumber/ManageNumber.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
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
        path: 'success',
        component: PinSuccess
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
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    // meta:
    children: [
      {
        path: 'dashboard',
        component: Home
      },
      {
        path: 'profile',
        component: Profile
      },
      {
        path: 'personal-info',
        component: Personal
      },
      {
        path: 'change-password',
        component: ChangePassword
      },
      {
        path: 'change-pin',
        component: ChangePin
      },
      {
        path: 'new-pin',
        component: NewPin
      },
      {
        path: 'add-phone',
        component: AddNumber
      },
      {
        path: 'manage-number',
        component: ManageNumber
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
