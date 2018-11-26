import axios from 'axios'

const url = 'http://localhost:3003/api'
const endpoint = `${url}/individual-products`

const addManyProductsSerialNumber = (productsSerialNumber) => {
  return axios.post(endpoint, productsSerialNumber)
}

const individualProductList = () => {
  return axios.get(endpoint)
}

const getProductAvailableById = (id) => {
  return axios.get(`${endpoint}/${id}`)
}

const editProductAvailable = (id, serialNumber) => {
  return axios.put(`${endpoint}/${id}`, { serialNumber })
}

export default {
  addManyProductsSerialNumber,
  individualProductList,
  getProductAvailableById,
  editProductAvailable,
}