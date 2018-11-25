import React, { Component } from 'react'
import  { Redirect } from 'react-router-dom'
import { message } from 'antd'

import NewOrderContainers from '../../../../Containers/Order/Form'

import productService from '../../../../services/products'
import stockLocationService from '../../../../services/stockLocation'
import orderService from '../../../../services/orders'

const error = () => {
  message.error('Não foi possível cadastrar o produto!')
}

class NewOrder extends Component {
  state = {
    products: [],
    stockLocations: [],
    redirectPage: {
      redirect: false, 
      orderId: null,
    },
  }

  componentDidMount() {
    this.getProducts()
    this.getStockLocations()
  }

  async getProducts() {
    const products = await productService
      .productList()
      .then(response => response.data)
    this.setState({ products })
  }

  async getStockLocations() {
    const stockLocations = await stockLocationService
      .getStockLocations()
      .then(response => response.data)
    this.setState({ stockLocations })
  }

  saveOrder = async(order) => {
    const formattedOrder = {
      ...order,
      stockLocationId: order.stockLocation,
      orderProducts: order.orderProducts
        .map(item => ({
          quantity: item.quantity,
          productId: item.product.id,
        }))
    }

    try {
      await orderService.addOrder(formattedOrder)
        .then(response => {
          this.setState({ 
            redirectPage: { 
              redirect: true, 
              orderId: response.data.id
            }
          })
        })
    } catch (err) {
      error()
    }
  }


  renderRedirect = () => {
    const { redirect, orderId } = this.state.redirectPage
    if(redirect) {
      return <Redirect to={`/orders/detail/${orderId}`} />
    }
  }

  render() { 
    return (
      <div>
        <h1>Nova Compra</h1>
        <NewOrderContainers 
          products={this.state.products} 
          stockLocations={this.state.stockLocations} 
          actionLabel="Salvar"
          onSubmit={this.saveOrder}
        />
        { this.renderRedirect() }
      </div>
    )
  }
}
 
export default NewOrder;