import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGithubProfileComponent } from './widget-github-profile.component';

describe('WidgetGithubProfileComponent', () => {
  let component: WidgetGithubProfileComponent;
  let fixture: ComponentFixture<WidgetGithubProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGithubProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGithubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
