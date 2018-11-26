import axios from 'axios'

const url = 'http://204.48.20.120:3003/api'
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

const updateOrderById = (id) => {
  return axios.put(`${endpoint}/${id}`)
}

export default {
  addOrder,
  orderList,
  getOrderById,
  updateOrderById,
}