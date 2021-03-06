# Angularng6O2chartdemo
This project explains how to create angular dashboard and use d3.js and ng6O2 chart library.

### Application Demo

**Step 1:** Create a new angular project 
```
ng new angularng6O2chartdemo

```
**Step 2:** Add angular material 
```
npm install --save @angular/material @angular/cdk @angular/animations
```
**Step 3:** Add Dashboard into the project
```
ng generate @angular/material:material-dashboard --name <component-name>
```
**Step 4:** Add d3.js for chart support
```
npm install d3@4.3.0 --save
```
**Step 5:** Add ng6-o2-chart library
```
npm install ng6-o2-chart --save
```
**Step 6:** Add Ng6O2ChartModule in app.module.ts
```
import { Ng6O2ChartModule } from 'ng6-o2-chart';
imports: [
    BrowserModule,
    Ng6O2ChartModule   // <= Add
  ]

```
**Step 7:** Add css in styles.css file

**Step 8:** I have created 3 components 

        * Barchart
        * Piechart
        * Scatterplotchart

**Step 9:** Here I do explain with Barchart

**barchart.component.ts**

```
import { Ng6O2ChartModule } from 'ng6-o2-chart';
import * as  ChartConst from 'ng6-o2-chart';

  chartType: string;
  configData: any;
  barDataJson: any;
  barTypeName: string;

  constructor() {
    this.barTypeName = ChartConst.BAR_CHART_TYPE_NAME;
    this.barData();
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
}
```

**barchart.component.html**

```
<lib-Ng6O2Chart [chartType]="barTypeName" [configData]="configData"  [graphData]="barDataJson" [svgWidth]="'650'" [svgHeight]="'250'"></lib-Ng6O2Chart>
```
**chart-dashboard.component.html**

```
    <mat-grid-tile colspan="2" rowspan="1">
      <mat-card class="dashboard-card">
        <mat-card-header>
          <mat-card-title>
            Bar
          </mat-card-title>
        </mat-card-header>
        <mat-card-content class="dashboard-card-content">
          <div><app-barchart></app-barchart></div>
        </mat-card-content>
      </mat-card>
    </mat-grid-tile>
```

### Screenshots
![chart.gif](chart.gif)


### Happy Coding