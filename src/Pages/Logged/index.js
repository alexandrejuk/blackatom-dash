import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Products from  './Products'
import Orders from './Orders'

const { Header, Sider, Content } = Layout

class Logged extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  renderSide = () => (
    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Icon type="user" />
        <span>nav 1</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span>nav 2</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span>nav 3</span>
      </Menu.Item>
    </Menu>
  </Sider>
  )

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
        {this.renderSide()}
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