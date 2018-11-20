import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
import { Route, Switch } from 'react-router-dom'

import SideMenu from '../../Containers/SideMenu'

import Home from '../Home'
import Products from  './Products'
import Orders from './Orders'
import Stock from './Stock'

import route from './route'

const { Header, Content, Footer } = Layout


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
              <Route path="/products" component={Products}/>
              <Route path="/orders" component={Orders}/>
              <Route path="/stock" component={Stock}/>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            BlackAtom ©2018 Created by Connecta Dash
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Logged;