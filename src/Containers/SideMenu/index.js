
import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const { Sider} = Layout
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item

class SideMenu extends Component {
  renderMenuItem = ({ title, path, iconType, subRoutes }) => {
    if (subRoutes) {
      return (
        <SubMenu
          key={title}
          title={<span><Icon type={iconType} /><span>{title}</span></span>}>
          {subRoutes.map(this.renderMenuItem)}
        </SubMenu>
      )
    }

    return (
      <MenuItem key={path}>
        <Link key={path} to={path}>
          {iconType && <Icon type={iconType} />}
          <span>{title}</span>
        </Link>
      </MenuItem>
    )
  }

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {this.props.route.map(this.renderMenuItem)}
        </Menu>
      </Sider>
    )
  }
}

export default SideMenu
