import React, { Component } from 'react'
import reserveService from '../../../../../services/reserve'
import ReservationEditContainer from '../../../../../Containers/Reserve/Edit'

class ReservationEdit extends Component {
  state = {
    reservation: null,
    loading: true,
  }

  async componentDidMount() {
    const reservationId = this.props.match.params.id
    const { data: reservation } = await reserveService.getById(reservationId)

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
