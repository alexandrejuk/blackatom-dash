import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'antd';

const columns = [
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
  // {
  //   title: 'Ações',
  //   dataIndex: 'id',
  //   key: 'action',
  //   render: (id) => 
  //     <Link className="linkNav" to={`/orders/detail/${id}`}>
  //       <Button>Lançar</Button>
  //     </Link>
  // }
]

class ProductList extends Component {
  state = {
    bordered: false,
    pagination: false,
  }

  render() {
    const { orderProducts } = this.props
    return (<Table {...this.state} columns={columns} dataSource={orderProducts} />)
  }
}

export default ProductList