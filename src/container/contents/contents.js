import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import Home from '../../pages/home/index';
import Music from '../../pages/content/music/index';

import './contents.css';

const { Content } = Layout;

export default class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Route path="/home" component={Home} />
        <Route path="/music" component={Music} />
      </Content>
    );
  }
}
