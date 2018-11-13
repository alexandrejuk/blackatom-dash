import React, { Component } from 'react'
import orderService from '../../../../services/orders'
import OrderListContainer from '../../../../Containers/Order/List'

class OrderList extends Component {
  state = { 
    orders: []
  }

  componentDidMount() {
    this.getOrders()
  }

  async getOrders() {
    const orders = await orderService.orderList()
    this.setState({ orders })
  }

  render() { 
    return (<OrderListContainer orders={this.state.orders.data} />)
  }
}
 
export default OrderList