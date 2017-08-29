import React from 'react';
import ECharts from 'echarts-for-react';

import option from './data/chartData';

export default class chart extends React.Component {
  render() {
    return (
      <ECharts
        option={option}
      />
    );
  }
}
