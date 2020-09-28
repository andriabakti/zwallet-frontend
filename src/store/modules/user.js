import User from '@/apis/User'

// state
const state = {
  user: {},
  anjas: 'asdasd'
}

// getters
const getters = {
  getMyProfile: (state) => state.user
}

// actions
const actions = {

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
  }

}

// mutations
const mutations = {

  GET_MY_PROFILE: (state, payload) => {
    state.user = payload.results
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
