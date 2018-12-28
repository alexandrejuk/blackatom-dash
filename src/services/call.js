import axios from 'axios'

const HOST = process.env.REACT_APP_HOST
const url = `http://${HOST}:3003/api`

const getListCallByCnpj = (cnpj) => {
  return axios.get(`${url}/calls/${cnpj}`)
}

export default {
  getListCallByCnpj,
}