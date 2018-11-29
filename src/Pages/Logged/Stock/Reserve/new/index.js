import React, { Component } from 'react'
import './index.css'
import { Radio, Button, Form, Input } from 'antd'

const FormItem = Form.Item

class NewReserve extends Component {

  render() { 
    return (
      <div className="wrapperNewReserve">
        <h1>Criar Nova Reserva</h1>
        <Form layout="inline">
  
          <div className="sectionLabel">
            <h3>Dados Cliente</h3>
          </div>
          <FormItem
            label="Cnpj">
            <Input style={{ width: 200 }}/>
          </FormItem>
          <FormItem
            label="Razão Social">
            <Input style={{ width: 500 }}/>
          </FormItem>
          <div className="sectionLabel">
            <h3>Tipo de Reserva</h3>
          </div>
          <FormItem
            label="Selecione o Tipo">
            <Radio.Group defaultValue="" buttonStyle="solid">
              <Radio.Button value="d">Atendimento</Radio.Button>
              <Radio.Button value="a">Correios</Radio.Button>
              <Radio.Button value="c">Cliente Retira</Radio.Button>
              <Radio.Button value="b">Mercado Livre</Radio.Button>
              <Radio.Button value="e">Laboratório</Radio.Button>
            </Radio.Group>
          </FormItem>
          <div className="sectionLabel">
            <h3>Produto Reserva</h3>
          </div>   
          <FormItem
            label="Produto">
            <Input style={{ width: 500 }}/>
          </FormItem>
          <FormItem
            label="Quantidade">
            <Input style={{ width: 100 }}/>
          </FormItem>
          <FormItem>
            <Button>Adicionar</Button>
          </FormItem>
        </Form>

        <div className="sectionLabel product-reserve">
          <h3>Produtos Selecionados</h3>
        </div>

        <div className="card-product-reserve">
          <div className="card-product-reserve-title">
            <h3 className="no-margin title-card">PRISMA SF RO2</h3>
            <p className="no-margin subtitle-card">HENRY</p>
          </div>
          <div className="card-product-reserve-title">
            <h3 className="no-margin title-card">5 UN</h3>
          </div>
          <div className="card-product-reserve-title">
            <Button className="buttonRemoveItem" type="danger">Remover</Button>
          </div>
        </div>

        <div className="card-product-reserve">
          <div className="card-product-reserve-title">
            <h3 className="no-margin title-card">PRISMA SF RO2</h3>
            <p className="no-margin subtitle-card">HENRY</p>
          </div>
          <div className="card-product-reserve-title">
            <h3 className="no-margin title-card">5 UN</h3>
          </div>
          <div className="card-product-reserve-title">
            <Button className="buttonRemoveItem" type="danger">Remover</Button>
          </div>
        </div>
      </div>
    )
  }
}
 
export default Form.create()(NewReserve)