import axios from 'axios'

const HOST = process.env.REACT_APP_HOST
const url = `http://${HOST}:3003/api`
const endpoint = `${url}/stockLocations`


const getStockLocations = () => {
  return axios.get(endpoint)
}


export default {
  getStockLocations
}