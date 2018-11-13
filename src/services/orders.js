import axios from 'axios'

const url = 'http://localhost:3003/api'
const endpoint = `${url}/orders`

const addOrder = (order) => {
  return axios.post(endpoint, order)
}

const orderList = () => {
  return axios.get(endpoint)
}

const getOrderById = (id) => {
  return axios.get(`${endpoint}/${id}`)
}

export default {
  addOrder,
  orderList,
  getOrderById,
}