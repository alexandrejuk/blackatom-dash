import React, { Component } from 'react'
import { Button, Table } from 'antd'

class OrderProductTable extends Component { 
  state = {
    bordered: false,
    pagination: false,
  }

  handleRemove = (index) => {
    this.props.handleRemoveProduct(index)
  }

  render() {
    const { products } = this.props
    const columns = [{
      title: 'Actions',
      dataIndex: 'id',
      render: (text, record, index) => 
        <Button onClick={() => this.handleRemove(index)}>Remover</Button>
    },{
      title: 'Nome Produto',
      dataIndex: 'product.name',
    },{
      title: 'Quantidade',
      dataIndex: 'quantity',
    }]
    
    return (
      <Table 
        {...this.state} 
        className="tableProducts" 
        columns={columns} 
        dataSource={products} 
        size="middle" 
      />
    )
  }
}

export default OrderProductTable