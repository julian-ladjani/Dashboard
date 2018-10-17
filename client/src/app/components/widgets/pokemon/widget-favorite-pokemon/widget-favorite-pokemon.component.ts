import {Component, OnInit} from '@angular/core';
import {SettingVariable} from '../../../../objects/setting-variable';
import {WidgetWrapper} from '../../../../objects/widget-wrapper';
import {PokemonComponent} from '../pokemon/pokemon.component';
import {WidgetComponent} from '../../widget/widget.component';

@Component({
    selector: 'app-widget-favorite-pokemon',
    templateUrl: './widget-favorite-pokemon.component.html',
    styleUrls: ['./widget-favorite-pokemon.component.scss']
})
export class WidgetFavoritePokemonComponent extends WidgetComponent implements OnInit {
    constructor() {
        super();
    }

    static getSettings() {
        return [new SettingVariable('Name', 'String', 'Pikachu'),
                new SettingVariable('Shiny', 'Boolean', true)];
    }

    static getWrapper() {
        return new WidgetWrapper(WidgetFavoritePokemonComponent, WidgetFavoritePokemonComponent.getSettingContainer());
    }

    static getWidgetLabel() {
        return 'favorite';
    }

    static getServiceLabel() {
        return 'pokemon';
    }

    ngOnInit() {
    }

}