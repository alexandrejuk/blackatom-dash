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
    title: 'N. Serial',
    dataIndex: 'serialNumber',
    key: 'serialNumber',
  },
  {
    title: 'Fabricante',
    dataIndex: 'product.brand',
    key: 'product.brand',
  },
  {
    title: 'Categoria',
    dataIndex: 'product.category',
    key: 'product.category',
  },
  {
    title: 'Estoque',
    dataIndex: 'stockLocation.name',
    key: 'stockLocation.name',
  },
  {
    title: 'Disponível',
    dataIndex: 'available',
    key: 'available',
    render: (value) => value ? 'SIM' : 'NÃO'
  },
  {
    title: 'Ações',
    dataIndex: 'id',
    key: 'action',
    render: (id, record ) => 
    record.available ?
      <Link className="linkNav" to={`/logged/stock/available/edit/${id}`}>
        <Button>Editar</Button>
      </Link>
    :
      ''
  }
]
class List extends Component {
  render() {
    const { individualProducts } = this.props
    return (<Table columns={columns} dataSource={individualProducts} />)
  }
}

export default List