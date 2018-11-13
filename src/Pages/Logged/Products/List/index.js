import React, { Component } from 'react'
import productService from '../../../../services/products'
import ProductListContainer from '../../../../Containers/Product/List'

class ProductList extends Component {
  state = { 
    products: []
  }

  componentDidMount() {
    this.getProducts()
  }

  async getProducts() {
    const products = await productService.productList()
    this.setState({ products })
  }

  render() { 
    return (<ProductListContainer products={this.state.products.data} />)
  }
}
 
export default ProductList