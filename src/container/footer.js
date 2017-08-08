import React from 'react';
import { Layout } from 'antd';

import './css/footer.css';

const { Footer } = Layout;

export default class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick =() => {
    this.setState({
      times: this.state.times + 1
    });
  };

  render() {
    return (
      <Footer className="footer">
        <div className="text">
          ©2017 ZYS 您已经在本站停留了 <span className="times">{this.state.times}</span> 秒
        </div>
      </Footer>
    );
  }
}

