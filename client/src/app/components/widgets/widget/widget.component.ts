import {Component, Input, OnInit} from '@angular/core';
import {SettingEnum, SettingVariable} from '../../../objects/setting-variable';
import {SettingsContainer} from '../../../objects/settings-container';
import {WidgetWrapper} from '../../../objects/widget-wrapper';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
    constructor() { }

    static getServiceLabel() {
        return 'basic';
    }

    static getWidgetLabel() {
        return 'simpleOne';
    }

    static getTitle() {
        return 'Basic Widget';
    }

    static getIcon() {
        return environment.iconPath + this.getServiceLabel() + '.svg';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {message: 'Hello world !'}, null
    );

    ngOnInit() {
    }
}
