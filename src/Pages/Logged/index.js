import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Products from  './Products'
import Orders from './Orders'
import SideMenu from '../../Containers/SideMenu'
import route from './route'

const { Header, Content } = Layout


class Logged extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  renderHeader = () => (
    <Header style={{ background: '#fff', padding: 0 }}>
    <Icon
      className="trigger"
      type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={this.toggle}
    />
  </Header>
  )
  render() {
    return (
      <Layout style={{overflow: 'inital', minHeight: '100vh'}}>
        <SideMenu collapsed={this.state.collapsed} route={route}/>
        <Layout>
          {this.renderHeader()}
          <Content 
            style={{ 
              margin: '24px 16px', 
              padding: 24, 
              background: '#fff', 
              minHeight: 280 
              }}
          >
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/products" component={Products}/>
              <Route path="/orders" component={Orders}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Logged;