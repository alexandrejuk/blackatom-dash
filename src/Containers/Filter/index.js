import React, { PureComponent } from 'react'
import {
  Card,
  DatePicker,
  Input,
  Button
} from 'antd'
import classnames from 'classnames'
import './styles.css'

const { RangePicker } = DatePicker

const FilterHeader = ({ onShowMore }) => <div>
  <RangePicker />
  <Input style={{ width: "200px"}}/>
  <Button onClick={onShowMore}> Mais </Button>
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
    const cardClasses = classnames({
      cardCollapsed: this.state.collapsed
    })

    return (<div>
      <Card
        title={<FilterHeader onShowMore={this.handleOnShowMore}/>}
        className={cardClasses}
        style={{ width: '100%' }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>)
  }
} 

export default Filter