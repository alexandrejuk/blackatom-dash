import React, { Component } from 'react'
import { Input, Button } from 'antd'
import './styles.css'

const InputSearch = Input.Search
class Search extends Component {
  state = {
    search: ''
  }

  onChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  clean = () => {
    this.setState({ search: '' }, this.onSearch)
  }

  onSearch = () => {
    this.props.onSearch({
      global: {
        fields: this.props.globalFields,
        value: this.state.search
      }
    })
  }
  
	render()  {
    const {
      placeholder,
    } = this.props

    return (  
      <div className="wrapperInputSearch">
        <InputSearch
          placeholder={placeholder}
          onChange={this.onChange}
          value={this.state.search}
        />
        <Button className="margin-sides10" onClick={this.clean}>
          LIMPAR
        </Button>
        <Button type="primary" onClick={this.onSearch}>
          FILTRAR
        </Button>
      </div>
    ) 
  }
}

export default Search