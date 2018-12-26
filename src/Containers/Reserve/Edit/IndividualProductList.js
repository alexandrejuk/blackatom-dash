import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Nome',
    dataIndex: 'product.name',
  },
  {
    title: 'Numero de Seriece',
    dataIndex: 'individualProduct.serialNumber',
  },
  {
    title: 'Disponivel',
    dataIndex: 'available',
  },
]

const historyColumns = [
  {
    title: 'Tipo',
    dataIndex: 'type',
  },
]

const ProductHistory = (record) => <div>
  <h2>Historico</h2>
  <Table columns={historyColumns} dataSource={record.history} />
</div>

const IndividualProductList  = ({
  products,
}) => <div>
  <h2>Produtos Individuais</h2>
  <Table
    columns={columns}
    dataSource={products}
    expandedRowRender={ProductHistory}
    pagination={false}
  />
</div>

export default IndividualProductList
