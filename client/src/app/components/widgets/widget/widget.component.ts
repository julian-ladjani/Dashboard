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

    @Input() settings: SettingsContainer;

    static getSettingContainer() {
        return new SettingsContainer(this.getSettings());
    }

    static getSettings() {
        return [new SettingVariable('Message', 'String', 'Hello world !', SettingEnum.POST)];
    }

    static getWrapper() {
        return new WidgetWrapper(WidgetComponent, WidgetComponent.getSettingContainer());
    }

    ngOnInit() {
    }
}
