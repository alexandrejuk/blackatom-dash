import axios from 'axios'

const HOST = process.env.REACT_APP_HOST
const url = `http://${HOST}:3003/api`
const endpoint = `${url}/stocks`
const stockProducts = `${url}/stock-products`

const getStocks = () => {
  return axios.get(endpoint)
}

const getStockProducts = () => {
  return axios.get(stockProducts)
}

const getStockProductsStockLocationId = (stockLocationId) => {
  return axios.get(`${stockProducts}/${stockLocationId}`)
}

export default {
  getStocks,
  getStockProducts,
  getStockProductsStockLocationId
}