import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEpitechMessageComponent } from './widget-epitech-message.component';

describe('WidgetEpitechMessageComponent', () => {
  let component: WidgetEpitechMessageComponent;
  let fixture: ComponentFixture<WidgetEpitechMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEpitechMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEpitechMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
