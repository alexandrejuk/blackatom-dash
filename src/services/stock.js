import axios from 'axios'

const url = 'http://localhost:3003/api'
const endpoint = `${url}/stocks`


const getStocks = () => {
  return axios.get(endpoint)
}


export default {
  getStocks
}