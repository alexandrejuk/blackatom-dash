import React, { Component } from 'react'
import  { Redirect } from 'react-router-dom'
import { message } from 'antd'

import NewOrderContainers from '../../../../Containers/Order/Form'

import ProductService from '../../../../services/products'
import StockLocationService from '../../../../services/stockLocation'
import OrderService from '../../../../services/orders'

const error = () => {
  message.error('Não foi possível cadastrar o produto!')
}

class NewOrder extends Component {
  orderService = null
  stockLocationService = null
  orderService = null
  productService = null

  state = {
    products: [],
    stockLocations: [],
    redirectPage: {
      redirect: false, 
      orderId: null,
    },
  }

  componentDidMount() {
    this.orderService = new OrderService()
    this.stockLocationService = new StockLocationService()
    this.orderService = new OrderService()
    this.productService = new ProductService()

    this.getProducts()
    this.getStockLocations()
  }

  getProducts = async (searchTerm = '') => {
    const productsResponse = await this.productService
      .productList(1, {
        product: {
          specific: {
            name: searchTerm
          }
        }
      })
      .then(response => response.data)
    
      this.setState({
        products: productsResponse.rows,
      })
  }

  async getStockLocations() {
    const stockLocations = await this.stockLocationService
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
      await this.orderService.addOrder(formattedOrder)
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
      return <Redirect to={`/logged/orders/detail/${orderId}`} />
    }
  }

  render() { 
    return (
      <div>
        <h1>Nova Compra</h1>
        <NewOrderContainers 
          onProductSearch={this.getProducts}
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