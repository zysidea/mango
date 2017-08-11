import React from 'react';
import { Layout, Menu, Icon, Switch } from 'antd';
import Header from '../header/header';
import Footer from '../footer/footer';

import avatar from '../../images/avatar.png';
import './app.css';

const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      collapsed: false,
      mode: 'inline'
    };
    this.toggle = this.toggle.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme=(value) => {
    this.setState({
      theme: value ? 'dark' : 'light'
    });
  };


  toggle=() => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical'
    });
  };


  render() {
    return (
      <Layout className="container">
        <Sider
          trigger={null}
          collapsible
          onCollapse={this.onCollapse}
          collapsed={this.state.collapsed}
        >
          {/* logo */}
          <div className="logo" >
            <img src={avatar} alt="" />
            <span className="name">zys</span>
          </div>
          {/* menu */}
          <Menu
            className="menu"
            theme={this.state.theme}
            mode={this.state.mode}
            inlineCollapsed={this.state.collapsed}
            defaultSelectedKeys={['home']}
            defaultOpenKeys={['']}
          >

            <Menu.Item key="welcome">
              <Icon type="home" />
              <span className="welcome">首页</span>
            </Menu.Item>

            <SubMenu key="content" title={<span><Icon type="edit" /><span className="nav-text">内容管理</span></span>}>
              <Menu.Item key="music">
                <span className="music">音乐系列</span>
              </Menu.Item>
              <Menu.Item key="movie">
                <span className="movie">电影系列</span>
              </Menu.Item>
              <Menu.Item key="diary">
                <span className="diary">日记系列</span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="tool" title={<span><Icon type="tool" /><span className="nav-text">实用工具</span></span>}>
              <Menu.Item key="wage">
                <span className="wage">工资计算器</span>
              </Menu.Item>
              <Menu.Item key="body">
                <span className="body">身体指数</span>
              </Menu.Item>
              <Menu.Item key="md5">
                <span className="md5">MD5计算器</span>
              </Menu.Item>
            </SubMenu>
          </Menu>

          <div className="switch">
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </Sider>

        <Layout>
          <Header toggle={this.toggle} collapsed={this.state.collapsed} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial', minHeight: 1000 }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }} />
          </Content>
          <Footer />
        </Layout>

      </Layout>
    );
  }
}
