import React, { Component } from 'react'
import './index.css'
import { Select } from 'antd'

import TotalListContainer from '../../../../Containers/Stock/TotalList'
import stockService from '../../../../services/stock'
import stockLocationService from '../../../../services/stockLocation'

const Option = Select.Option

class ReservedList extends Component {
  state = { 
    stocks: [],
    stockLocation: [],
  }

  componentDidMount(){ 
    this.fethProductsStockTotal()
    this.fethstockLocation()
  }

  async fethstockLocation() {

    const stockLocation = await stockLocationService.getStockLocations()
      .then(response => response.data)

    this.setState({ stockLocation })
  } 

  async fethProductsStockTotal() {

    const stocks = await stockService.getStockProducts()
      .then(response => response.data)

    this.setState({ stocks })
  } 


  async fethProductsStockLocationTotal(stockLocationId) {

    const stocks = await stockService.getStockProductsStockLocationId(stockLocationId)
      .then(response => response.data)

    this.setState({ stocks })
  } 

  onChangeStockSelected = (stockSelected) => {
    if(stockSelected === 'all') {
      return this.fethProductsStockTotal()
    }
    return this.fethProductsStockLocationTotal(stockSelected)  
  }

  render() { 
    return (
      <div className="wrappertotal">
        <div className="totalListHeader">
          <h1>Saldo Estoque</h1>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={this.onChangeStockSelected}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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