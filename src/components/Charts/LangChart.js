import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const LangChart = ({chartData}) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: 400,
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Used Languages',
        theme: 'fusion',
        decimals: 0,
        doughnutRadius: '45%'
      },
      data: chartData
    }
  };
  return <ReactFC {...chartConfigs} />
}

export default LangChart