import React, { Component } from 'react'
import { Button } from 'antd'
import './index.css'

class OrderProductTable extends Component { 

  handleRemove = (index) => {
    this.props.handleRemoveProduct(index)
  }

  renderProduct = (product, index) => (
    <div className="card-product-order">
      <div className="card-content">
        <h3 className="no-margin title-card">{product.product.name}</h3>
        <p className="no-margin subtitle-card">{product.product.brand}</p>
      </div>
      <div className="card-content-quantity">
        <h3 className="no-margin title-card">{product.quantity} UN</h3>
      </div>
      <div className="card-content-button">
        <Button 
          className="buttonRemoveItem" 
          onClick={() => this.props.handleRemoveProduct(index)} 
          type="danger"
        >
          Remover
        </Button>
      </div>
    </div>
  )

  render() {
    const { products } = this.props
    return (
      <div>
        <div className="sectionLabelOrder product-order">
          <h3>Produtos Selecionados</h3>
        </div>
        {products.map(this.renderProduct)}
      </div>
    )
  }
}

export default OrderProductTable