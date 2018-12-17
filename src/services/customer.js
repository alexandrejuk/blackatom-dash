import axios from 'axios'

const HOST = process.env.REACT_APP_HOST
const url = `http://${HOST}:3003/api`

const getCustomerByCnpj = (cnpj) => {
  return axios.get(`${url}/customer/${cnpj}`)
}

export default {
  getCustomerByCnpj,
}