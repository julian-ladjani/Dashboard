import {Component, OnInit} from '@angular/core';
import {WidgetComponent} from '../../widget/widget.component';
import {SettingVariable} from '../../../../objects/setting-variable';

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

    ngOnInit() {
    }

}
