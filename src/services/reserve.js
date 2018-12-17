import axios from 'axios'

const HOST = process.env.REACT_APP_HOST
const url = `http://${HOST}:3003/api`
const endpoint = `${url}/reservation`

const addReserve = (order) => {
  return axios.post(endpoint, order)
}

export default {
  addReserve,
}