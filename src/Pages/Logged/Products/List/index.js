import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import productService from '../../../../services/products'
import ProductListContainer from '../../../../Containers/Product/List'

import './index.css'

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
    return (
      <div className="wrapperProducts">
        <div className="productListHeader">
          <h1>Gerenciar Produtos</h1>
            <Link className="linkNav" to={'/products/new'}>
              <Button  type="primary"> Novo </ Button>
            </Link>
        </div>
        <div className="productListContent"><ProductListContainer products={this.state.products.data} /></div>
      </div>
    )
  }
}
 
export default ProductList