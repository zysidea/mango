import React from 'react';
import { Layout, Menu, Icon, Switch } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import Header from './header/header';
import Content from './contents/contents';
import Footer from './footer/footer';


import avatar from '../images/avatar.png';
import './index.css';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      collapsed: false,
      current: 'home',
      mode: 'inline'
    };
  }

  componentDidMount() {
    this.handleClick([], 'home');
  }

  changeTheme=(value) => {
    this.setState({
      theme: value ? 'dark' : 'light'
    });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    });
  };

  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    });
  };


  logOut=() => {

  };


  render() {
    return (
      <Layout className="container">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >

          <div className="logo" >
            <img src={avatar} alt="" />
            <span className="name">zys</span>
          </div>

          <Menu
            theme={this.state.theme}
            defaultOpenKeys={['home']}
            className="menu"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode={this.state.mode}
          >

            <Menu.Item key="home">
              <Link to="/home">
                <Icon type="home" />
                {!this.state.collapsed && <span className="home">首页</span>}
              </Link>
            </Menu.Item>

            <SubMenu key="content" title={<span><Icon type="edit" />{!this.state.collapsed && <span>内容管理</span>}</span>}>
              <Menu.Item key="music">
                <Link to="/music"><span className="music">音乐系列</span></Link>
              </Menu.Item>
              <Menu.Item key="movie">
                <span className="movie">电影系列</span>
              </Menu.Item>
              <Menu.Item key="diary">
                <span className="diary">日记系列</span>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="tool" title={<span><Icon type="tool" />{!this.state.collapsed && <span>实用工具</span>}</span>}>
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
          <Header toggle={this.toggle} logOut={this.logOut} collapsed={this.state.collapsed} />
          <Content />
          <Footer />
        </Layout>

      </Layout>
    );
  }
}
export default withRouter(Container);
