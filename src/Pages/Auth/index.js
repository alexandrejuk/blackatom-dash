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

  componentDidUpdate(){
     this.checkToken()
  }

  componentDidMount(){
    this.checkToken()
  }

  checkToken = () => {
    const search = this.props.location.search
    const params = new URLSearchParams(search)
    const token = params.get('token')
    
    if (token) {
      this.setTokenAndRedirect(token)
    }
  }

  setTokenAndRedirect = (token) => {
    localStorage.setItem('token', token)

    window.location.href = '/#/logged'
  }

  handleLogin = (data) => {
    this.setState({
      loading: true,
    }, async () => {
      try {
        const response = await axios.post('http://165.227.78.113:3000/login', data).then(r => r.data)
        
        this.setTokenAndRedirect(response.token)
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