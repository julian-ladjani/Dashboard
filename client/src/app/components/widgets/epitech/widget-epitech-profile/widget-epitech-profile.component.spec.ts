import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEpitechProfileComponent } from './widget-epitech-profile.component';

describe('WidgetEpitechProfileComponent', () => {
  let component: WidgetEpitechProfileComponent;
  let fixture: ComponentFixture<WidgetEpitechProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEpitechProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEpitechProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
