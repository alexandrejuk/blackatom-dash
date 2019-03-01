import React, { Component } from 'react'
import { Form, AutoComplete, InputNumber, Button } from 'antd'

const FormItem = Form.Item
const AutoCompleteOption = AutoComplete.Option

class OrderProductForm extends Component {
  state = {
    productSearch: '',
    selectedProduct: null,
  }

  handleOnSelect = (selectedProduct) => {
    this.setState({
      selectedProduct: JSON.parse(selectedProduct),
    })
  }
  
  handleSearch = (productSearch) => {
    this.setState({
      productSearch,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit({
          ...values,
          product: this.state.selectedProduct,
        })
      }
    });
  }

  render() {
    const {
      form: { getFieldDecorator },
      products,
      onProductSearch,
    } = this.props

    return (
      <div>
        <div className="titleOrderProducts">
          <h2>Produtos da Compra</h2>
        </div>
        <Form layout="inline" onSubmit={this.handleSubmit}>

            <FormItem label="Nome do Produto">
              {getFieldDecorator('product', {
                initialValue: '',
                rules: [{ required: true, message: 'Preecha o nome do produto!' }],
              })(
                <AutoComplete
                  style={{ width: 500 }}
                  onSelect={this.handleOnSelect}
                  onSearch={onProductSearch}
                  placeholder="Buscar produto aqui"
                >
                  {products.map(product => (<AutoCompleteOption
                    key={product.id}
                    value={JSON.stringify(product)}
                  >
                    {product.name}
                  </AutoCompleteOption>))}
                </AutoComplete> 
              )}
            </FormItem>      
        
            <FormItem label="Quantidade">
              {getFieldDecorator('quantity', {
                initialValue: 1,
                rules: [{ required: true, message: 'Preecha a quantidade do produto!' }],
              })(
                <InputNumber style={{ width: 100 }} min={1} max={999999999} defaultValue={3}/>
              )}
            </FormItem>

            <FormItem>
              <Button htmlType="submit">Adicionar</Button> 
            </FormItem>
          </Form>
      </div>
    )
  }
}

export default Form.create()(OrderProductForm)