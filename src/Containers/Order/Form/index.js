import React, { Component } from 'react'
import { Form, Button } from 'antd'
import './index.css'

import OrderForm from './OrderForm'
import OrderProductForm  from './OrderProductForm'
import OrderProductTable from './OrderProductTable'

class NewOrder extends Component {
  orderFormRef = null
  productFormRef = null

  state = {
    productsTable: []
  }

  handleProductsTable = (value) => {
    this.setState({
      productsTable: [...this.state.productsTable, value]
    })
    this.productFormRef.props.form.resetFields()
  }

  handleRemoveProduct = (index) => {
    const productsTable = this.state.productsTable.filter((_, i) => index !== i)

    this.setState({ productsTable })
  }

  onSave = () => {
    this.orderFormRef.props.form.validateFields((err, values) => {
      if (!err && this.state.productsTable.length > 0) {
        this.props.onSubmit({
          ...values,
          orderProducts: this.state.productsTable,
        })
      }
    });
  }

  render() {
    const { products, stockLocations } = this.props
    return (
      <div>
        <OrderForm wrappedComponentRef={(form) => this.orderFormRef = form} stockLocations={stockLocations} />
        <OrderProductForm wrappedComponentRef={(form) => this.productFormRef = form} products={products} onSubmit={this.handleProductsTable} />
        <OrderProductTable handleRemoveProduct={this.handleRemoveProduct} products={this.state.productsTable}/>
        <Button type="primary" htmlType="submit" onClick={this.onSave}> Salvar </Button>
      </div>
    )
  }
}

export default  Form.create()(NewOrder)