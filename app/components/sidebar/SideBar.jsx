import React from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import './SideBar.css';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="container">
        <Tab.Container id="sidebar" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={4}>
              <Nav bsStyle="pills" stacked>
                <h3>内容管理</h3>
                <NavItem className="navitem" eventKey="add-cate">添加分类</NavItem>
                <NavItem className="navitem" eventKey="cate-list">分类列表</NavItem>
                <NavItem className="navitem" eventKey="add-article">添加文章</NavItem>
                <NavItem className="navitem" eventKey="article-list">文章列表</NavItem>
                <h3>系统设置</h3>
                <NavItem className="navitem" eventKey="friend-link">友情链接</NavItem>
                <NavItem className="navitem" eventKey="cus-nav">自定义导航</NavItem>
                <NavItem className="navitem" eventKey="web-set">网站配置</NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>
                <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
