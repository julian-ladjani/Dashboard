import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPokemonTypeComponent } from './widget-pokemon-type.component';

describe('WidgetPokemonTypeComponent', () => {
  let component: WidgetPokemonTypeComponent;
  let fixture: ComponentFixture<WidgetPokemonTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPokemonTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPokemonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
