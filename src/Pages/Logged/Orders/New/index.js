import React, { Component } from 'react'
import NewOrderContainers from '../../../../Containers/Order/Form'
import productService from '../../../../services/products'
import stockLocationService from '../../../../services/stockLocation'

class NewOrder extends Component {
  state = {
    products: [],
    stockLocations: [],
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
      <div>
        <h1>Nova Compra</h1>
        <NewOrderContainers 
          products={this.state.products} 
          stockLocations={this.state.stockLocations} 
          actionLabel="Salvar"
        />
      </div>
    )
  }
}
 
export default NewOrder;