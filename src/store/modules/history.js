import History from '@/apis/History'

// state
const state = {
  allHistory: [],
  myHistory: []
}

// getters
const getters = {
  getAllHistory: (state) => state.allHistory,
  getMyHistory: (state) => state.myHistory
}

// actions
const actions = {

  allHistory({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      History.all().then(response => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        resolve(response.data)
        commit('GET_ALL_HISTORY', response.data)
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        commit('GET_ALL_HISTORY', err.response.data)
        reject(err.response)
      })
    })
  },
  myHistory({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      History.myHistory().then(response => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        resolve(response.data)
        commit('GET_MY_HISTORY', response.data)
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        commit('GET_MY_HISTORY', err.response.data)
        reject(err.response)
      })
    })
  },
  topup({
    commit,
    dispatch
  }, data) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      History.topup(data).then(response => {
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
  transfer({
    commit,
    dispatch
  }, data) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      History.transfer(data).then(response => {
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

  GET_ALL_HISTORY: (state, payload) => {
    if (payload.message.sqlMessage === 'Data Not Found') {
      state.allHistory = []
    } else {
      state.allHistory = payload.results
    }
  },
  GET_MY_HISTORY: (state, payload) => {
    if (payload.message.sqlMessage === 'Data Not Found') {
      state.myHistory = []
    } else {
      state.myHistory = payload.results
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
