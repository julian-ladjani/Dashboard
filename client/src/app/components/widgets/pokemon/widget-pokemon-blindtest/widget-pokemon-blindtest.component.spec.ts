import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPokemonBlindtestComponent } from './widget-pokemon-blindtest.component';

describe('WidgetPokemonBlindtestComponent', () => {
  let component: WidgetPokemonBlindtestComponent;
  let fixture: ComponentFixture<WidgetPokemonBlindtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPokemonBlindtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPokemonBlindtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
