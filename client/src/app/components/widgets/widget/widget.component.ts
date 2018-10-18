import {Component, Input, OnInit} from '@angular/core';
import {SettingEnum, SettingVariable} from '../../../objects/setting-variable';
import {SettingsContainer} from '../../../objects/settings-container';
import {WidgetWrapper} from '../../../objects/widget-wrapper';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
    constructor() { }

    static getServiceLabel() {
        return 'widget';
    }

    static getWidgetLabel() {
        return 'widget';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {message: 'Hello world !'}, null
    );

    ngOnInit() {
    }
}
