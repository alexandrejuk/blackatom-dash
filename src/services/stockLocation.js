import request from './request'

const endpoint = `/stockLocations`

class StockLocationService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  getStockLocations = () => {
    return this.axios.get(endpoint)
  }
}

export default StockLocationService
