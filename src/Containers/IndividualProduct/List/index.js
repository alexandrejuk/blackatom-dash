import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table, Icon, Tooltip } from 'antd'
import './index.css'

class List extends Component {
  columns = [
    {
      title: 'Descrição',
      dataIndex: 'product.name',
      key: 'product.name',
    },
    {
      title: 'N. Serial',
      dataIndex: 'serialNumber',
      key: 'serialNumber',
      render: (serialNumber) => 
        <Tooltip placement="topLeft" title="Copiado!" trigger="focus">
          <Button className="buttonCopy" value={serialNumber} onClick={this.handleCopy}>
            <Icon type="copy" />
            {serialNumber}
          </Button>
        </Tooltip>
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

  handleCopy = (e) => { 
    const copyText = document.createElement('textarea')
    copyText.value = e.target.value

    copyText.setAttribute('readonly', '')
    copyText.style.position = 'absolute'
    copyText.style.left = '-9999px'

    document.body.appendChild(copyText)
    copyText.select()

    document.execCommand('copy')
    document.body.removeChild(copyText)
  } 

  render() {
    const { individualProducts } = this.props
    return (<Table columns={this.columns} dataSource={individualProducts} />)
  }
}

export default List