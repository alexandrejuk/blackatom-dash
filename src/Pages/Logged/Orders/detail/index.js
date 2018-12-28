import React, { Component } from 'react'
import orderService from '../../../../services/orders'
import individualProductService from '../../../../services/individualProduct'

import './index.css'
import iconCheck from '../../../../assets/icon/checked.svg'
import iconCancell from '../../../../assets/icon/delete.svg'
import iconBarcode from '../../../../assets/icon/barcode.jpg'

import { uniqWith, eqBy } from 'ramda'

import { Col, Row, Button, Alert, Modal, Input, message } from 'antd'
import ProductList from '../../../../Containers/Order/ProductList'

const TextArea = Input.TextArea

const success = (msg) => {
  message.success('Número(s) serial(s) adicionado(s) com sucesso!')
}

const error = (msg) => {
  message.error(msg)
}


class OrderList extends Component {
  state = { 
    order: {},
    loading: false,
    visible: false,
    serialNumbersText: '',
    productModal: null,
  }

  componentDidMount() {
    this.getOrder()
  }

  showModal = (productModal) => {
    this.setState({ visible: true, productModal })
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  handleOk = () => {
    this.setState({ visible: false })
    this.handleClick()
  }

  async getOrder() {
    const id = this.props.match.params.id
    const order = await orderService
      .getOrderById(id)
      .then(response => response.data)

    this.setState({ order })
  }


  getSerialNumbers = () => {
    const serialArray = this.state.serialNumbersText
      .split("\n")
      .filter(s => s !== "")

    return uniqWith(eqBy(String))(serialArray)
  }

  handleClick = async () => {
    const individualProductData = {
      productId: this.state.productModal.productId,
      originId: this.state.productModal.id,
      originType: 'orderProduct',
      stockLocationId: this.state.order.stockLocationId,
      serialNumbers: this.getSerialNumbers()
    }

    try {

      if (individualProductData.serialNumbers.length > this.state.productModal.unregisteredQuantity) {
        throw new Error()
      }

      await individualProductService
        .addManyProductsSerialNumber(individualProductData)
      
      this.setState({ productModal: null, serialNumbersText: '' })
      this.getOrder()
      success()
    } catch (err) {
      error('Verifique a quantidade e os números serial(s), e tente novamente!')
    }    
  }

  handleOnChange = (e) => {
    const serialNumbersText = e.target.value
    this.setState({ serialNumbersText })
  }

  renderModal = () => {
    const product = this.state.productModal ? this.state.productModal.product.name : 'Product not Selected!'
    return (
      <Modal
        visible={this.state.visible}
        title={product}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>Voltar</Button>,
          <Button key="submit" onClick={this.handleOk} type="primary" >Salvar</Button>,
        ]}
      >
        <div className="wrapperBarcode">
          <img src={iconBarcode} className="barcodeIcon" alt="barcode-scan" />
          <h3 className="modalTitle">Utilize o Leitor de código de barras</h3>
          <p className="no-space-around">Para utilizar corretamente o cursor deve ficar piscando</p>
        </div>
        <TextArea ref={this.textInput} rows={4} value={this.state.serialNumbersText} onChange={this.handleOnChange} />
      </Modal>
    )
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
              <span className="spanTitle">Estoque： <span>
                {
                  order.stockLocation && order.stockLocation.name ? order.stockLocation.name : ''
                }
              </span></span>
            </Col>
            <Col className="gutter-row" span={6}>
              <span className="spanTitle">Status: <span>{order.status}</span></span>
            </Col>
            <Col className="gutter-row" span={6}>
              <span className="spanTitle">Aberto Por： <span>Alexandre S.</span> </span>
            </Col>
            <Col className="gutter-row" span={6}>
              <span className="spanTitle">Criado Em： <span>{order.createdAt}</span></span>
            </Col>
          </Row>
          <Row className="orderProducts">
            <Col>
              <span className="productsOrderTitle">PRODUTOS DA COMPRA</span>
              <ProductList orderProducts={order.orderProducts} onClick={this.showModal} orderStatus={order.status}/>
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
        {this.renderModal()}
      </div>
    )
  }
}
 
export default OrderList