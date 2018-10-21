import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEpitechPlanningComponent } from './widget-epitech-planning.component';

describe('WidgetEpitechPlanningComponent', () => {
  let component: WidgetEpitechPlanningComponent;
  let fixture: ComponentFixture<WidgetEpitechPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEpitechPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEpitechPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
