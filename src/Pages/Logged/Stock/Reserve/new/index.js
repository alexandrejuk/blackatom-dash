import React, { Component } from 'react'
import './index.css'

import NewReserveContainer from '../../../../../Containers/Reserve/Form'

import customerService from '../../../../../services/customer'
import productService from '../../../../../services/products'
import stockLocationService from '../../../../../services/stockLocation'
import reserveService from '../../../../../services/reserve'

const removeMask = value => value.replace(/\D+/g, '');

class NewReserve extends Component {
  state = {
    customer: {},
    stockLocations: [],
    products: []
  }
  componentDidMount() {
    this.getProducts()
    this.getStockLocations()
  }

  handleGetCustomerByCnpj = async (value) => {
    const cnpj =  removeMask(value)
    const customer = await customerService
      .getCustomerByCnpj(cnpj)
      .then(response => console.log(response))
    // this.setState({ customer })
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
      ...reserve,
      reserveProducts: reserve.reserveProducts
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
        stockLocations={this.state.stockLocations}
        onSubmit={this.saveReserve}
      />
    )
  }
}
 
export default NewReserve