import { Row, Col, Card, Icon, Timeline } from 'antd';
import React from 'react';
import Chart from './chart';

import './index.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row gutter={8} className="row">
          <Col span={6} className="col-a">
            <Card className>
              <Icon type="play-circle" className="home-icon" />
              <div>
                <p>音乐</p>
                <p>123</p>
              </div>
            </Card>
            <Card>
              <Icon type="video-camera" className="home-icon" />
              <div>
                <p>电影</p>
                <p>456</p>
              </div>
            </Card>
          </Col>
          <Col span={6} className="col-a">
            <Card>
              <Icon type="edit" className="home-icon" />
              <div>
                <p>日记</p>
                <p>789</p>
              </div>
            </Card>
            <Card>
              <Icon type="share-alt" className="home-icon" />
              <div>
                <p>分享</p>
                <p>101112</p>
              </div>
            </Card>
          </Col>
          <Col span={12} className="col-b">
            <Card>
              <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>
        <Row gutter={8}>

          <Col span={12} className="col-c">
            <div className="visit">
              <Card title="访问量统计" extra={<Icon type="reload" />}>
                <div className="visit-chart">
                  <Chart />
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
