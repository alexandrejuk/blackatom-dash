import axios from 'axios'

const HOST = process.env.REACT_APP_HOST
const url = `http://${HOST}:3003/api`
const endpoint = `${url}/products`

const addProduct = (product) => {
  return axios.post(endpoint, product)
}

const productList = () => {
  return axios.get(endpoint)
}

const getProductById = (id) => {
  return axios.get(`${endpoint}/${id}`)
}

const editProduct = (id, product) => {
  return axios.put(`${endpoint}/${id}`, product)
}

export default {
  addProduct,
  editProduct,
  getProductById,
  productList,
}