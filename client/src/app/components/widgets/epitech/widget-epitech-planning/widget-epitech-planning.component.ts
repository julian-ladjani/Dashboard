import {Component, Input, OnInit} from '@angular/core';
import {EpitechComponent} from '../epitech-component';
import {SettingsContainer} from '../../../../objects/settings-container';

@Component({
    selector: 'app-widget-epitech-planning',
    templateUrl: './widget-epitech-planning.component.html',
    styleUrls: ['./widget-epitech-planning.component.scss']
})
export class WidgetEpitechPlanningComponent extends EpitechComponent implements OnInit {

    objectKeys = Object.keys;
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
        {autologin: '', begin: '2018-10-21', days: 10, semester: '0,1,2,3'});

    ngOnInit() {
    }

}
