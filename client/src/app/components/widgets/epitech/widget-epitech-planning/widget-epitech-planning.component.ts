import {Component, Input, OnInit} from '@angular/core';
import {EpitechComponent} from '../epitech-component';
import {SettingsContainer} from '../../../../objects/settings-container';

@Component({
    selector: 'app-widget-epitech-planning',
    templateUrl: './widget-epitech-planning.component.html',
    styleUrls: ['./widget-epitech-planning.component.scss']
})
export class WidgetEpitechPlanningComponent extends EpitechComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Planning';
    }

    static getWidgetLabel() {
        return 'planning';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {autologin: '', partner: 3},
        {}
    );

    ngOnInit() {
    }

}
