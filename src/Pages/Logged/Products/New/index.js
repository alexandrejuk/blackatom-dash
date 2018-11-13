import React, { Component } from 'react'
import ProductForm from '../../../../Containers/Product/Form'
import productService from '../../../../services/products'

class NewProduct extends Component {

  async handleOnSubmit(values) {
    await productService.addProduct(values)
  }

  render() { 
    return (<ProductForm actionLabel="Salvar" onSubmit={this.handleOnSubmit}/>);
  }
}
 
export default NewProduct;