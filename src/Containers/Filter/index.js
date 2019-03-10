import React, { Component } from 'react'
import { Input, Button } from 'antd'
import './styles.css'
import * as R from 'ramda'

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
    let filters = {}

    for(const modelName in this.props.global) {
      const modelFields = this.props.global[modelName]
      console.log(modelFields)
      const setGlobal = R.lensPath([modelName, 'global']);
      const global = {
        fields: modelFields,
        value: this.state.search,
      }
  
      filters = R.set(setGlobal, global, filters)
    }

    console.dir(filters)
    this.props.onSearch(filters)
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