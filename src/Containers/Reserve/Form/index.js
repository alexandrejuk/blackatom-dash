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
    selectedCall: null,
    employeeId: null,
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
        const reservation = {
          ...values,
          products: this.state.productList,
          originId: this.state.originId,
          employeeId: values.originType === 'atendimento' ? this.state.selectedCall.tecnico._id : this.state.employeeId
        }

        this.props.onSubmit(reservation)
      }
    });
  }

  handleOnCallSelect  = (selectedCall) => {
    this.setState({ selectedCall })
  }

  handleOnEmployeeChange = employeeId => {
    this.setState({ employeeId, selectedCall: null, originId: null })
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
          onCallSelect={this.handleOnCallSelect}
          onEmployeeChange={this.handleOnEmployeeChange}
          selectedEmployeeId={this.state.employeeId}
          selectedCall={this.state.selectedCall}
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