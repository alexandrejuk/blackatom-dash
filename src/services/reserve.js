import axios from 'axios'

const HOST = process.env.REACT_APP_HOST
const url = `http://${HOST}:3003/api`
const endpoint = `${url}/reservation`
const productReservationEndpoint = `${url}/reservation-products`
const reservationHistory = `${url}/reservation-history`


const addReserve = (order) => {
  return axios.post(endpoint, order)
}

const getAllProductReservation = (employeeId = 1) => {
  return axios.get(`${productReservationEndpoint}/${employeeId}`)
}

const updateProductReservation = (productReservation) => {
  return axios.put(productReservationEndpoint, productReservation)
}

const deleteReservationHistory = (id) => {
  return axios.delete(`${reservationHistory}/${id}`)
}

const getAll = () => {
  return axios.get(endpoint)
}

const getById = (id) => {
  return axios.get(`${endpoint}/${id}`)
}

export default {
  addReserve,
  getAll,
  getById,
  getAllProductReservation,
  updateProductReservation,
  deleteReservationHistory,
}