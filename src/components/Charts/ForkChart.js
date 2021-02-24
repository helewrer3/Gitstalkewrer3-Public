import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ForkChart = ({chartData}) => {
  const chartConfigs = {
    type: 'bar2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Most Forked Repos",
        "xAxisName": "Repositories",
        "yAxisName": "Forks",
        "numberSuffix": "",
        "theme": "gammel"
      },
      "data": chartData
    }
  };
  return <ReactFC {...chartConfigs} />
}

export default ForkChart