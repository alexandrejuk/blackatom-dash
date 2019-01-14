import React, { Component } from 'react'
import './index.css'
import { message } from 'antd'

import NewReserveContainer from '../../../../../Containers/Reserve/Form'

import CallService from '../../../../../services/call'
import CustomerService from '../../../../../services/customer'
import ProductService from '../../../../../services/products'
import StockLocationService from '../../../../../services/stockLocation'
import ReserveService from '../../../../../services/reserve'

const removeMask = value => value.replace(/\D+/g, '');

const success = () => {
  message.success('Reserva cadastrada com sucesso!')
}

const error = () => {
  message.error('Não foi possível cadastrar a reserva!')
}

class NewReserve extends Component {
  callService = null
  customerService = null
  productService = null
  stockLocationService = null
  reserveService = null

  state = {
    customer: {},
    stockLocations: [],
    products: [],
    listCalls: [],
    formKey: 0
  }

  componentDidMount() {
    this.callService = new CallService()
    this.customerService = new CustomerService()
    this.productService = new ProductService()
    this.stockLocationService = new StockLocationService()
    this.reserveService = new ReserveService()

    this.getProducts()
    this.getStockLocations()
  }

  handleGetCustomerByCnpj = async (value) => {
    const documentId =  removeMask(value)
    const customer = await this.customerService
      .getCustomerByCnpj(documentId)
      .then(response => response.data)
    this.setState({ customer })
    this.getListCall(documentId)
  }

  async getListCall(documentId) {
    const { data: { atendimentos: listCalls }} = await this.callService.getListCallByCnpj(documentId)
    this.setState({ listCalls })
  }

  async getProducts() {
    const products = await this.productService
      .productList()
      .then(response => response.data)
    this.setState({ products })
  }

  async getStockLocations() {
    const stockLocations = await this.stockLocationService
      .getStockLocations()
      .then(response => response.data)
    this.setState({ stockLocations })
  }

  saveReserve = async(reserve) => {
    const products = reserve.products.reduce(
      (rProducts, item) => {
        if(item.product.hasSerialNumber){
          for(let i = 0; i < item.quantity; i++){
            rProducts.push({
              quantity: 1,
              productId: item.product.id,
            })
          }
        } else {
          rProducts.push({
            quantity: item.quantity,
            productId: item.product.id,
          })
        }

        return rProducts
      },
      []
    )

    const formattedReserve = {
      stockLocationId: reserve.stockLocationId,
      customerId: this.state.customer.id,
      reservedAt: new Date(),
      originId: reserve.originId,
      originType: reserve.originType,
      employeeId: reserve.employeeId,
      trackingCode: reserve.trackingCode,
      products: products,
    }

    try {
      await this.reserveService.addReserve(formattedReserve)
        .then(response => response)
      success()
      this.setState((state) => ({ formKey: state.formKey + 1 }))
    } catch (err) {
      error()
    }
  }

  render() { 
    return (
      <NewReserveContainer
        handleGetCustomerByCnpj={this.handleGetCustomerByCnpj}
        products={this.state.products} 
        customer={this.state.customer}
        listCalls={this.state.listCalls}
        stockLocations={this.state.stockLocations}
        onSubmit={this.saveReserve}
        key={this.state.formKey}
      />
    )
  }
}
 
export default NewReserve