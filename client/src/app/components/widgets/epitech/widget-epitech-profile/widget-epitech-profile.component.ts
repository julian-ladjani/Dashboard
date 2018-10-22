import {Component, Input, OnInit} from '@angular/core';
import {EpitechComponent} from '../epitech-component';
import {SettingsContainer} from '../../../../objects/settings-container';

@Component({
  selector: 'app-widget-epitech-profile',
  templateUrl: './widget-epitech-profile.component.html',
  styleUrls: ['./widget-epitech-profile.component.scss']
})
export class WidgetEpitechProfileComponent extends EpitechComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Profile';
    }

    static getWidgetLabel() {
        return 'user';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {autologin: ''},
        {credits: 0, gpa: [{gpa: '0'}], log: {active: 0}, login: 'log.in@epitech.eu', picture: null, title: 'Firstname LASTNAME'}
    );

    ngOnInit() {
    }
}
