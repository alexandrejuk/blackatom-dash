import { path } from 'ramda'
import axios from 'axios';

const HOST = process.env.REACT_APP_HOST
const PORT = 3003


const createInstance = () => {
  const axiosInstace = axios.create({
    baseURL: `${HOST}:${PORT}/api`,
    headers: {
      APiKey: localStorage.getItem('token'),
    }
  })
  
  axiosInstace.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const statusCode = path(['error', 'response', 'status'], error)
  
      if (statusCode === 401 || statusCode === 403) {
        window.location('/login')
      }
  
      return Promise.reject(error.response);
    })
  
    return axiosInstace
}
 
class Resquest {
  axiosInstance = createInstance()

  getAxiosInstance = () => {
    return this.axiosInstance
  }

  forceRenewAxiosInstance = () => {
    this.axiosInstance = createInstance()
  }
}

export default new Resquest()