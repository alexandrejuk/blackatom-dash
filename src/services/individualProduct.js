import axios from 'axios'

const url = 'http://localhost:3003/api'
const endpoint = `${url}/individual-products`

const addManyProductsSerialNumber = (productsSerialNumber) => {
  return axios.post(endpoint, productsSerialNumber)
}

const individualProductList = () => {
  return axios.get(endpoint)
}

export default {
  addManyProductsSerialNumber,
  individualProductList,
}