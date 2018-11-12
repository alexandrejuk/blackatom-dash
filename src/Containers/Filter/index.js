import React, { PureComponent } from 'react'
import {
  Card,
  DatePicker,
  Input,
  Button
} from 'antd'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './styles.css'

const { RangePicker } = DatePicker

const FilterHeader = ({ onShowMore, collapsed }) => <div className="cartTitle">
  <RangePicker />
  <Input style={{ width: "200px"}}/>
  <Button type="primary" icon={collapsed ? 'down' : 'up'} onClick={onShowMore}> Mais Filtros </Button>
</div>

class Filter extends PureComponent {
  state = {
    collapsed: false,
  }

  handleOnShowMore = () => {
    console.log(this.state.collapsed)
    this.setState((state) => ({
      collapsed: !state.collapsed
    }))
  }

  render () {
    const { filters } = this.props
    const cardClasses = classnames({
      cardCollapsed: this.state.collapsed
    })

    return (<div>
      <Card
        title={<FilterHeader onShowMore={this.handleOnShowMore} collapsed={this.state.collapsed}/>}
        className={cardClasses}
        style={{ width: '100%' }}
      >
      {filters.map(filter => (
        <div className="input-group" key={filter.property} >
          <label className="label-filter">{filter.label} </label>
          <Input 
            style={{ width: filter.width }}
            type={filter.type}
          />
        </div>
      ))}
      </Card>
    </div>)
  }
} 

Filter.propTypes = {
  filters: PropTypes.array.isRequired
}

export default Filter