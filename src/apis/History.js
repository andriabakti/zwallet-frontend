import Api from './Api'

const BASE_URL = 'histories'

export default {
  all() {
    return Api.get(`${BASE_URL}`)
  },
  detail(id) {
    return Api.get(`${BASE_URL}/${id}`)
  },
  income() {
    return Api.get(`${BASE_URL}/my-income`)
  },
  outcome() {
    return Api.get(`${BASE_URL}/my-outcome`)
  },
  allTopUp() {
    return Api.get(`${BASE_URL}/get-topup`)
  },
  myHistory(page, sort) {
    return Api.get(`${BASE_URL}/my-history?page=${page}${sort ? '&order=' + sort : ''}`)
  },
  topup(data) {
    return Api.post(`${BASE_URL}/topup`, data)
  },
  transfer(data) {
    return Api.post(`${BASE_URL}/transfer`, data)
  },
  changeStatus(id, data) {
    return Api.patch(`${BASE_URL}/status-topup/${id}`, {
      status: data
    })
  }
}
