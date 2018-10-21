import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGithubReposComponent } from './widget-github-repos.component';

describe('WidgetGithubReposComponent', () => {
  let component: WidgetGithubReposComponent;
  let fixture: ComponentFixture<WidgetGithubReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGithubReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGithubReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
