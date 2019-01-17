import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import './index.css'
import OrderService from '../../../../services/orders'
import OrderListContainer from '../../../../Containers/Order/List'

class OrderList extends Component {
  orderService = null

  state = { 
    orders: []
  }

  componentDidMount() {
    this.orderService = new OrderService()
    this.getOrders()
  }

  async getOrders() {
    const orders = await this.orderService.orderList()
    this.setState({ orders })
  }

  render() { 
    return (
    <div className="wrapperOrders">
      <div className="ordersListHeader">
        <h1>Gerenciar Compras</h1>
          <Link className="linkNav" to={'/logged/orders/new'}>
            <Button  type="primary"> Nova </ Button>
          </Link>
      </div>
      <div className="ordersListContent">
        <OrderListContainer orders={this.state.orders.data} />
      </div>
    </div>
    )
  }
}
 
export default OrderList