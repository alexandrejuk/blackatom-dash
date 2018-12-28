import axios from 'axios'

const HOST = process.env.REACT_APP_HOST
const url = `http://${HOST}:3003/api`

const getListTechnical = () => {
  return axios.get(`${url}/technical`)
}

export default {
  getListTechnical,
}
