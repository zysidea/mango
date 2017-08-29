import moment from 'moment';
import echarts from 'echarts';

const dateArray = [];
for (let i = 0; i <= 7; i++) {
  dateArray.push(moment(new Date() - (7 - i) * 24 * 3600 * 1000).format('YYYY-MM-DD'));
}
const option = {
  // 标题
  title: {
    text: '最近7天用户访问量',
    left: '50%',
    show: false,
    textAlign: 'center'
  },
  // 提示框
  tooltip: {
    // 坐标轴触发
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#ddd'
      }
    },
    backgroundColor: 'rgba(255,255,255,1)',
    padding: [5, 10],
    textStyle: {
      color: '#7588E4',
    },
    extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
  },
  // 图例
  legend: {
    right: 20,
    orient: 'vertical',
  },
  // 坐标系的X轴
  xAxis: {
    type: 'category',
    data: dateArray,
    boundaryGap: false,
    splitLine: {
      show: true,
      interval: 'auto',
      lineStyle: {
        color: ['#D4DFF5']
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#609ee9'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 10
      }
    }
  },
  // 坐标系的Y轴
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: ['#D4DFF5']
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#609ee9'
      }
    },
    axisLabel: {
      margin: 0,
      textStyle: {
        fontSize: 8
      }
    }
  },
  series: [{
    name: 'pv',
    type: 'line',
    smooth: true,
    showSymbol: false,
    symbol: 'circle',
    symbolSize: 6,
    data: ['1200', '1400', '808', '811', '626', '488', '1600'],
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(216, 244, 247,1)'
        }, {
          offset: 1,
          color: 'rgba(216, 244, 247,1)'
        }], false)
      }
    },
    itemStyle: {
      normal: {
        color: '#58c8da'
      }
    },
    lineStyle: {
      normal: {
        width: 3
      }
    }
  }]
};

export default option;
