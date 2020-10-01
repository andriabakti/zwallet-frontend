// state
const state = {
  isLoading: false,
  statusPin: false
}

// getters
const getters = {
  getLoading: (state) => state.isLoading,
  getStatusPin: (state) => state.statusPin

}

// actions
const actions = {
  changeIsLoading({
    commit
  }, status) {
    commit('CHANGE_IS_LOADING', status)
  },
  changeStatusPin({
    commit
  }, status) {
    commit('CHANGE_STATUS_PIN', status)
  }
}

// mutations
const mutations = {
  CHANGE_IS_LOADING: (state, status) => {
    state.isLoading = status
  },
  CHANGE_STATUS_PIN: (state, status) => {
    state.statusPin = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
