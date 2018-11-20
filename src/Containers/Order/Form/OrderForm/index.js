import React, { Component } from 'react'
import { Form, Select, Input } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

class OrderForm extends Component {
  render() {
    const { form: { getFieldDecorator }, stockLocations  } = this.props
    return (
      <Form layout="inline">
        <FormItem label="Descrição">
          {
            getFieldDecorator(
              'description',
              {
                rules: [{
                  required: true,
                  message: 'Preecha a descrição da compra!'
                }]
              }
            )(<Input style={{ width: 500 }} />)
          }
        </FormItem>
        <FormItem label="Estoque">
          {
            getFieldDecorator(
              'stockLocation',
              {
                rules: [{
                  required: true,
                  message: 'Selecione o estoque da compra!'
                }]
              }
            )(
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={
                  (input, option) => 
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                }
              >
                {
                  stockLocations.map(
                    location =>
                      <Option 
                        key={location.id} 
                        value={location.id}>
                          {location.name}
                      </Option>
                  )
                }

              </Select>
            )
          }
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(OrderForm)