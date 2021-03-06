import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ExampleChart = ({chartData}) => {
  const chartConfigs = {
    type: 'bar2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "gammel"
      },
      "data": chartData
    }
  };
  return <ReactFC {...chartConfigs} />
}

export default ExampleChart