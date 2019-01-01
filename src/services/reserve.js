import request from './request'

const endpoint = `/reservation`
const productReservationEndpoint = `$/reservation-products`
const reservationHistory = `/reservation-history`

class ReserveService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  addReserve = (order) => {
    return this.axios.post(endpoint, order)
  }
  
  getAllProductReservation = (employeeId = 1) => {
    return this.axios.get(`${productReservationEndpoint}/${employeeId}`)
  }
  
  updateProductReservation = (productReservation) => {
    return this.axios.put(productReservationEndpoint, productReservation)
  }
  
  deleteReservationHistory = (id) => {
    return this.axios.delete(`${reservationHistory}/${id}`)
  }
  
  getAll = () => {
    return this.axios.get(endpoint)
  }
  
  getById = (id) => {
    return this.axios.get(`${endpoint}/${id}`)
  }
}

export default ReserveService
