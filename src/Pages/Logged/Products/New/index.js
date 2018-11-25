import React, { Component } from 'react'
import './index.css'
import { message } from 'antd'

import ProductForm from '../../../../Containers/Product/Form'
import productService from '../../../../services/products'

const success = () => {
  message.success('Produto cadastrado com sucesso!')
}

const error = () => {
  message.error('Não foi possível cadastrar o produto!')
}

class NewProduct extends Component {
  state = {
    formKey: 0
  }

  handleOnSubmit = async (values) => {
    try {
      await productService.addProduct(values)
      success()
      this.setState((state) => ({ formKey: state.formKey + 1 }))
    }catch(err) {
      error()
    }
  }

  render() { 
    return (
      <div className="wrapperNewProduct">
        <h1 className="newProductTitle">Cadastrar Novo Produto</h1>
        <ProductForm key={this.state.formKey} actionLabel="Salvar" onSubmit={this.handleOnSubmit}/>    
      </div>
    )
  }
}
 
export default NewProduct;