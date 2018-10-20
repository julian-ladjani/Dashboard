import {Component, Input, OnInit} from '@angular/core';
import {SettingsContainer} from '../../../../objects/settings-container';
import {PokemonComponent} from '../pokemon.component';

@Component({
  selector: 'app-widget-pokemon-type',
  templateUrl: './widget-pokemon-type.component.html',
  styleUrls: ['./widget-pokemon-type.component.scss']
})
export class WidgetPokemonTypeComponent extends PokemonComponent implements OnInit {

    constructor() {
        super();
    }

    static getWidgetLabel() {
        return 'type';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {type: '???'},
        {name: '???'}
    );

    ngOnInit() {
    }
}
