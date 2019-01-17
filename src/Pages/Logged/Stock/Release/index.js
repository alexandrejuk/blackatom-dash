import React, { Component } from 'react'
import ReleaseContainer from '../../../../Containers/Release/'
import ReserveService from '../../../../services/reserve'
import TechnicalService from '../../../../services/technical'

class Release extends Component {
  reserveService = null
  technicalService = null

  state = {
    productReservationList: [],
    technical: [],
  }

  handleSubmit = async (item) => {
    await this.reserveService.updateProductReservation(item)
  }

  fetchList = async (employeeId) => {
    const {
      data: productReservationList,
    } = await this.reserveService.getAllProductReservation(employeeId)

    this.setState({
      productReservationList,
    })
  }

  componentDidMount() { 
    this.reserveService = new ReserveService()
    this.technicalService = new TechnicalService()

    this.getTechnical()
  }

  handleHistoryDelete = async (id) => {
    await this.reserveService.deleteReservationHistory(id)
  }

  async getTechnical() {
    const technical = await this.technicalService.getListTechnical()
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