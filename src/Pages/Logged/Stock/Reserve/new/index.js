import React, { Component } from 'react'
import './index.css'
import { Steps, Button, Form, Select, Input  } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const Step = Steps.Step

const customDot = (dot) => dot

class NewReserve extends Component {
  state = {
    current: 2,
  }
  
  renderFormClient = () => (
    <Form layout="inline">
      <FormItem label="Cnpj/Cpf">
        <Input style={{ width: 500 }} />
      </FormItem>
      <FormItem label="Razão Social/Nome">
        <Input style={{ width: 500 }} />
      </FormItem>
      <FormItem>
        <Button onClick={this.handleNextStep}>Anvançar</Button>
      </FormItem>
    </Form>
  )
  
  renderFormProduct = () => (
    <Form layout="inline">
      <FormItem label="Cnpj/Cpf">
        <Input style={{ width: 500 }} />
      </FormItem>
      <FormItem label="Razão Social/Nome">
        <Input style={{ width: 500 }} />
      </FormItem>
      <FormItem>
        <Button onClick={this.handlePrevStep}>Voltar</Button>
      </FormItem>
      <FormItem>
        <Button onClick={this.handleNextStep}>Anvançar</Button>
      </FormItem>
    </Form>
  )
  
  renderFormCategory = () => (
    <Form layout="inline">
      <FormItem label="Tipo">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Selecione o tipo"
          optionFilterProp="children"
          filterOption={
            (input, option) => 
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
          }
        >
         <Option value="Atendimento">Atendimento</Option>
         <Option value="Correios">Correios</Option>
         <Option value="Cliente Retira">Cliente Retira</Option>
         <Option value="Mercado Livre">Mercado Livre</Option>
        </Select>
      </FormItem>
 
      <FormItem>
        <Button onClick={this.handlePrevStep}>Voltar</Button>
      </FormItem>
      <FormItem>
        <Button onClick={this.handleNextStep}>Anvançar</Button>
      </FormItem>
    </Form>
  )

  renderReserveDetail = () => (
    <div>
      <h1>Detail</h1>
      <Button onClick={this.handlePrevStep}>Voltar</Button>
    </div>
  )

  steps = [
    this.renderFormClient, 
    this.renderFormCategory,
    this.renderFormCategory,
    this.renderReserveDetail,
  ]
      
  handlePrevStep = () => {
    this.setState({ current: this.state.current - 1 })
  }

  handleNextStep = () => {
    this.setState({ current: this.state.current + 1 })
  }

  render() { 
    return (
      <div className="wrapperNewReserve">
        <h1>Crir nova reserva</h1>
        <Steps current={this.state.current} progressDot={customDot}>
          <Step title="Cliente" description="Dados do cliente"/>
          <Step title="Reserva" description="Tipo da reserva"/>
          <Step title="Produtos" description="Adicionar produtos na reserva"/>
          <Step title="Resumo" description="Detalhes da reserva"/>
        </Steps>
        <div className="steps-content">
          { this.steps[this.state.current]() }
        </div>
      </div>
    )
  }
}
 
export default Form.create()(NewReserve)