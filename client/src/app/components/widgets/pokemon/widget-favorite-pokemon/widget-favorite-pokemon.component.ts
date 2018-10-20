import {Component, Input, OnInit} from '@angular/core';
import {SettingsContainer} from '../../../../objects/settings-container';
import {PokemonComponent} from '../pokemon.component';

@Component({
    selector: 'app-widget-favorite-pokemon',
    templateUrl: './widget-favorite-pokemon.component.html',
    styleUrls: ['./widget-favorite-pokemon.component.scss']
})
export class WidgetFavoritePokemonComponent extends PokemonComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Favorite Pokemon';
    }

    static getWidgetLabel() {
        return 'favorite';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {pokemon: 'pikachu', shiny: false},
        {name: 'Pikachu', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}
    );

    ngOnInit() {
    }
}
