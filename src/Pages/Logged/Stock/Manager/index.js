import React, { Component } from 'react'
import StockList from '../../../../Containers/Stock/List'
import StockService from '../../../../services/stock'

class Manager extends Component {
  stockService = null
  state = { 
    stocks: []
  }

  componentDidMount() {
    this.stockService = new StockService()
    this.getStocks()
  }

  async getStocks() {
    const stocks = await this.stockService
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