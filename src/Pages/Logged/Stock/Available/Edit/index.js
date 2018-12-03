import React, { Component } from 'react'
import IndividualProductForm from '../../../../../Containers/IndividualProduct/Form'
import individualProductService from '../../../../../services/individualProduct'
import { message } from 'antd'

const success = () => {
  message.success('Número Serial Atualizado com sucesso!')
}

const error = () => {
  message.error('Não foi possível atualizar o número serial do produto!')
}


class EditProductAvailable extends Component {
  form = null
  state = { 
    productAvailable: {}
  }

  componentDidMount() {
    this.getProductAvailable()
  }

  async getProductAvailable() {
    const id = this.props.match.params.id

    const productAvailable = await individualProductService.getProductAvailableById(id)
      .then(response => response.data)

    this.setForm(productAvailable)
  }

  setForm = (productAvailable) => {
    this.setState({ productAvailable })
    
    const productForm = { 
      serialNumber: productAvailable.serialNumber,
      name: productAvailable.product.name
    }

    this.form.props.form.setFieldsValue(productForm)
  }

  handleOnSubmit = async ({ serialNumber }) => {
    try {
      await individualProductService.editProductAvailable(this.state.productAvailable.id, serialNumber)
      .then(response => response.data)
      success()
    } catch (err) {
      error()
    }
  }

  render() { 
    return (
      <div className="wrapperEditroduct">
      <h1 className="editProductTitle">Editar N. Serial do Produto</h1>
      <IndividualProductForm wrappedComponentRef={(form) => this.form = form} actionLabel="Editar" onSubmit={this.handleOnSubmit}/>
    </div>
    )
  }
}
 
export default EditProductAvailable