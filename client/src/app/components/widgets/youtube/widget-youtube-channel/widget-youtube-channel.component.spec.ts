import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetYoutubeChannelComponent } from './widget-youtube-channel.component';

describe('WidgetYoutubeChannelComponent', () => {
  let component: WidgetYoutubeChannelComponent;
  let fixture: ComponentFixture<WidgetYoutubeChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetYoutubeChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetYoutubeChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
