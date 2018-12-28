import React, { Component } from 'react'
import ReleaseContainer from '../../../../Containers/Release/'
import reserveService from '../../../../services/reserve'
import technicalService from '../../../../services/technical'

class Release extends Component {
  state = {
    productReservationList: [],
    technical: [],
  }

  handleSubmit = async (item) => {
    await reserveService.updateProductReservation(item)
  }

  fetchList = async (employeeId) => {
    const {
      data: productReservationList,
    } = await reserveService.getAllProductReservation(employeeId)

    this.setState({
      productReservationList,
    })
  }

  componentDidMount() { 
    this.getTechnical()
  }

  handleHistoryDelete = async (id) => {
    await reserveService.deleteReservationHistory(id)
  }

  async getTechnical() {
    const technical = await technicalService.getListTechnical()
      .then(response => response.data.funcionarios)
    
    this.setState({ technical })
  }

  render() { 
    return (
      <ReleaseContainer
        technical={this.state.technical}
        handleSubmit={this.handleSubmit}
        handleHistoryDelete={this.handleHistoryDelete}
        fetchList={this.fetchList}
        productReservationList={this.state.productReservationList}
      />
    )
  }
}
 
export default Release