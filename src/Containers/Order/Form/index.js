import React, { Component } from 'react'
import { Form, Button } from 'antd'
import './index.css'

import OrderForm from './OrderForm'
import OrderProductForm  from './OrderProductForm'
import OrderProductTable from './OrderProductTable'

class NewOrder extends Component {
  orderFormRef = null
  state = {
    productsTable: []
  }

  handleProductsTable = (value) => {
    this.setState({
      productsTable: [...this.state.productsTable, value]
    })
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
      <>
        <OrderForm wrappedComponentRef={(form) => this.orderFormRef = form} stockLocations={stockLocations} />
        <OrderProductForm  products={products} onSubmit={this.handleProductsTable} />
        <OrderProductTable handleRemoveProduct={this.handleRemoveProduct} products={this.state.productsTable}/>
        <Button onClick={this.onSave}> Salvar </Button>
      </>
    )
  }
}

export default  Form.create()(NewOrder)