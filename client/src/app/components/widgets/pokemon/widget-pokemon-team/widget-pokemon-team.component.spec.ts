import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPokemonTeamComponent } from './widget-pokemon-team.component';

describe('WidgetPokemonTeamComponent', () => {
  let component: WidgetPokemonTeamComponent;
  let fixture: ComponentFixture<WidgetPokemonTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPokemonTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPokemonTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
