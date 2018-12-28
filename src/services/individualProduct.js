import axios from 'axios'

const HOST = process.env.REACT_APP_HOST
const url = `http://${HOST}:3003/api/individual-products`

const addManyProductsSerialNumber = (productsSerialNumber) => {
  return axios.post(url, productsSerialNumber)
}

const individualProductList = () => {
  return axios.get(url)
}

const getProductAvailableById = (id) => {
  return axios.get(`${url}/${id}`)
}

const editProductAvailable = (id, serialNumber) => {
  return axios.put(`${url}/${id}`, { serialNumber })
}

export default {
  addManyProductsSerialNumber,
  individualProductList,
  getProductAvailableById,
  editProductAvailable,
}