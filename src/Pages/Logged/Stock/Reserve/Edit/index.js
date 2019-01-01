import React, { Component } from 'react'
import ReserveService from '../../../../../services/reserve'
import ReservationEditContainer from '../../../../../Containers/Reserve/Edit'

class ReservationEdit extends Component {
  reserveService = null 

  state = {
    reservation: null,
    loading: true,
  }

  async componentDidMount() {
    this.reserveService = new ReserveService()
    const reservationId = this.props.match.params.id
    const { data: reservation } = await this.reserveService.getById(reservationId)

    this.setState({
      loading: false,
      reservation,
    })
  }

  render() {
    return this.state.reservation && <ReservationEditContainer
      reservation={this.state.reservation}
      loading={this.state.loading}
    />
  }
}

export default ReservationEdit
