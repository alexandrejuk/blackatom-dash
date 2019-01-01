import request from './request'

const url = `/individual-products`

class IndividualProductService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  individualProductList = () => {
    return this.axios.get(url)
  }
  
  getProductAvailableById = (id) => {
    return this.axios.get(`${url}/${id}`)
  }
  
  editProductAvailable = (id, serialNumber) => {
    return this.axios.put(`${url}/${id}`, { serialNumber })
  }
}



export default IndividualProductService