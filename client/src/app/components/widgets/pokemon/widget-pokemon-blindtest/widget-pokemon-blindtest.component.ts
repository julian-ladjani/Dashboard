import {Component, Input, OnInit} from '@angular/core';
import {SettingsContainer} from '../../../../objects/settings-container';
import {PokemonComponent} from '../pokemon.component';

@Component({
  selector: 'app-widget-pokemon-blindtest',
  templateUrl: './widget-pokemon-blindtest.component.html',
  styleUrls: ['./widget-pokemon-blindtest.component.scss']
})
export class WidgetPokemonBlindtestComponent extends PokemonComponent implements OnInit {

    constructor() {
        super();
    }

    static getWidgetLabel() {
        return 'blind';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {min_generation: 1, max_generation: 7, language: 'en', shiny: false},
        {name: 'Pikachu', answer: '', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}
    );

    ngOnInit() {
    }
}
