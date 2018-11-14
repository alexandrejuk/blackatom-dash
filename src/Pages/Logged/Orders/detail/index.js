import React, { Component } from 'react'
import orderService from '../../../../services/orders'
import './index.css'
import iconCheck from '../../../../assets/icon/checked.svg'
import iconCancell from '../../../../assets/icon/delete.svg'

import { Col, Row, Button, Alert } from 'antd'
import ProductList from '../../../../Containers/Order/ProductList'

class OrderList extends Component {
  state = { 
    order: {}
  }

  componentDidMount() {
    this.getOrder()
  }

  async getOrder() {
    const id = this.props.match.params.id
    const order = await orderService
      .getOrderById(id)
      .then(response => response.data)

    this.setState({ order })
  }

  handleCancellOrder = async () => {
    const id = this.props.match.params.id
    const order = await orderService
      .updateOrderById(id)
      .then(response => response.data)
    this.setState({ order })
  }

  render() { 
    const { order } = this.state
    return (
      <div className="wrapper">
        <div>
            {
              order.status !== 'CANCELLED' ? 
              <img src={iconCheck} className="checkIcon" alt="check-icon" /> :
              <img src={iconCancell} className="cancellIcon" alt="cancell-icon" />
            }
        </div>
        <h1>Detalhes da Compra</h1>
        <div className="content">
          <div className="orderDescription">
            <span>{order.description}</span>
          </div>

          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <span className="spanTitle">Status : <span>{order.status}</span></span>
            </Col>
            <Col className="gutter-row" span={5}>
              <span className="spanTitle">Aberto Por： <span>Alexandre S.</span> </span>
            </Col>
            <Col className="gutter-row" span={12}>
              <span className="spanTitle">Aberto Por： <span>{order.createdAt} ~ {order.updatedAt}</span></span>
            </Col>
          </Row>
          <Row className="orderProducts">
            <Col>
              <span className="productsOrderTitle">PRODUTOS DA COMPRA</span>
              <ProductList orderProducts={order.orderProducts} />
            </Col>
          </Row>
        </div>
        <div className="footer">
          {
            order.status !== 'CANCELLED' ? 
            <Button type="danger" onClick={this.handleCancellOrder}>Cancelar Compra</Button> :
            <Alert type="error" message="Compra Cancelada" banner />
          }
        </div>
      </div>
    )
  }
}
 
export default OrderList