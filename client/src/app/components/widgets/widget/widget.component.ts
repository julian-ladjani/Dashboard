import {Component, Input, OnInit} from '@angular/core';
import {SettingVariable} from '../../../objects/setting-variable';
import {SettingsContainer} from '../../../objects/settings-container';
import {WidgetWrapper} from '../../../objects/widget-wrapper';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
    constructor() { }

    @Input() settings: SettingsContainer;

    static getSettingContainer() {
        return new SettingsContainer(this.getSettings());
    }

    static getSettings() {
        return [new SettingVariable('Message', 'String', 'Hello world !')];
    }

    static getWrapper() {
        return new WidgetWrapper(WidgetComponent, WidgetComponent.getSettingContainer());
    }

    ngOnInit() {
    }
}
