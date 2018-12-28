import React, { Component } from 'react'
import moment from 'moment'
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
  },
  {
    title: 'Data Lançamento',
    dataIndex: 'stockLocation.createdAt',
    key: 'stockLocation.createdAt',
    render: (createdAt) =>
      moment(createdAt).format('DD/MM/YYYY HH:mm')
  }
]
class StockList extends Component {
  render() {
    const { stocks } = this.props
    return (<Table columns={columns} dataSource={stocks} />)
  }
}

export default StockList