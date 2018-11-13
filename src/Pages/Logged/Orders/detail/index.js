import React, { Component } from 'react'
import orderService from '../../../../services/orders'

class OrderList extends Component {
  state = { 
    order: {}
  }

  componentDidMount() {
    this.getOrder()
  }

  async getOrder() {
    const id = this.props.match.params.id
    const order = await orderService.getOrderById(id)
    this.setState({ order })
  }

  render() { 
    return (
      <div>
        <h1>{this.state.order.description}</h1>
        <h1>{this.state.order.createdAt}</h1>

      </div>
    )
  }
}
 
export default OrderList