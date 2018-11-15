import axios from 'axios'

const url = 'http://localhost:3003/api'
const endpoint = `${url}/stockLocations`


const getStockLocations = () => {
  return axios.get(endpoint)
}


export default {
  getStockLocations
}