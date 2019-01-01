import request from './request'

const endpoint = `/technical`

class TechnicalService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  getListTechnical = () => {
    return this.axios.get(endpoint)
  }
}

export default TechnicalService