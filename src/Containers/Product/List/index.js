import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'antd';

const columns = [
  {
    title: 'Descrição',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Fabricante',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Preço Compra',
    dataIndex: 'priceBuy',
    key: 'priceBuy',
  },
  {
    title: 'Preço Venda',
    dataIndex: 'priceSell',
    key: 'priceSell',
  },
  {
    title: 'Ações',
    dataIndex: 'id',
    key: 'action',
    render: (id) => 
      <Link className="linkNav" to={`/logged/products/edit/${id}`}>
        <Button>Editar</Button>
      </Link>
  }
]
class List extends Component {
  render() {
    const { products, onPaginationChange, count, currentPage } = this.props
    return (<Table
      pagination={{
        total: count,
        current: currentPage,
        pageSize: 25,
        onChange: onPaginationChange,
      }}
      columns={columns}
      dataSource={products}
      position='top'
    />
    )
  }
}

export default List