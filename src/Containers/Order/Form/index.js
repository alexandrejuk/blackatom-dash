import React, { Component } from 'react'
import { Form, Button } from 'antd'
import './index.css'

import OrderForm from './OrderForm'
import OrderProductForm  from './OrderProductForm'
import OrderProductList from './OrderProductList'

class NewOrder extends Component {
  orderFormRef = null
  productFormRef = null

  state = {
    productList: []
  }

  handleProductsTable = (value) => {
    this.setState({
      productList: [...this.state.productList, value]
    })
    this.productFormRef.props.form.resetFields()
  }

  handleRemoveProduct = (index) => {
    const productList = this.state.productList.filter((_, i) => index !== i)

    this.setState({ productList })
  }

  onSave = () => {
    this.orderFormRef.props.form.validateFields((err, values) => {
      if (!err && this.state.productList.length > 0) {
        this.props.onSubmit({
          ...values,
          orderProducts: this.state.productList,
        })
      }
    });
  }

  render() {
    const { products, stockLocations, onProductSearch } = this.props
    return (
      <div>
        <OrderForm wrappedComponentRef={(form) => this.orderFormRef = form} stockLocations={stockLocations} />
        <OrderProductForm
          wrappedComponentRef={(form) => this.productFormRef = form}
          products={products}
          onSubmit={this.handleProductsTable}
          onProductSearch={onProductSearch}
        />
        <OrderProductList handleRemoveProduct={this.handleRemoveProduct} products={this.state.productList}/>
        <Button className="buttonSubmitOrder" type="primary" htmlType="submit" onClick={this.onSave}> Salvar </Button>
      </div>
    )
  }
}

export default  Form.create()(NewOrder)