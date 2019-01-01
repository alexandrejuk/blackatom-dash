import React, { Component } from 'react'
import './index.css'
import { message } from 'antd'
import { omit } from 'ramda'

import ProductForm from '../../../../Containers/Product/Form'
import ProductService from '../../../../services/products'

const success = () => {
  message.success('Produto editado com sucesso!')
}

const error = () => {
  message.error('Não foi possível editar o produto!')
}


class EditProduct extends Component {
  productService = null
  form = null
  state = { 
    product: {}
  }

  componentDidMount() {
    this.productService = new ProductService()
    this.getProduct()
  }

  async getProduct() {
    const id = this.props.match.params.id

    const product = await this.productService.getProductById(id)
      .then(response => response.data)

    this.setForm(product)
  }

  setForm = (product) => {
    this.setState({ product })
    
    const productForm = omit(['id', 'createdAt', 'updatedAt', 'deletedAt'], product)
    this.form.props.form.setFieldsValue(productForm)
  }

  handleOnSubmit = async (values) => {
    try {
      const updatedProduct = await this.productService
        .editProduct(this.state.product.id, values)
        .then(response => response.data)
      this.setForm(updatedProduct)
      success()
    } catch (err) {
      error()
    }
  }

  render() { 
    return (
      <div className="wrapperEditroduct">
      <h1 className="editProductTitle">Editar Produto</h1>
      <ProductForm wrappedComponentRef={(form) => this.form = form} actionLabel="Editar" onSubmit={this.handleOnSubmit}/> 
    </div>
    )
  }
}
 
export default EditProduct;