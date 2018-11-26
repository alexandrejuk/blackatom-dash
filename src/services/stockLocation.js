import axios from 'axios'

const url = 'http://204.48.20.120:3003/api'
const endpoint = `${url}/stockLocations`


const getStockLocations = () => {
  return axios.get(endpoint)
}


export default {
  getStockLocations
}