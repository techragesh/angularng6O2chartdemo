import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterplotchartComponent } from './scatterplotchart.component';

describe('ScatterplotchartComponent', () => {
  let component: ScatterplotchartComponent;
  let fixture: ComponentFixture<ScatterplotchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterplotchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterplotchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
