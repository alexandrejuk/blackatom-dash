import React, { Component, Fragment } from 'react'
import { Button } from 'antd'
import './index.css'

class ReserveProductList extends Component {

    renderProduct = (product, index) => (
      <Fragment key={product.product.id}>
        <div className="card-product-reserve">
          <div className="card-content">
            <a
              href={`${process.env.REACT_APP_HOST}/#/logged/products/edit/${product.product.id}`}
              target="_blank">
              <h3 className="no-margin title-card">
               {product.product.name}
              </h3>
            </a>
            <p className="no-margin subtitle-card">{product.product.brand}</p>
          </div>
          <div className="card-content-quantity">
            <h3 className="no-margin title-card">{product.quantity} UN</h3>
          </div>
          <div className="card-content-button">
            <Button 
              onClick={() => this.props.handleRemoveProduct(index)} 
              className="buttonRemoveItem" type="danger">Remover</Button>
          </div>
        </div>
				</Fragment>
    )

    render() { 
			const { products } = this.props
      return (
        <div>
          <div className="sectionLabelReserve product-reserve">
            <h3>Produtos Selecionados</h3>
          </div>
          {products.map(this.renderProduct)}
        </div>
      )
    }
}
 
export default ReserveProductList;