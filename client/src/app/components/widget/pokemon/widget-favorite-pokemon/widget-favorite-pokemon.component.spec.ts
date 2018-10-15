import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFavoritePokemonComponent } from './widget-favorite-pokemon.component';

describe('WidgetFavoritePokemonComponent', () => {
  let component: WidgetFavoritePokemonComponent;
  let fixture: ComponentFixture<WidgetFavoritePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetFavoritePokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFavoritePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
