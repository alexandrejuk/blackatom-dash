import axios from 'axios'

const url = 'http://142.93.124.188:3003/api'
const endpoint = `${url}/stockLocations`


const getStockLocations = () => {
  return axios.get(endpoint)
}


export default {
  getStockLocations
}