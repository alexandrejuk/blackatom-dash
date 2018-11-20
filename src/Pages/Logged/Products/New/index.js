import React, { Component } from 'react'
import './index.css'
import { message } from 'antd'

import ProductForm from '../../../../Containers/Product/Form'
import productService from '../../../../services/products'


const success = () => {
  message.success('Produto cadastrado com sucesso!');
};

const error = () => {
  message.error('Não foi possível cadastrar o produto!');
};

class NewProduct extends Component {
  async handleOnSubmit(values) {
    try {
      await productService.addProduct(values)
      success()
    }catch {
      error()
    }
  }

  messageHandle = () => {

  }


  render() { 
    return (
      <div className="wrapperNewProduct">
        <h1 className="newProductTitle">Cadastrar Novo Produto</h1>
        <ProductForm actionLabel="Salvar" onSubmit={this.handleOnSubmit}/>
       
      </div>
    )
  }
}
 
export default NewProduct;