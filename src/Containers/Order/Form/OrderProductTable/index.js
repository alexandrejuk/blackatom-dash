import React, { Component } from 'react'
import { Button } from 'antd'
import './index.css'

class OrderProductTable extends Component { 
  state = {
    bordered: false,
    pagination: false,
  }

  handleRemove = (index) => {
    this.props.handleRemoveProduct(index)
  }

  renderProducts = products => products.map((product) => (
    <div className="card-product-order">
      <div className="card-content">
        <h3 className="no-margin title-card">{product.product.name}</h3>
        <p className="no-margin subtitle-card">{product.product.brand}</p>
      </div>
      <div className="card-content-quantity">
        <h3 className="no-margin title-card">{product.quantity} UN</h3>
      </div>
      <div className="card-content-button">
        <Button className="buttonRemoveItem" type="danger">Remover</Button>
      </div>
    </div>
  ))

  render() {
    const { products } = this.props
    return (
      <div>
        <div className="sectionLabelOrder product-order">
          <h3>Produtos Selecionados</h3>
        </div>
        {this.renderProducts(products)}
      </div>
    )
  }
}

export default OrderProductTable