import Api from './Api'

const BASE_URL = 'histories'

export default {
  all() {
    return Api.get(`${BASE_URL}`)
  },
  detail(id) {
    return Api.get(`${BASE_URL}/${id}`)
  },
  allTopUp() {
    return Api.get(`${BASE_URL}/get-topup`)
  },
  myHistory() {
    return Api.get(`${BASE_URL}/my-history`)
  },
  topup(data) {
    return Api.post(`${BASE_URL}/topup`, data)
  },
  transfer(data) {
    return Api.post(`${BASE_URL}/transfer`, data)
  },
  changeStatus(id, status) {
    return Api.patch(`${BASE_URL}/status/${id}`, {
      status
    })
  }
}
