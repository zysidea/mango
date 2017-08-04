import React from 'react';
import { Layout, Menu, Icon } from 'antd';

import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Sider className="sider">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['welcome']}>

            <Menu.Item key="welcome">
              <Icon type="home" />
              <span className="welcome">欢迎页</span>
            </Menu.Item>

            <SubMenu key="content" title={<span><Icon type="edit" />内容管理</span>}>
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
            <SubMenu key="tool" title={<span><Icon type="tool" />实用工具</span>}>
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
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} />

          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }} />
          </Content>

          <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2017 Created by ZYSIDEA
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
