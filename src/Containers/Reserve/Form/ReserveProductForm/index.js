import React, { Component } from 'react'
import { Button, Form, AutoComplete, InputNumber } from 'antd'

const FormItem = Form.Item
const AutoCompleteOption = AutoComplete.Option

class ReserveProductForm extends Component {
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
    const { form: { getFieldDecorator }, products  } = this.props
    const { productSearch } = this.state

    const filteredProducts = productSearch.length < 1 ? products
      : products.filter(({ name }) => {
        const upperCaseName = productSearch.toUpperCase()
        return name.includes(upperCaseName)
      })

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <div className="sectionLabel">
          <h3>Produto Reserva</h3>
        </div>
        <FormItem label="Nome do Produto">
              {getFieldDecorator('product', {
                initialValue: '',
                rules: [{ required: true, message: 'Preecha o nome do produto!' }],
              })(
                <AutoComplete
                  style={{ width: 500 }}
                  onSelect={this.handleOnSelect}
                  onSearch={this.handleSearch}
                  placeholder="Buscar produto aqui"
                >
                  {filteredProducts.map(product => (<AutoCompleteOption
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
    );
  }
}

export default Form.create()(ReserveProductForm)