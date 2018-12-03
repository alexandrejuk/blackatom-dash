import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

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
            {/* <Link className="linkNav" to={'/logged/stock/available/new'}>
              <Button  type="primary"> Novo </ Button>
            </Link> */}
        </div>
        <div className="productListContent"><IndividualProductListContainer individualProducts={this.state.individualProducts} /></div>
      </div>
    )
  }
}
 
export default IndividualProductList