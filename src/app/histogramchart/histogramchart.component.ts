import { Component, OnInit } from '@angular/core';
import { Ng6O2ChartModule } from 'ng6-o2-chart';


import * as  ChartConst from 'ng6-o2-chart';

@Component({
  selector: 'app-histogramchart',
  templateUrl: './histogramchart.component.html',
  styleUrls: ['./histogramchart.component.css']
})
export class HistogramchartComponent implements OnInit {

  chartType: string;
  configData: any;
  histogramDataJson: any;
  histogramTypeName: string;

  constructor() {
    this.histogramTypeName     = ChartConst.HISTOGRAM_CHART_TYPE_NAME;
    this.histogramData();
  }

  ngOnInit() {
  }

  private histogramData() {
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

    this.histogramDataJson = {
    	'range': [0, 100],
    	'bins': [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    	'data': [
        54, 94, 69, 45, 62, 51, 36, 21, 11, 8,
        56, 72, 65, 42, 25, 33, 45, 53, 52, 89,
        90, 55, 52, 55, 65, 70, 43, 35, 15, 45,
        50, 95, 65, 44, 60, 50, 35, 20, 10, 8,
        56, 70, 65, 42, 22, 33, 40, 53, 52, 89,
        90, 55, 50, 55, 65, 72, 45, 35, 15, 45,
        50, 95, 60, 44, 60, 50, 35, 20, 10, 8,
        56, 70, 65, 42, 22, 33, 40, 53, 52, 89,
        90, 55, 55, 55, 65, 72, 45, 35, 15, 45,
    	],
    };
  }

}
