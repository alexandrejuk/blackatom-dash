import React, { Component } from 'react'
import LoginContainer from '../../Containers/Login'
import axios from 'axios'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  handleLogin = (data) => {
    this.setState({
      loading: true,
    }, async () => {
      try {
        const response = await axios.post('http://165.227.78.113:3000/login', data).then(r => r.data)
        
        localStorage.setItem('token', response.token)

        window.location.href = '/#/logged'
      } catch (error) {
        this.setState({
          loading: false,
        })
      }
    })
  }

  render() { 
    return (<LoginContainer
      onSubmit={this.handleLogin}
      loading={this.state.loading}
    />)
  }
}
 
export default Auth;