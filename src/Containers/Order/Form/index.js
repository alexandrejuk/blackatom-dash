import React, { Component } from 'react'
import { Form } from 'antd'
import './index.css'

import OrderForm from './OrderForm'
import OrderProductForm  from './OrderProductForm'
import OrderProductTable from './OrderProductTable'

class NewOrder extends Component {
  state = {
    productsTable: []
  }

  handleProductsTable = (value) => {
    this.setState({
      productsTable: [...this.state.productsTable, value]
    })
  }

  handleRemoveProduct = (index) => {
    const productsTable = this.state.productsTable.slice(index, index)

    this.setState({ productsTable })
  }

  render() {
    const { products, stockLocations } = this.props
    return (
      <Form layout="inline">
        <OrderForm stockLocations={stockLocations} />
        <OrderProductForm  products={products} onSubmit={this.handleProductsTable} />
        <OrderProductTable handleRemoveProduct={this.handleRemoveProduct} products={this.state.productsTable}/>
      </Form>
    )
  }
}

export default  Form.create()(NewOrder)