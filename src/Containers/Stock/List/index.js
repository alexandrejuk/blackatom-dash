import React, { Component } from 'react'
import { Table } from 'antd'
import './index.css'

const columns = [
  {
    title: 'Produto',
    dataIndex: 'product.name',
    key: 'product.name',
  },
  {
    title: 'Fabricante',
    dataIndex: 'product.brand',
    key: 'product.brand',
  },
  {
    title: 'Quantidade',
    dataIndex: 'quantity',
    key: 'quantity',
    render: (quantity) => quantity < 0 ?
    <span className="text-danger">{quantity}</span> :
    <span className="text-primary">{quantity}</span> 
  },
  {
    title: 'Estoque',
    dataIndex: 'stockLocation.name',
    key: 'stockLocation.name',
  }
]
class StockList extends Component {
  render() {
    const { stocks } = this.props
    return (<Table columns={columns} dataSource={stocks} />)
  }
}

export default StockList