import User from '@/apis/User'

// state
const state = {
  user: {},
  allUser: [],
  detailTransaction: {}
}

// getters
const getters = {
  getAllUser: (state) => state.allUser,
  getMyProfile: (state) => state.user,
  getDetailTransaction: (state) => state.detailTransaction
}

// actions
const actions = {

  allUser({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      User.all().then(response => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        resolve(response.data)
        commit('GET_ALL_USER', response.data)
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        reject(err.response)
      })
    })
  },
  myProfile({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      User.myProfile().then(response => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        resolve(response.data)
        commit('GET_MY_PROFILE', response.data)
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        reject(err.response)
      })
    })
  },
  setPin({
    commit,
    dispatch
  }, data) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      User.setPin(data).then(response => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        resolve(response.data)
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        reject(err.response)
      })
    })
  },
  changePassword({
    commit,
    dispatch
  }, data) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      User.changePassword(data).then(response => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        resolve(response.data)
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        reject(err.response)
      })
    })
  },
  updateUser({
    commit,
    dispatch
  }, {
    id,
    data
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      User.updateUser(id, data).then(response => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        resolve(response.data)
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        reject(err.response)
      })
    })
  },
  changePin({
    commit,
    dispatch
  }, data) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      User.changePin(data).then(response => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        resolve(response.data)
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        reject(err.response)
      })
    })
  },
  clearProfile({
    commit
  }) {
    commit('CLEAR_MY_PROFILE')
  },
  cleardetailTransaction({
    commit
  }) {
    commit('CLEAR_DETAIL_TRANSACTION')
  },
  detailTransaction({
    commit
  }, data) {
    commit('DETAIL_TRANSACTION', data)
  }

}

// mutations
const mutations = {

  GET_ALL_USER: (state, payload) => {
    state.allUser = payload.results
  },
  GET_MY_PROFILE: (state, payload) => {
    state.user = payload.results
  },
  CLEAR_MY_PROFILE: (state) => {
    state.user = {}
  },
  DETAIL_TRANSACTION: (state, data) => {
    state.detailTransaction = data
  },
  CLEAR_DETAIL_TRANSACTION: (state, data) => {
    state.detailTransaction = {}
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
