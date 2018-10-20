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

    static getTitle() {
        return 'Type';
    }

    static getWidgetLabel() {
        return 'type';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {type: 'normal'},
        {double_damage_from: [], double_damage_to: [], half_damage_from: [], half_damage_to: [], no_damage_from: [], no_damage_to: []}
    );

    ngOnInit() {
    }
}
