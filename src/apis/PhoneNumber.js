import Api from './Api'

const BASE_URL = 'phones'

export default {
  all() {
    return Api.get(`${BASE_URL}`)
  },
  myPhone() {
    return Api.get(`${BASE_URL}/my-phone`)
  },
  primaryPhone() {
    return Api.get(`${BASE_URL}/primary`)
  },
  add(data) {
    return Api.post(`${BASE_URL}`, data)
  },
  selectPrimary(id, data) {
    return Api.patch(`${BASE_URL}/${id}`, data)
  },
  delete(id) {
    return Api.delete(`${BASE_URL}/${id}`)
  }
}
