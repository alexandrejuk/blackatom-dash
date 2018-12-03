import axios from 'axios'

const HOST = process.env.REACT_APP_HOST
const url = `http://${HOST}:3003/api`
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