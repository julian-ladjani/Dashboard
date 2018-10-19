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

    static getWidgetLabel() {
        return 'favorite';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {name: 'pikachu', shiny: false}, {sprite: 'https://www.pokepedia.fr/images/thumb/3/36/Rayquaza-ROSA.png/250px-Rayquaza-ROSA.png'}
    );

    ngOnInit() {
    }
}
