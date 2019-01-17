import request from './request'

const url = `/calls`

class CallService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  getListCallByCnpj = (cnpj) => {
    return this.axios.get(url + '/' + cnpj)
  }
}

export default CallService