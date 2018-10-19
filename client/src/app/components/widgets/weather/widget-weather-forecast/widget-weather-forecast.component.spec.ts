import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWeatherForecastComponent } from './widget-weather-forecast.component';

describe('WidgetWeatherForecastComponent', () => {
  let component: WidgetWeatherForecastComponent;
  let fixture: ComponentFixture<WidgetWeatherForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetWeatherForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
