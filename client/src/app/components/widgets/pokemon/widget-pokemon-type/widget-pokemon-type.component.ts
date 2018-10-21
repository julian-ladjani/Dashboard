import {Component, Input, OnInit} from '@angular/core';
import {SettingsContainer} from '../../../../objects/settings-container';
import {PokemonComponent} from '../pokemon.component';

@Component({
    selector: 'app-widget-pokemon-type',
    templateUrl: './widget-pokemon-type.component.html',
    styleUrls: ['./widget-pokemon-type.component.scss']
})
export class WidgetPokemonTypeComponent extends PokemonComponent implements OnInit {

    objectKeys = Object.keys;
    typeInfos = {
        no_damage_from: 'Weak from',
        no_damage_to: 'Weak to',
        double_damage_from: 'Double damage from',
        double_damage_to: 'Double damage to',
        half_damage_from: 'Half damage from',
        half_damage_to: 'Half damage to'
    };

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
