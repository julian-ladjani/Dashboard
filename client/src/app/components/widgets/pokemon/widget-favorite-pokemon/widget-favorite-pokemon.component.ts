import {Component, Input, OnInit} from '@angular/core';
import {WidgetComponent} from '../../widget/widget.component';
import {SettingEnum, SettingVariable} from '../../../../objects/setting-variable';
import {WidgetWrapper} from '../../../../objects/widget-wrapper';
import {SettingsContainer} from '../../../../objects/settings-container';

@Component({
    selector: 'app-widget-favorite-pokemon',
    templateUrl: './widget-favorite-pokemon.component.html',
    styleUrls: ['./widget-favorite-pokemon.component.scss']
})
export class WidgetFavoritePokemonComponent extends WidgetComponent implements OnInit {

    constructor() {
        super();
    }

    static getServiceLabel() {
        return 'pokemon';
    }

    static getWidgetLabel() {
        return 'favorite';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {name: 'Pikachu', shiny: false}, {sprite: 'https://www.pokepedia.fr/images/thumb/3/36/Rayquaza-ROSA.png/250px-Rayquaza-ROSA.png'}
    );

    ngOnInit() {
    }

}