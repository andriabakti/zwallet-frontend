import Phone from '@/apis/PhoneNumber'

// state
const state = {
  listMyPhone: []
}

// getters
const getters = {
  getListMyPhone: (state) => state.listMyPhone
}

// actions
const actions = {

  allMyPhone({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Phone.myPhone().then(response => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        resolve(response.data)
        commit('GET_LIST_MY_PHONE', response.data)
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        commit('GET_LIST_MY_PHONE', err.response.data)
        reject(err.response)
      })
    })
  },
  addPhone({
    commit,
    dispatch
  }, data) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Phone.add(data).then(response => {
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
  deletePhone({
    commit,
    dispatch
  }, id) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Phone.delete(id).then(response => {
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
  selectPrimaryPhone({
    commit,
    dispatch
  }, id) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      Phone.selectPrimary(id).then(response => {
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

  GET_LIST_MY_PHONE: (state, payload) => {
    if (payload.message.sqlMessage === 'Data Not Found') {
      state.listMyPhone = []
    } else {
      state.listMyPhone = payload.results
    }
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
