import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import ProductService from '../../../../services/products'
import ProductListContainer from '../../../../Containers/Product/List'

import './index.css'

class ProductList extends Component {
  productService = null
  state = { 
    products: [],
    count: 0,
    currentPage: 1,
  }

  componentDidMount() {
    this.productService = new ProductService()
    this.getProducts()
  }

  getProducts = async (page = 1, filters = {}) => {
    const { data } = await this.productService.productList(page, filters)

    this.setState({
      products: data.rows,
      count: data.count,
      currentPage: page,
    })
  }


  onPaginationChange = (page, total) => {
    this.getProducts(page)
  }

  onSearch = (filters) => {
    this.getProducts(1, filters)
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
        <div className="productListContent">
          <ProductListContainer
            onSearch={this.onSearch}
            currentPage={this.state.currentPage}
            count={this.state.count}
            products={this.state.products}
            onPaginationChange={this.onPaginationChange}
          />
        </div>
      </div>
    )
  }
}
 
export default ProductList