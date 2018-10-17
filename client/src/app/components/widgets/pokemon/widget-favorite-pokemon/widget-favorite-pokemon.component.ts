import {Component, OnInit} from '@angular/core';
import {WidgetComponent} from '../../widget/widget.component';
import {SettingEnum, SettingVariable} from '../../../../objects/setting-variable';
import {WidgetWrapper} from '../../../../objects/widget-wrapper';

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
        return [new SettingVariable('Name', 'String', 'Pikachu', SettingEnum.POST),
            new SettingVariable('Shiny', 'Boolean', false, SettingEnum.POST),
            new SettingVariable('sprite', 'String', '', SettingEnum.GET)];
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