import React, { Component } from 'react'
import './index.css'

import ProductForm from '../../../../Containers/Product/Form'
import productService from '../../../../services/products'

class NewProduct extends Component {

  async handleOnSubmit(values) {
    await productService.addProduct(values)
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