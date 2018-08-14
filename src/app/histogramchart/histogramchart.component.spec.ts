import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogramchartComponent } from './histogramchart.component';

describe('HistogramchartComponent', () => {
  let component: HistogramchartComponent;
  let fixture: ComponentFixture<HistogramchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistogramchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistogramchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
