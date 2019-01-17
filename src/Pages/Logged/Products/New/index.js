import React, { Component } from 'react'
import './index.css'
import { message } from 'antd'

import ProductForm from '../../../../Containers/Product/Form'
import ProductService from '../../../../services/products'

const success = () => {
  message.success('Produto cadastrado com sucesso!')
}

const error = () => {
  message.error('Não foi possível cadastrar o produto!')
}

class NewProduct extends Component {
  productService = null
  state = {
    formKey: 0
  }

  componentDidMount(){
    this.productService = new ProductService()
  }

  handleOnSubmit = async (values) => {
    try {
      await this.productService.addProduct(values)
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