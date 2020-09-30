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
  selectPrimary(id) {
    return Api.patch(`${BASE_URL}/select/${id}`)
  },
  delete(id) {
    return Api.delete(`${BASE_URL}/${id}`)
  }
}
