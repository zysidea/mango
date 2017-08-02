import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import './NavBar.css';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar id="navbar" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">网站后台管理</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">用户名</NavItem>
            <NavItem eventKey={2} href="#">修改密码</NavItem>
            <NavItem eventKey={2} href="#">登出</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
