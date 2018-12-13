import React, { Component, Fragment } from 'react'
import { Radio, Form, Input } from 'antd'

const FormItem = Form.Item

class ReserveProductForm extends Component {
    render() { 
      const { form: { getFieldDecorator }, stockLocations  } = this.props
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
              )(<Input style={{ width: 200 }} />)
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
            )(<Input style={{ width: 500 }} />)
          }
          </FormItem>
          <div className="sectionLabel">
            <h3>Estoque</h3>
          </div>
          <FormItem  label="Selecione o Estoque">
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
            </Radio.Group>
          </FormItem>
  
        </Form>


      </div>
			);
    }
}
 
export default Form.create()(ReserveProductForm)