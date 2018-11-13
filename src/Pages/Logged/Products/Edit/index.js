import React, { Component } from 'react'
import ProductForm from '../../../../Containers/Product/Form'
import productService from '../../../../services/products'
import { omit } from 'ramda'

class EditProduct extends Component {
  form = null
  state = { 
    product: {}
  }

  componentDidMount() {
    this.getProduct()
  }

  async getProduct() {
    const id = this.props.match.params.id

    const product = await productService.getProductById(id)
      .then(response => response.data)
    
    this.setState({ product })
    
    const productForm = omit(['id', 'createdAt', 'updatedAt', 'deletedAt'], product)
    this.form.props.form.setFieldsValue(productForm)
  }

  async handleOnSubmit(values) {
    await productService.editProduct(35, values)
  }

  render() { 
    return (<ProductForm
      wrappedComponentRef={(form) => this.form = form}
      actionLabel="Editar"
      onSubmit={this.handleOnSubmit}
    />)
  }
}
 
export default EditProduct;