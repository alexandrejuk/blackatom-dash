import request from './request'

const endpoint = `/stocks`
const stockProducts = `/stock-products`

class StockService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  getStocks = () => {
    return this.axios.get(endpoint)
  }
  
  getStockProducts = () => {
    return this.axios.get(stockProducts)
  }
  
  getStockProductsStockLocationId = (stockLocationId) => {
    return this.axios.get(`${stockProducts}/${stockLocationId}`)
  }
}

export default StockService