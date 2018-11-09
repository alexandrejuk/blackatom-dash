import React from 'react'
import { Form, Switch, Input, Button, InputNumber } from 'antd';

const FormItem = Form.Item;

class NewProduct extends React.Component {
  componentDidMount(){
    this.props.form.setFieldsValue(this.props.initialValue || {})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.submit(values)
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        onSubmit={this.handleSubmit}
        ini
      >
        <FormItem
          label="Nome"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Preecha o nome!' }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          label="Fabricante"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('brand', {
            rules: [{ required: true, message: 'Preecha o fabricante!' }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          label="Categoria"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('category', {
            rules: [{ required: true, message: 'Preecha o categoria!' }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          label="SKU"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('sku', {
            rules: [{ required: true, message: 'Preecha o SKU!' }],
          })(
            <Input />
          )}
        </FormItem>
        
        <FormItem
          label="Tem Serial Number"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('hasSerialNumber', {
            valuePropName: 'checked',
            rules: [{ required: true, message: 'Esse produto tem serial number?' }],
          })(
            <Switch />
          )}
        </FormItem>

        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          label="Preco de Compra"
        >
          {getFieldDecorator('priceBuy', { 
            initialValue: 0,
            rules: [{ required: true, message: 'Preecha o valor de compra!' }],
          })(
            <InputNumber />
          )}
        </FormItem>

        <FormItem
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          label="Preco de Venda"
        >
          {getFieldDecorator('priceSell', {
            initialValue: 0,
            rules: [{ required: true, message: 'Preecha o valor de venda!' }],
          })(
            <InputNumber />
          )}
        </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(NewProduct)