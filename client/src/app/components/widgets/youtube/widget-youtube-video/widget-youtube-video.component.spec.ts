import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetYoutubeVideoComponent } from './widget-youtube-video.component';

describe('WidgetYoutubeVideoComponent', () => {
  let component: WidgetYoutubeVideoComponent;
  let fixture: ComponentFixture<WidgetYoutubeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetYoutubeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetYoutubeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
