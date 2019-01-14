import React, { Component } from 'react'
import { Radio, Form, Input, Modal, Button, Collapse, Icon } from 'antd'
import './index.css'
import { equals } from 'ramda'
import moment from 'moment'

const FormItem = Form.Item
const Panel = Collapse.Panel;

class ReserveProductForm extends Component {
  state = {
    visible: false,
    originId: null,
    callSelected: null,
  }

  originTypes = {
    'correio': '5c24d215304f150001e937d1',
    'cliente-retira': '5c24d1e8304f150001e937c0',
    'mercado-livre': '5c24d195304f150001e937b3'
  }

  componentWillReceiveProps(props) {
    if(props.customer !== this.props.customer) {
      this.props.form.setFieldsValue({
        socialName: props.customer.name
      })
    }
  }

  showModal = () => {
    this.setState({ visible: true })
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  handleOk = () => {
    this.setState({ visible: false })

    if(this.state.callSelected) {
      this.props.onCallSelect(this.state.callSelected)
    }
  }

  handleSelected = (callSelected) => {  
    return this.setState({ callSelected })
  }

  handleEmployeeIdChange = (e) => {
    const employeeId = this.originTypes[e.target.value]

    this.props.onEmployeeChange(employeeId)
  }
  
  renderModal = () => {
    return (
      <Modal
        visible={this.state.visible}
        title={this.props.customer.name}
        onCancel={this.handleCancel}
        width="800px"
        footer={[
          <Button key="back" onClick={this.handleCancel}>Voltar</Button>,
          <Button key="submit" onClick={this.handleOk} type="primary" >Salvar</Button>,
        ]}
      >

      <Collapse bordered={false} >
        {
          this.props.listCalls.map(item =>(
          <Panel header={`Tipo: ${item.tipo} - Data Atendimento: ${moment(item.data_atendimento).format('DD/MM/YYYY')}`} key={item.id}>
            <div className="content-calls" onClick={() => this.handleSelected(item)}>
              <div className="info-call">
                <div className="call">
                  <span className="info-label">Tecnico:</span> {item.tecnico.nome ? item.tecnico.nome : 'Atendimento não está associado!'}
                </div>

                <div className="call">
                  <span className="info-label">Modelo Do Equipamento:</span> {item.modelo_equipamento}
                </div>

                <div className="call">
                  <span className="info-label">Descrição:</span> {item.descricao}
                </div>

                <div className="call">
                  <span className="info-label">Observação:</span> {item.observacao}
                </div>
              </div>
                { this.state.callSelected && this.state.callSelected._id === item._id ? 
                  <div className="info-icon">
                    <Icon type="check" />
                  </div> : ''
                }
              

            </div>
         </Panel>))
        }
      </Collapse>

      </Modal>
    )
  }

  render() { 
    const { form: { getFieldDecorator }, stockLocations, handleGetCustomerByCnpj } = this.props
    return (  
      <div className="wrapperNewReserve">
      <h1>Criar Nova Reserva</h1>
      <Form layout="inline">
        <div className="sectionLabel">
          <h3>Dados Cliente</h3>
        </div>
        <FormItem label="Cnpj">
          {
            getFieldDecorator(
              'cnpj',
              {
                rules: [{
                  required: true,
                  message: 'Preecha o cnpj!'
                }]
              }
            )(<Input style={{ width: 200 }} onBlur={(e) => handleGetCustomerByCnpj(e.target.value)}/>)
          }
        </FormItem>
        <FormItem label="Razão Social">
        {
          getFieldDecorator(
            'socialName',
            {
              rules: [{
                required: true,
                message: 'Preecha a razão social!'
              }]
            }
          )(<Input style={{ width: 500 }}/>)
        }
        </FormItem>
        <div className="sectionLabel">
          <h3>Tipo</h3>
        </div>

        <FormItem label="Tipo">
        {
          getFieldDecorator(
            'originType',
            {
              rules: [{
                required: true,
                message: 'Selecione o tipo da reserva!',
              }]
            }
          )(
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="atendimento" onClick={this.showModal}> Atendimento</Radio.Button>
            <Radio.Button value="correio" onClick={this.handleEmployeeIdChange}> Correio</Radio.Button>
            <Radio.Button value="cliente-retira" onClick={this.handleEmployeeIdChange}> Cliente Retira</Radio.Button>
            <Radio.Button value="mercado-livre" onClick={this.handleEmployeeIdChange}> Mercado Livre</Radio.Button>
          </Radio.Group>
          )
        }
      </FormItem>
      {this.props.selectedEmployeeId === '5c24d195304f150001e937b3' && <FormItem label="Codigo de Rastreamento">
        {
          getFieldDecorator(
            'trackingCode',
            {
              rules: [{
                required: true,
                message: 'Por favor digite o codigo de rastreamento'
              }]
            }
          )(<Input style={{ width: 200 }} />)
        }
      </FormItem>}

      { 
        this.props.selectedCall && <div><h1>Atendimento Associado!</h1></div>
      }

      <div className="sectionLabel">
        <h3>Estoque</h3>
      </div>

      <FormItem label="Estoque">
        {
          getFieldDecorator(
            'stockLocationId',
            {
              rules: [{
                required: true,
                message: 'Selecione o estoque da reserva!',
              }]
            }
          )(
            <Radio.Group buttonStyle="solid">
    
              {
                stockLocations.map(
                location =>
                <Radio.Button 
                  key={location.id} 
                  value={location.id}>
                    {location.name}
                </Radio.Button>
                )
              }

            </Radio.Group >
          )
        }
      </FormItem>

      </Form>

      {this.renderModal()}
    </div>
    );
  }
}
 
export default Form.create()(ReserveProductForm)