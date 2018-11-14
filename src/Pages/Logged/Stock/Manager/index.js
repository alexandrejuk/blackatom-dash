import React, { Component } from 'react'
import StockList from '../../../../Containers/Stock/List'
import stockService from '../../../../services/stock'

class Manager extends Component {
  state = { 
    stocks: []
  }

  componentDidMount() {
    this.getStocks()
  }

  async getStocks() {
    const stocks = await stockService
      .getStocks()
      .then(response => response.data)

    this.setState({ stocks })
  }

  render() { 
    return (
      <div className="wrapperStock">
      <div className="stockListHeader">
        <h1>Gerenciar Estoque</h1>
      </div>
      <div className="stockListContent">
        <StockList stocks={this.state.stocks}/>
      </div>
    </div>
    )
  }
}
 
export default Manager