import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { BarchartComponent } from './barchart/barchart.component';
import { Ng6O2ChartModule } from 'ng6-o2-chart';

@NgModule({
  declarations: [
    AppComponent,
    ChartDashboardComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    Ng6O2ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
