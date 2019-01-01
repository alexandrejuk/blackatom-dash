import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import ProductService from '../../../../services/products'
import ProductListContainer from '../../../../Containers/Product/List'

import './index.css'

class ProductList extends Component {
  productService = null
  state = { 
    products: []
  }

  componentDidMount() {
    this.productService = new ProductService()
    this.getProducts()
  }

  async getProducts() {
    const products = await this.productService.productList()
    this.setState({ products })
  }

  render() { 
    return (
      <div className="wrapperProducts">
        <div className="productListHeader">
          <h1>Gerenciar Produtos</h1>
            <Link className="linkNav" to={'/logged/products/new'}>
              <Button  type="primary"> Novo </ Button>
            </Link>
        </div>
        <div className="productListContent"><ProductListContainer products={this.state.products.data} /></div>
      </div>
    )
  }
}
 
export default ProductList