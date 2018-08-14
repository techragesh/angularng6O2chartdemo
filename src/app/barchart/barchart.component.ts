import { Component, OnInit } from '@angular/core';
import { Ng6O2ChartModule } from 'ng6-o2-chart';


import * as  ChartConst from 'ng6-o2-chart';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  chartType: string;
  configData: any;
  barDataJson: any;

  barTypeName: string;

  constructor() {
    this.barTypeName = ChartConst.BAR_CHART_TYPE_NAME;
    this.barData();
  }

  ngOnInit() {
  }

  private barData() {
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
        'display': true,
        'name': 'Bar Chart',
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

    this.barDataJson = {
      'series': [
        'Dutch',
        'German'
      ],
      'data': [
        {
          'x': 'Peter',
          'y': [82, 63],
        },
        {
          'x': 'Dave',
          'y': [79, 55],
        },
        {
          'x': 'Alma',
          'y': [70, 100],
        },
        {
          'x': 'Joe',
          'y': [33, 56],
        },
        {
          'x': 'Johan',
          'y': [60, 70],
        },
        {
          'x': 'Kevin',
          'y': [47, 73],
        },
      ],
    };

    // this.stackBarDataJson = {
    // 	'config': {
    //     'timeFormat': '%Y',
    // 	},
    // 	'series': [
    //     'year',
    //     'sell',
    // 	],
    // 	'data': [
    //     {
    //       'name': 'software',
    //       'value': [
    //         {
    //           'x': '2010',
    //           'y': 18
    //         },
    //         {
    //           'x': '2011',
    //           'y': 22
    //         },
    //         {
    //           'x': '2012',
    //           'y': 30
    //         },
    //         {
    //           'x': '2013',
    //           'y': 31
    //         },
    //       ]
    //     },
    //     {
    //       'name': 'hardware',
    //       'value': [
    //         {
    //           'x': '2010',
    //           'y': 15
    //         },
    //         {
    //           'x': '2011',
    //           'y': 16
    //         },
    //         {
    //           'x': '2012',
    //           'y': 10
    //         },
    //         {
    //           'x': '2013',
    //           'y': 21
    //         },
    //       ]
    //     },
    //     {
    //       'name': 'device',
    //       'value': [
    //         {
    //           'x': '2010',
    //           'y': 25
    //         },
    //         {
    //           'x': '2011',
    //           'y': 26
    //         },
    //         {
    //           'x': '2012',
    //           'y': 30
    //         },
    //         {
    //           'x': '2013',
    //           'y': 31
    //         },
    //       ]
    //     },
    //     {
    //       'name': 'others',
    //       'value': [
    //         {
    //           'x': '2010',
    //           'y': 5
    //         },
    //         {
    //           'x': '2011',
    //           'y': 16
    //         },
    //         {
    //           'x': '2012',
    //           'y': 20
    //         },
    //         {
    //           'x': '2013',
    //           'y': 41
    //         },
    //       ]
    //     },
    // 	],
    // };

    // this.treeMapDataJson = {
    // 	'name': 'Root',
    // 	'children': [
    //     { 'name': 'Dir1', 'children': [
    //         { 'name': 'Dir2', 'children': [
    //             { 'name': 'FileA', value: 5000 },
    //             { 'name': 'FileB', value: 3000 },
    //             { 'name': 'Dir3', 'children': [
    //                 { 'name': 'FileC', value: 2000 },
    //                 { 'name': 'Dir4', 'children': [
    //                     { 'name': 'FileD', value: 1000 },
    //                     { 'name': 'FileE', value: 1500 }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     }
    // 	]
    // };

    // this.pieDataJson = {
    // 	'data': [
    //     {
    //       'name': 'software',
    //       'value': 30,
    //     },
    //     {
    //       'name': 'hardware',
    //       'value': 25
    //     },
    //     {
    //       'name': 'device',
    //       'value': 16
    //     },
    //     {
    //       'name': 'others',
    //       'value': 4
    //     },
    // 	],
    // };



  }
}
