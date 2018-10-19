import {Component, Input, OnInit} from '@angular/core';
import {WidgetComponent} from '../../widget/widget.component';
import {SettingsContainer} from '../../../../objects/settings-container';

@Component({
    selector: 'app-widget-current-weather',
    templateUrl: './widget-current-weather.component.html',
    styleUrls: ['./widget-current-weather.component.scss']
})

export class WidgetCurrentWeatherComponent extends WidgetComponent implements OnInit {

    constructor() {
        super();
    }

    static getServiceLabel() {
        return 'weather';
    }

    static getWidgetLabel() {
        return 'current';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {country: 'France', city: 'Nancy'}, null
    );

    /*return [new SettingVariable('Country', 'String', 'France', SettingEnum.POST),
      new SettingVariable('City', 'String', 'Nancy', SettingEnum.POST),
      new SettingVariable('observationpoint', 'String', '', SettingEnum.GET),
      new SettingVariable('date', 'String', '', SettingEnum.GET),
      new SettingVariable('observationtime', 'String', '', SettingEnum.GET),
      new SettingVariable('day', 'String', '', SettingEnum.GET),
      new SettingVariable('temperature', 'Integer', '', SettingEnum.GET),
      new SettingVariable('skytext', 'String', '', SettingEnum.GET),
      new SettingVariable('imageUrl', 'String', '', SettingEnum.GET)];*/
}