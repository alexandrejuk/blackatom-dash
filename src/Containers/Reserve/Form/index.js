import React, { Component } from 'react'
import { Form, Button } from 'antd'

import  ReserveForm from './ReserveForm'
import  ReserveProductForm from './ReserveProductForm'
import  ReserveProductList from './ReserveProductList'

class NewReserve extends Component {
  reserveFormRef = null
  productFormRef = null

  state = {
    productList: []
  }

  handleAddProductList = (value) => {
    this.setState({
      productList: [...this.state.productList, value]
    })
    this.productFormRef.props.form.resetFields()
  }

  handleRemoveProduct = (index) => {
    const productList = this.state.productList.filter((_, i) => index !== i)

    this.setState({ productList })
  }

  render() {
    const { stockLocations, products } = this.props
    return (
      <div>
        <ReserveForm wrappedComponentRef={(form) => this.reserveFormRef = form} stockLocations={stockLocations} />
        <ReserveProductForm 
          wrappedComponentRef={(form) => this.productFormRef = form} 
          products={products}
          onSubmit={this.handleAddProductList}
        />
        <ReserveProductList handleRemoveProduct={this.handleRemoveProduct} products={this.state.productList}/>
        <Button className="buttonSubmitReserve" type="primary" htmlType="submit"> Salvar </Button>
      </div>
    )
  }
}

export default Form.create()(NewReserve)