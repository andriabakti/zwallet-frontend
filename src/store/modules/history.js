import History from '@/apis/History'

// state
const state = {
  allHistory: [],
  myHistory: [],
  allTopUp: []
}

// getters
const getters = {
  getAllHistory: (state) => state.allHistory,
  getMyHistory: (state) => state.myHistory,
  getAllTopUp: (state) => state.allTopUp
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
  myIncome({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      History.income().then(response => {
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
  myOutcome({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      History.outcome().then(response => {
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
  allTopUp({
    commit,
    dispatch
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      History.allTopUp().then(response => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        resolve(response.data)
        commit('GET_ALL_TOPUP', response.data)
      }).catch(err => {
        dispatch('changeIsLoading', false, {
          root: true
        })
        commit('GET_ALL_TOPUP', err.response.data)
        reject(err.response)
      })
    })
  },
  myHistory({
    commit,
    dispatch
  }, {
    page,
    sort
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      History.myHistory(page || 1, sort || null).then(response => {
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
  historyNotif({
    commit,
    dispatch
  }, {
    page,
    sort
  }) {
    dispatch('changeIsLoading', true, {
      root: true
    })
    return new Promise((resolve, reject) => {
      History.myHistory(page || 1, sort || null).then(response => {
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
  },
  changeStatus({
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
      History.changeStatus(id, data).then(response => {
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
  },
  GET_ALL_TOPUP: (state, payload) => {
    if (payload.message.sqlMessage === 'Data Not Found') {
      state.allTopUp = []
    } else {
      state.allTopUp = payload.results
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
