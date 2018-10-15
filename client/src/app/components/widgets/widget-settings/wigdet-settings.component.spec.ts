import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WigdetSettingsComponent } from './wigdet-settings.component';

describe('WigdetSettingsComponent', () => {
  let component: WigdetSettingsComponent;
  let fixture: ComponentFixture<WigdetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WigdetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WigdetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
