import React, { Component } from 'react'
import { Button, Table, Select, Modal, Slider, Radio } from 'antd'
import './index.css'

const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Relase extends Component {
  state = {
    selectedQuantity: 1,
    modalOpen: false,
    productReservation: null,
    selectedType: 'release',
    employeeId: null
  }

  historyColumns = [
    {
      title: 'Tipo',
      dataIndex: 'type',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantity',
    },
    {
      title: 'Ação',
      dataIndex: 'id',
      render: (id) =>
        <Button onClick={() => this.handleHistoryDelete(id)}>Excluir</Button>,
    },
  ]

  columns = [
    {
      title: 'Cliente',
      dataIndex: 'reservation.customer.name',
    },
    {
      title: 'Descrição Produto',
      dataIndex: 'product.name',
    },
    {
      title: 'N. Serial',
      dataIndex: 'individualProduct.serialNumber',
    },
    {
      title: 'Qtd. Reserva',
      dataIndex: 'quantity',
    },
    {
      title: 'Qtd. Pendente',
      dataIndex: 'currentQuantity',
    },
    {
      title: 'Ações',
      dataIndex: 'id',
      key: 'action',
      render: (id, record) => 
      record.currentQuantity > 0 ?
        <Button onClick={() => this.showModal(record)}>detalhes</Button> :
      ''
    }
  ]

  historyRender = (record) => <div>
    <h2>Historico</h2>
    <Table pagination={false} columns={this.historyColumns} dataSource={record.history} />
  </div> 

  handleHistoryDelete = async (id) => {
    await this.props.handleHistoryDelete(id)
    await this.props.fetchList(this.state.employeeId)
  }

  showModal = (productReservation) => {
    this.setState({
      modalOpen: true,
      productReservation,
      selectedQuantity: productReservation.currentQuantity,
    })
  }

  closeModal = () => {
    this.setState({
      modalOpen: false,
    })
  }

  handleTypeOnChange = (event) => {
    this.setState({
      selectedType: event.target.value,
    })
  } 

  renderModal() {
    const { productReservation } = this.state
    return (
      <Modal visible={this.state.modalOpen} footer={false} onCancel={this.closeModal}>
        <div className="wrapperRelease">
        <div>
          <h4>Selecione a ação</h4>
          <RadioGroup value={this.state.selectedType} onChange={this.handleTypeOnChange}>
            <RadioButton className="buttonCustom" value="return">
              Estorno
            </RadioButton>
            <RadioButton className="buttonCustom"  value="release">
              Liberar
            </RadioButton>
          </RadioGroup>      
        </div>
          <div className="sliderWrapper">
            <h1 className="textNumberInput">{this.state.selectedQuantity} un</h1>       
            <Slider
              min={1}
              max={this.state.productReservation.currentQuantity}
              onChange={this.onChange}
              value={this.state.selectedQuantity}
              />
          </div>
          <div>
            <h3 className="titleRelease">{productReservation.product.name}</h3>
            <p className="subtitleRelease">Quantidade Reserva: {productReservation.quantity} un</p>
          </div>
          <div className="footerRelease">
            <Button type="primary" block onClick={this.handleSubmit}>Salvar</Button>
          </div>
        </div>
      </Modal>
    )
  }

  handleSubmit = () => {
    const { selectedQuantity, productReservation, selectedType } = this.state

    const formattedItem = {
      item: {
        quantity: selectedQuantity,
        id: productReservation.id,
      },
      stockLocationId: productReservation.reservation.stockLocationId,
      reservationId: productReservation.reservation.id,
      type: selectedType,
    }

    this.setState({
      modalOpen: false,
    }, async () =>{
      await this.props.handleSubmit(formattedItem)
      this.props.fetchList(this.state.employeeId)
    })
  }

  onChange = (selectedQuantity) => {
    this.setState({
      selectedQuantity,
    })
  }

  onChangeTechnical = (employeeId) => {
    this
      .setState(
        { employeeId },
        () => this.props.fetchList(employeeId)
      )
  }

  renderEmployeeOptions = () => {
    const { technical } = this.props

    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Selecione o técnico!"
        onChange={this.onChangeTechnical}
      >
        {
          technical.map(
            tec =>
              <Option 
                key={tec._id} 
                value={tec._id}>
                  {tec.nome}
              </Option>
          )
        }

      </Select>
    )
  }

  render() {  
    const { productReservationList } = this.props
    return ( 
     <div>
       {this.renderEmployeeOptions()}
       <div>
        <Table
          columns={this.columns}
          dataSource={productReservationList}
          pagination={false}
          bordered={false}
          expandedRowRender={this.historyRender}
          rowKey={(record) => record.id}
        />
       </div>
       {this.state.modalOpen && this.renderModal()}
     </div>
    )
  }
}

export default Relase;