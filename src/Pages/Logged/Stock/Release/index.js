import React, { Component } from 'react'
import ReleaseContainer from '../../../../Containers/Release/'
import reserveService from '../../../../services/reserve'

class Release extends Component {
  state = {
    productReservationList: [],
  }

  handleSubmit = async (item) => {
    await reserveService.updateProductReservation(item)

    this.fetchList()
  }

  fetchList = async () => {
    const {
      data: productReservationList,
    } = await reserveService.getAllProductReservation()

    this.setState({
      productReservationList,
    })
  }

  componentDidMount() { 
    this.fetchList()
  }

  handleHistoryDelete = async (id) => {
    await reserveService.deleteReservationHistory(id)
    this.fetchList()
  }

  render() { 
    return (
      <ReleaseContainer
        handleSubmit={this.handleSubmit}
        handleHistoryDelete={this.handleHistoryDelete}
        productReservationList={this.state.productReservationList}
      />
    )
  }
}
 
export default Release