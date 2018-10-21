import {Component, Input, OnInit} from '@angular/core';
import {SettingsContainer} from '../../../../objects/settings-container';

@Component({
  selector: 'app-widget-pokemon-team',
  templateUrl: './widget-pokemon-team.component.html',
  styleUrls: ['./widget-pokemon-team.component.scss']
})
export class WidgetPokemonTeamComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Pokemon Team';
    }

    static getWidgetLabel() {
        return 'team';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {pokemon1: 'pikachu', pokemon2: 'lapras', pokemon3: 'snorlax',
            pokemon4: 'venusaur', pokemon5: 'charizard', pokemon6: 'blastoise', shiny: false},
        {}
    );

    ngOnInit() {
    }

}
