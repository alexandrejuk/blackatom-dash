import React, { Component } from 'react'
import './index.css'
import { Select } from 'antd'

import TotalListContainer from '../../../../Containers/Stock/TotalList'
import StockService from '../../../../services/stock'
import StockLocationService from '../../../../services/stockLocation'

const Option = Select.Option

class ReservedList extends Component {
  stockService = null
  stockLocationService = null

  state = { 
    stocks: [],
    stockLocation: [],
    selectedStockLocation: 'all',
  }

  componentDidMount(){
    this.stockService = new StockService()
    this.stockLocationService = new StockLocationService()

    this.fethProductsStockTotal()
    this.fethstockLocation()
  }

  async fethstockLocation() {

    const stockLocation = await this.stockLocationService.getStockLocations()
      .then(response => response.data)

    this.setState({ stockLocation })
  } 

  async fethProductsStockTotal() {

    const stocks = await this.stockService.getStockProducts()
      .then(response => response.data)

    this.setState({ stocks })
  } 


  async fethProductsStockLocationTotal(stockLocationId) {
    const stocks = await this.stockService.getStockProductsStockLocationId(stockLocationId)
      .then(response => response.data)

    this.setState({ stocks })
  } 

  onChangeStockSelected = (stockSelected) => {
    this.setState({
      selectedStockLocation: stockSelected
    }, () => {
      if(stockSelected === 'all') {
        return this.fethProductsStockTotal()
      }
      
      return this.fethProductsStockLocationTotal(stockSelected)  
    })
  }

  render() { 
    return (
      <div className="wrappertotal">
        <div className="totalListHeader">
          <h1>Saldo Estoque</h1>
          <Select
            showSearch
            value={this.state.selectedStockLocation}
            style={{ width: 200 }}
            placeholder="Select a person"
            onChange={this.onChangeStockSelected}
          >
            <Option value="all">TODOS</Option>
            { this.state.stockLocation.map(stock => 
              (<Option key={stock.id} value={stock.id}>{stock.name}</Option>)
            )}
          </Select>
        </div>
        <div className="totalListContent">
          <TotalListContainer stocks={this.state.stocks} />
        </div>
      </div>
    )
  }
}
 
export default ReservedList