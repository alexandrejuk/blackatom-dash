import React, { Component } from 'react'
import './index.css'

import NewReserveContainer from '../../../../../Containers/Reserve/Form'

import callService from '../../../../../services/call'
import customerService from '../../../../../services/customer'
import productService from '../../../../../services/products'
import stockLocationService from '../../../../../services/stockLocation'
import reserveService from '../../../../../services/reserve'

const removeMask = value => value.replace(/\D+/g, '');

class NewReserve extends Component {
  state = {
    customer: {},
    stockLocations: [],
    products: [],
    listCalls: [],
  }
  componentDidMount() {
    this.getProducts()
    this.getStockLocations()
  }

  handleGetCustomerByCnpj = async (value) => {
    const documentId =  removeMask(value)
    const customer = await customerService
      .getCustomerByCnpj(documentId)
      .then(response => response.data)
    this.setState({ customer })
    this.getListCall(documentId)
  }

  async getListCall(documentId) {
    const { data: { atendimentos: listCalls }} = await callService.getListCallByCnpj(documentId)
    this.setState({ listCalls })
  }

  async getProducts() {
    const products = await productService
      .productList()
      .then(response => response.data)
    this.setState({ products })
  }

  async getStockLocations() {
    const stockLocations = await stockLocationService
      .getStockLocations()
      .then(response => response.data)
    this.setState({ stockLocations })
  }

  saveReserve = async(reserve) => {
    const formattedReserve = {
      stockLocationId: reserve.stockLocationId,
      customerId: this.state.customer.id,
      reservedAt: new Date(),
      products: reserve.products
        .map(item => ({
          quantity: item.quantity,
          productId: item.product.id,
        }))
    }

    try {
      await reserveService.addReserve(formattedReserve)
        .then(response => console.log(response))
    } catch (err) {
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
      />
    )
  }
}
 
export default NewReserve