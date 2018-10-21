import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEpitechPartnerComponent } from './widget-epitech-partner.component';

describe('WidgetEpitechPartnerComponent', () => {
  let component: WidgetEpitechPartnerComponent;
  let fixture: ComponentFixture<WidgetEpitechPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEpitechPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEpitechPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
