import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'antd';
import moment from 'moment';
import Filter from '../../Filter'

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
    const { reservedList, onSearch, count, onPaginationChange, currentPage } = this.props
    return (
      <div>
        <Filter
          placeholder="pesquise pelo nome do cliente ou codigo de rastreamento"
          onSearch={onSearch}
          globalFields={['trackingCode', '$customer.name$']}
        />
        <Table
          columns={columns}
          dataSource={reservedList}
          pagination={{
            total: count,
            current: currentPage,
            pageSize: 25,
            onChange: onPaginationChange,
          }}
          position='top'
        />
      </div>
    )
  }
}

export default List