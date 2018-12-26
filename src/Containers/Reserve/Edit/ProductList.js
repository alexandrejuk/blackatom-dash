import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Nome',
    dataIndex: 'product.name',
  },
  {
    title: 'Quantidade Reservada',
    dataIndex: 'quantity',
  },
  {
    title: 'Quantidade Atual',
    dataIndex: 'currentQuantity',
  },
]

const historyColumns = [
  {
    title: 'Tipo',
    dataIndex: 'type',
  },
  {
    title: 'Quantidade',
    dataIndex: 'quantity',
  },
]

const ProductHistory = (record) => <div>
  <h2>Historico</h2>
  <Table columns={historyColumns} dataSource={record.history} />
</div>

const ProductList  = ({
  products,
}) => <div>
  <h2>Produtos</h2>
  <Table
    columns={columns}
    dataSource={products}
    expandedRowRender={ProductHistory}
    pagination={false}
  />
</div>

export default ProductList
