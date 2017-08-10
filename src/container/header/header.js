import React from 'react';
import { Layout, Icon, Menu } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './header.css';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'zys'
    };
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }

  handleLogOutClick(item) {
    if (item.key === 'logOut') {
      this.props.logOut();
    }
  }


  render() {
    return (
      <Header className="header">
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
        <Menu className="logOut" mode="horizontal" onClick={this.handleLogOutClick}>
          <SubMenu title={<span> <Icon type="user" />{this.state.username} </span>}>
            <Menu.Item key="logOut">
              <Link className="link" to={''}>退出</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}

Top.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired
};

