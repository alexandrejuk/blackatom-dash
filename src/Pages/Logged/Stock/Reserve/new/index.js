import React, { Component } from 'react'
import './index.css'

import NewReserveContainer from '../../../../../Containers/Reserve/Form'

import productService from '../../../../../services/products'
import stockLocationService from '../../../../../services/stockLocation'

class NewReserve extends Component {
  state = {
    stockLocations: [],
    products: []
  }
  componentDidMount() {
    this.getProducts()
    this.getStockLocations()
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

  render() { 
    return (
      <NewReserveContainer 
        products={this.state.products} 
        stockLocations={this.state.stockLocations}
      />
    )
  }
}
 
export default NewReserve