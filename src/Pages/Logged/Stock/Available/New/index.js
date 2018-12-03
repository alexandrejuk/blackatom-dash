import React, { Component } from 'react'
import './index.css'

class NewProductAvailable extends Component {
  state = {
    formKey: 0
  }

  handleOnSubmit = async (values) => {
    try {
      this.setState((state) => ({ formKey: state.formKey + 1 }))
    }catch(err) {

    }
  }

  render() { 
    return (
      <div className="wrapperNewProductAvailable">
        <h1 className="newProductAvailableTitle">Cadastrar N. Serial</h1>
      </div>
    )
  }
}
 
export default NewProductAvailable