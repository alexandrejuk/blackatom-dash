import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'antd';

const columns = [
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Criado',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createdAt) => 
      new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))
  },
  {
    title: 'Ações',
    dataIndex: 'id',
    key: 'action',
    render: (id) => 
      <Link className="linkNav" to={`/logged/orders/detail/${id}`}>
        <Button>Detalhes</Button>
      </Link>
  }
]
class List extends Component {
  render() {
    const { orders } = this.props
    return (<Table columns={columns} dataSource={orders} />)
  }
}

export default List