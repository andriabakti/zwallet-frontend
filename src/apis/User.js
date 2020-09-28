import Api from './Api'

const BASE_URL = 'users'

export default {
  all() {
    return Api.get(`${BASE_URL}`)
  },
  byId(id) {
    return Api.get(`${BASE_URL}/${id}`)
  },
  myProfile() {
    return Api.get(`${BASE_URL}/profile`)
  },
  add(data) {
    return Api.post(`${BASE_URL}`, data)
  },
  changePassword(data) {
    return Api.patch(`${BASE_URL}/change-password`, data)
  },
  setPin(data) {
    return Api.patch(`${BASE_URL}/set-pin`, data)
  },
  changePin(data) {
    return Api.patch(`${BASE_URL}/change-pin`, data)
  },
  updateUser(id, data) {
    return Api.patch(`${BASE_URL}/${id}`, data)
  },
  deleteUser(id) {
    return Api.delete(`${BASE_URL}/${id}`)
  }
}
