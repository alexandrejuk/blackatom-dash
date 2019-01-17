import React, { Component } from 'react'
import './index.css'
import { Table } from 'antd'

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
    dataIndex: 'total',
    key: 'total',
    render: (quantity) => quantity < 0 ?
    <span className="text-danger">{quantity}</span> :
    <span className="text-primary">{quantity}</span> 
  }
]
class TotalList extends Component {
  render() {
    const { stocks } = this.props
    return (<Table columns={columns} dataSource={stocks} />)
  }
}

export default TotalList