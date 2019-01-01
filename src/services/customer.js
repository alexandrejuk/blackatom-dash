import request from './request'

const url = `/customer`

class CustomerService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  getCustomerByCnpj = (cnpj) => {
    return this.axios.get(url + '/' + cnpj)
  }
}

export default CustomerService
