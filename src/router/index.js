import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import Auth from '../views/Auth/index.vue'
import Login from '../views/Auth/Login/Login.vue'
import TopUp from '../views/Main/TopUp/TopUp.vue'
import Activate from '../views/Auth/Activate'
import Register from '../views/Auth/Register/Register.vue'
import CreatePin from '../views/Auth/CreatePin/CreatePin.vue'
import PinSuccess from '../views/Auth/CreatePin/PinSuccess.vue'
import ForgotPassword from '../views/Auth/ForgotPassword/ForgotPassword.vue'
import NewPassword from '../views/Auth/ForgotPassword/NewPassword.vue'
import Main from '../views/Main/index.vue'
import Transfer from '../views/Main/Transfer/Transfer.vue'
import Home from '../views/Main/Home/Home.vue'
import History from '../views/Main/History/History.vue'
import Profile from '../views/Main/Profile/Profile.vue'
import Personal from '../views/Main/Personal/Personal.vue'
import ChangePassword from '../views/Main/ChangePassword/ChangePassword.vue'
import ChangePin from '../views/Main/ChangePin/ChangePin.vue'
import NewPin from '../views/Main/ChangePin/NewPin.vue'
import AddNumber from '../views/Main/PhoneNumber/AddNumber.vue'
import ManageNumber from '../views/Main/PhoneNumber/ManageNumber.vue'
import DataTopUp from '../views/Main/DataTopUp/DataTopUp.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [ //
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/pin',
    name: 'Pin',
    component: Auth,
    redirect: {
      name: 'CreatePin'
    },

    meta: {
      requiresLogin: true
    },
    children: [ //

      {
        path: 'create-pin',
        name: 'CreatePin',
        component: CreatePin
      },

      {
        path: 'success',
        name: 'PinSuccess',
        component: PinSuccess
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    redirect: {
      name: 'Login'
    },
    meta: {
      requiresVisit: true
    },
    // meta:
    children: [ //
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'activate',
        name: 'Activate',
        component: Activate
      },
      {
        path: 'sign-up',
        name: 'Register',
        component: Register
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
    meta: {
      requiresLogin: true
    },
    // meta:
    children: [ //
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Home
      },
      {
        path: 'topup',
        name: 'TopUp',
        component: TopUp,
        meta: {
          userOnly: true
        }
      },
      {
        path: 'history',
        name: 'History',
        component: History
      },
      {
        path: 'transfer',
        name: 'Transfer',
        component: Transfer
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'data-topup',
        name: 'DataTopUp',
        component: DataTopUp,
        meta: {
          adminOnly: true
        }
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

// eslint-disable-next-line space-before-function-paren
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!store.getters['auth/isLogin']) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisit)) {
    if (store.getters['auth/isLogin']) {
      next({
        name: 'Dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAdminCashier)) {
//     if (roleId === '3') {
//       next({
//         path: '/demo'
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
