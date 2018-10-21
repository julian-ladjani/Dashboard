import {Component, Input, OnInit} from '@angular/core';
import {SettingsContainer} from '../../../../objects/settings-container';
import {WeatherComponent} from '../weather-component';

@Component({
  selector: 'app-widget-weather-forecast',
  templateUrl: './widget-weather-forecast.component.html',
  styleUrls: ['./widget-weather-forecast.component.scss']
})
export class WidgetWeatherForecastComponent extends WeatherComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Weather Forecast';
    }

    static getWidgetLabel() {
        return 'forecast';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {country: 'France', city: 'Nancy'},
        [{date: '00-00-0000', day: 'Day', high: 0, low: 0, precip: '0', skycodeday: 32, skytextday: 'weather'}]
    );

}