import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetChartComponent } from './get-chart.component';

describe('GetChartComponent', () => {
  let component: GetChartComponent;
  let fixture: ComponentFixture<GetChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetChartComponent]
    });
    fixture = TestBed.createComponent(GetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
