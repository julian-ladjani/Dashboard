import {Component, Input, OnInit} from '@angular/core';
import {SettingsContainer} from '../../../../objects/settings-container';
import {EpitechComponent} from '../epitech-component';

@Component({
  selector: 'app-widget-epitech-partner',
  templateUrl: './widget-epitech-partner.component.html',
  styleUrls: ['./widget-epitech-partner.component.scss']
})
export class WidgetEpitechPartnerComponent extends EpitechComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Partners';
    }

    static getWidgetLabel() {
        return 'partner';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {autologin: '', partner: 3},
        {}
    );

    ngOnInit() {
    }
}