import {Component, OnInit} from '@angular/core';
import {SettingEnum, SettingVariable} from '../../../../objects/setting-variable';
import {WidgetComponent} from '../../widget/widget.component';
import {WidgetWrapper} from '../../../../objects/widget-wrapper';

@Component({
  selector: 'app-widget-current-weather',
  templateUrl: './widget-current-weather.component.html',
  styleUrls: ['./widget-current-weather.component.scss']
})
export class WidgetCurrentWeatherComponent extends WidgetComponent implements OnInit {

  constructor() {
    super();
  }

  static getSettings() {
      return [new SettingVariable('Country', 'String', 'France', SettingEnum.POST),
          new SettingVariable('City', 'String', 'Nancy', SettingEnum.POST),
          new SettingVariable('date', 'String', '', SettingEnum.GET),
          new SettingVariable('day', 'String', '', SettingEnum.GET),
          new SettingVariable('temperature', 'Integer', '', SettingEnum.GET),
          new SettingVariable('skytext', 'String', '', SettingEnum.GET),
          new SettingVariable('imageUrl', 'String', '', SettingEnum.GET)];
  }

    static getWrapper() {
        return new WidgetWrapper(WidgetCurrentWeatherComponent, WidgetCurrentWeatherComponent.getSettingContainer());
    }

  ngOnInit() {
  }

}
