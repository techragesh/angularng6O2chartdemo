import { Component, OnInit } from '@angular/core';
import { Ng6O2ChartModule } from 'ng6-o2-chart';


import * as  ChartConst from 'ng6-o2-chart';

@Component({
  selector: 'app-scatterplotchart',
  templateUrl: './scatterplotchart.component.html',
  styleUrls: ['./scatterplotchart.component.css']
})
export class ScatterplotchartComponent implements OnInit {

  chartType: string;
  configData: any;
  scatterPlotDataJson: any;
  scatterPlotTypeName: string;

  constructor() {
    this.scatterPlotTypeName 	= ChartConst.SCATTER_PLOT_CHART_TYPE_NAME;
    this.scatterData();
   }

  ngOnInit() {
  }

  private scatterData() {
    this.configData = {
      // tslint:disable-next-line:quotemark
      "className": {
        'axis': 'axis',
        'axisXBorder': 'axis_x',
        'axisXText': 'axis-x-text',
        'bar': 'bar',
        'barValue': 'bar-value',
        'line': 'line',
        'multiLinePrefix': 'line-',
        'grid': 'grid',
        'pie': 'pie',
        'pieInnerTitle': 'pie-inner-title',
        'pieInnerRadius': 'total',
        'histogram': 'histogram',
        'histogramBar': 'histogram-bar',
        'treemap': 'treemap',
        'treemapLabel': 'treemap-label',
        'packlayout': 'packlayout',
        'packlayoutLabel': 'packlayout-label',
      },
      'label': {
          'display': true,
      },
      'title': {
        'display': false,
        'name': 'Title',
        'className': 'chart-title',
        'height': 30,
        'leftMargin': -20,
        'bottomMargin': 10
      },
      'maxValue': {
        'auto': true,
        'x': 100,
        'y': 100,
      },
      'legend': {
        'display': true,
        'position':           'right',
        'totalWidth': 80,
        'initXPos': 5,
        'initYPos': 10,
        'rectWidth': 10,
        'rectHeight': 10,
        'xSpacing': 2,
        'ySpacing': 2
      },
      'color': {
        'auto': true, //
        'defaultColorNumber': 10,
        'opacity': 1.0,
        'userColors': [
          'blue',
          'red',
          'green',
          'yellow',
          'PaleGoldenrod',
          'Khaki',
          'DarkKhaki',
          'Gold',
          'Cornsilk',
          'BlanchedAlmond',
          'Bisque',
          'NavajoWhite',
          'Wheat',
          'BurlyWood',
          'Tan',
          'RosyBrown',
          'SandyBrown',
          'Goldenrod',
          'DarkGoldenrod',
          'Peru',
          'Chocolate'
        ],
        'focusColor': 'red',
      },
      'pie': {
        'innerRadius': {
          'percent': 20,
          'title': 'Total'
        },
        'value': {
          'display': true,
        },
        'percent': {
          'display': false,
        }
      },
      'line': {
        'legend': 'lineEnd',
        'interpolate' : 'linear',
      },
      'grid': {
        'x': {
          'display': true,
        },
        'y': {
          'display': true,
        },
      },
      'margin': {
        'top': 30,
        'left': 30,
        'right': 10,
        'bottom': 20,
        'between': 5
      },
      'axis': {
        'rotation': 0,
        'borderLineWidth': 1,
        'xLabel': {
          'leftMargin': 0,
          'bottomMargin': 5
        },
        'yLabel': {
          'leftMargin': 0,
          'bottomMargin': 0
        },
      },
      'animation': {
        'enable': true,
        'duration': 4000,
      },
    };

    this.scatterPlotDataJson = {
      'series': [
        'series A',
        'series B',
        'series C'
      ],
      'data': [
        {
          'name': 'Aadi',
          'value': [
            {'x': 30, 'y': 40, 'r': 5},
            {'x': 120, 'y': 115, 'r': 10},
            {'x': 125, 'y': 90, 'r': 2},
            {'x': 150, 'y': 160, 'r': 1},
            {'x': 150, 'y': 160, 'r': 3},
            {'x': 128, 'y': 115, 'r': 5},
            {'x': 130, 'y': 40, 'r': 15},
            {'x': 170, 'y': 115, 'r': 25},
          ]
        },
        {
          'name': 'BMW',
          'value': [
            {'x': 130, 'y': 140, 'r': 5},
            {'x': 20, 'y': 15, 'r': 10},
            {'x': 25, 'y': 170, 'r': 2},
            {'x': 150, 'y': 60, 'r': 1},
            {'x': 50, 'y': 60, 'r': 3},
            {'x': 28, 'y': 15, 'r': 5},
            {'x': 130, 'y': 140, 'r': 15},
            {'x': 20, 'y': 115, 'r': 25},
          ]
        },
      ],
    };
  }

}
