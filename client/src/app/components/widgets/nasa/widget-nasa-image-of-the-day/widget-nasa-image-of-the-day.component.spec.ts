import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNasaImageOfTheDayComponent } from './widget-nasa-image-of-the-day.component';

describe('WidgetNasaImageOfTheDayComponent', () => {
  let component: WidgetNasaImageOfTheDayComponent;
  let fixture: ComponentFixture<WidgetNasaImageOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetNasaImageOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetNasaImageOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
