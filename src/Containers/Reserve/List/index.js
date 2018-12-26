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
      <Link className="linkNav" to={`/logged/stock/reserve/edit/${id}`}>
        <Button>Detalhes</Button>
      </Link>
  }
]
class List extends Component {
  render() {
    const { reservedList } = this.props
    return (<Table columns={columns} dataSource={reservedList} />)
  }
}

export default List