import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import ListContainerReserve from '../../../../../Containers/Reserve/List'
import ReserveService from '../../../../../services/reserve'

import './index.css'

class ReservedList extends Component {
  reserveService = null

  state = { 
    reservedList: [],
    count: 0,
    currentPage: 1,
    filters: {},
  }

  async componentDidMount(){
    this.reserveService = new ReserveService()
    this.getReservations()
  }

  getReservations = async (page = 1, filters = {}) => {
    const { data: reservedListRes } = await this.reserveService.getAll(page, filters)

    console.log(reservedListRes)
    this.setState({
      reservedList: reservedListRes.rows,
      count: reservedListRes.count,
      currentPage: page,
      filters,
    })
  }

  onPaginationChange = (page, total) => {
    this.getReservations(page, this.state.filters)
  }

  onSearch = (filters) => {
    this.getReservations(1, filters)
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
          <ListContainerReserve
            reservedList={this.state.reservedList}
            onPaginationChange={this.onPaginationChange}
            onSearch={this.onSearch}
            currentPage={this.state.currentPage}
            count={this.state.count}
          />
        </div>
      </div>
    )
  }
}
 
export default ReservedList