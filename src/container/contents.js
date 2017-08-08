import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';


import './css/contents.css';

const { Content } = Layout;

export default class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Route path="/content" />
      </Content>
    );
  }
}
