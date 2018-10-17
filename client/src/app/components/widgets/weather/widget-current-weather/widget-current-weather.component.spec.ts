import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCurrentWeatherComponent } from './widget-current-weather.component';

describe('WidgetCurrentWeatherComponent', () => {
  let component: WidgetCurrentWeatherComponent;
  let fixture: ComponentFixture<WidgetCurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCurrentWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
