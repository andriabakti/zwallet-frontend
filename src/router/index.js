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
import History from '../views/Main/History/History.vue'
import Profile from '../views/Main/Profile/Profile.vue'
import Personal from '../views/Main/Personal/Personal.vue'
import ChangePassword from '../views/Main/ChangePassword/ChangePassword.vue'
import ChangePin from '../views/Main/ChangePin/ChangePin.vue'
import NewPin from '../views/Main/ChangePin/NewPin.vue'
import AddNumber from '../views/Main/PhoneNumber/AddNumber.vue'
import ManageNumber from '../views/Main/PhoneNumber/ManageNumber.vue'

Vue.use(VueRouter)

const routes = [ //
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    redirect: {
      name: 'Login'
    },
    // meta:
    children: [ //
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'sign-up',
        name: 'Register',
        component: Register
      },
      {
        path: 'create-pin',
        name: 'CreatePin',
        component: CreatePin
      },
      {
        path: 'success',
        name: 'PinSuccess',
        component: PinSuccess
      },
      {
        path: 'forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword
      },
      {
        path: 'new-password',
        name: 'NewPassword',
        component: NewPassword
      }
    ]
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    redirect: {
      name: 'Dashboard'
    },
    // meta:
    children: [ //
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Home
      },
      {
        path: 'history',
        name: 'History',
        component: History
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'personal-info',
        name: 'Personal',
        component: Personal
      },
      {
        path: 'change-password',
        name: 'ChangePassword',
        component: ChangePassword
      },
      {
        path: 'change-pin',
        name: 'ChangePin',
        component: ChangePin
      },
      {
        path: 'new-pin',
        name: 'NewPin',
        component: NewPin
      },
      {
        path: 'add-phone',
        name: 'AddNumber',
        component: AddNumber
      },
      {
        path: 'manage-number',
        name: 'ManageNumber',
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
