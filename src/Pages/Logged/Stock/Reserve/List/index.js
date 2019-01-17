import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import ListContainerReserve from '../../../../../Containers/Reserve/List'
import ReserveService from '../../../../../services/reserve'

import './index.css'

class ReservedList extends Component {
  reserveService = null

  state = { 
    reservedList: []
  }

  async componentDidMount(){
    this.reserveService = new ReserveService()
    const { data: reservedList } = await this.reserveService.getAll()
    
    this.setState({ reservedList })
  }

  render() { 
    return (
      <div className="wrapperReserved">
        <div className="reservedListHeader">
          <h1>Gerenciar Reservas</h1>
            <Link className="linkNav" to={'/logged/stock/reserve/new'}>
              <Button  type="primary"> Nova </ Button>
            </Link>
        </div>
        <div className="reservedListContent">
          <ListContainerReserve reservedList={this.state.reservedList} />
        </div>
      </div>
    )
  }
}
 
export default ReservedList