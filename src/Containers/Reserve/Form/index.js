import React, { Component } from 'react'
import { Form, Button } from 'antd'

import  ReserveForm from './ReserveForm'
import  ReserveProductForm from './ReserveProductForm'
import  ReserveProductList from './ReserveProductList'

class NewReserve extends Component {
  reserveFormRef = null
  productFormRef = null

  state = {
    productList: [],
    originId: null,
    callSelected: null
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

  onSave = () => {
    this.reserveFormRef.props.form.validateFields((err, values) => {
      if (!err && this.state.productList.length > 0) {
        this.props.onSubmit({
          ...values,
          products: this.state.productList,
          originId: this.state.originId,
          employeeId: this.state.callSelected ? this.state.callSelected.tecnico._id : this.state.originId
        })
      }
    });
  }

  handleOriginIdSelected = (originId, callSelected) => {
    this.setState({ originId, callSelected })
  }
  
  render() {
    const { stockLocations, products, handleGetCustomerByCnpj, customer, listCalls } = this.props
    return (
      <div>
        <ReserveForm 
          listCalls={listCalls} 
          customer={customer} 
          handleGetCustomerByCnpj={handleGetCustomerByCnpj} 
          wrappedComponentRef={(form) => this.reserveFormRef = form} 
          stockLocations={stockLocations} 
          handleOriginIdSelected={this.handleOriginIdSelected}
        />
        <ReserveProductForm 
          wrappedComponentRef={(form) => this.productFormRef = form} 
          products={products}
          onSubmit={this.handleAddProductList}
        />
        <ReserveProductList handleRemoveProduct={this.handleRemoveProduct} products={this.state.productList}/>
        <Button className="buttonSubmitReserve" type="primary" onClick={this.onSave} htmlType="submit"> Salvar </Button>
      </div>
    )
  }
}

export default Form.create()(NewReserve)