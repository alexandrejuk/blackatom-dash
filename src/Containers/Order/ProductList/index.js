import React, { Component } from 'react'
import { Button, Table } from 'antd';

class ProductList extends Component {
  state = {
    bordered: false,
    pagination: false,
  }

  columns = [
    {
      title: 'Descrição',
      dataIndex: 'product.name',
      key: 'product.name',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Quantidade Pendente',
      dataIndex: 'unregisteredQuantity',
      key: 'unregisteredQuantity',
    },
    {
      title: 'Ações',
      dataIndex: 'id',
      key: 'action',
      render: (t, record) =>   
      record.unregisteredQuantity > 0 ? 
        <Button onClick={() => this.props.onClick(record)}>Adicionar Serial</Button> :
      ''
    }
  ]

  render() {
    const { orderProducts } = this.props
    return (<Table {...this.state} columns={this.columns} dataSource={orderProducts} />)
  }
}

export default ProductList