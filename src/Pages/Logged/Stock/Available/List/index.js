import React, { Component } from 'react'

import IndividualProductListContainer from '../../../../../Containers/IndividualProduct/List'
import individualProductService from '../../../../../services/individualProduct'

import './index.css'

class IndividualProductList extends Component {
  state = { 
    individualProducts: []
  }

  componentDidMount() {
    this.getIndividualProducts()
  }

  getIndividualProducts = async () => {
    const individualProducts = await individualProductService.individualProductList()
        .then(response => response.data)
    this.setState({ individualProducts })
  }

  render() { 
    return (
      <div className="wrapperProducts">
        <div className="productListHeader">
          <h1>Gerenciar Produtos Disponíveis</h1>
        </div>
        <div className="productListContent"><IndividualProductListContainer individualProducts={this.state.individualProducts} /></div>
      </div>
    )
  }
}
 
export default IndividualProductList