import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'antd';
import moment from 'moment';

const columns = [
  {
    title: 'Cliente',
    dataIndex: 'customer.name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Criado',
    dataIndex: 'createdAt',
    render: (createdAt) => 
      moment(createdAt).format('DD/MM/YYYY')
  },
  {
    title: 'Cod. de Rastreamento',
    dataIndex: 'trackingCode',
  },
  {
    title: 'Ações',
    dataIndex: 'id',
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