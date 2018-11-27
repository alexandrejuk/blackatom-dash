import axios from 'axios'
const url = 'http://142.93.124.188:3003/api'

const request = {
  get: (...data) => axios.get(...data).then(response => response.data),
  post: (...data) => axios.post(...data).then(response => response.data),
  put: (...data) => axios.put(...data).then(response => response.data),
  delete: (...data) => axios.delete(...data).then(response => response.data),
}