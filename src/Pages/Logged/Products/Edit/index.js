import React, { Component } from 'react'
import ProductForm from '../../../../Containers/Product/Form'
import productService from '../../../../services/products'
import './index.css'
import { Alert } from 'antd'
import { omit } from 'ramda'

class EditProduct extends Component {
  form = null
  state = { 
    product: {
      quantityEntries: []
    }
  }

  componentDidMount() {
    this.getProduct()
  }

  async getProduct() {
    const id = this.props.match.params.id

    const product = await productService.getProductById(id)
      .then(response => response.data)
     product.quantityEntries.map(stock => console.log(stock.total))
    this.setState({ product })
    this.setForm(product)
  }

  setForm = (product) => {
    const productForm = omit(['id', 'createdAt', 'updatedAt', 'deletedAt'], product)
    this.form.props.form.setFieldsValue(productForm)
  }

  handleOnSubmit = async (values) => {
    const updatedProduct = await productService.editProduct(this.state.product.id, values.serialNumber)
      .then(response => response.data)
    
    this.setForm(updatedProduct)
  }

  renderQtdStock = stock => (
    <Alert
      key={stock.stockLocationId}
      className="mb-10"
      showIcon={false}
      message={`Estoque: ${stock.stockLocation.name} - ${stock.total} un`} banner />
  )

  render() { 
    return (
      <div className="wrapperEditroduct">
        <h1 className="editProductTitle">Editar Produto</h1>
        {this.state.product.quantityEntries.map(this.renderQtdStock)}
        <ProductForm wrappedComponentRef={(form) => this.form = form} actionLabel="Editar" onSubmit={this.handleOnSubmit}/> 
      </div>
    )
  }
}
 
export default EditProduct;