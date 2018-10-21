import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNasaMarsPhotoComponent } from './widget-nasa-mars-photo.component';

describe('WidgetNasaMarsPhotoComponent', () => {
  let component: WidgetNasaMarsPhotoComponent;
  let fixture: ComponentFixture<WidgetNasaMarsPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetNasaMarsPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetNasaMarsPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
