import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class IndividualProductForm extends Component {
  componentDidMount(){
    this.props.form.setFieldsValue(this.props.initialValue || {})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values)
      }
    });
  }

  render() {
    const { form: { getFieldDecorator }, actionLabel  } = this.props
    return (
      <Form
        onSubmit={this.handleSubmit}
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
          label="N. Serial"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('serialNumber', {
            rules: [{ required: true, message: 'Preecha o Serial!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <Button type="primary" htmlType="submit">
            {actionLabel}
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(IndividualProductForm)