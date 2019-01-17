import request from './request'

const endpoint = `/orders`

class OrderService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  addOrder = (order) => {
    return this.axios.post(endpoint, order)
  }

  addSerialNumbers = (orderId, orderProductId, serialNumbers) => {
    return this.axios.post(`${endpoint}/${orderId}/orderProducts/${orderProductId}`, serialNumbers)
  }
  
  orderList = () => {
    return this.axios.get(endpoint)
  }
  
  getOrderById = (id) => {
    return this.axios.get(`${endpoint}/${id}`)
  }
  
  updateOrderById = (id) => {
    return this.axios.put(`${endpoint}/${id}`)
  }
}

export default OrderService