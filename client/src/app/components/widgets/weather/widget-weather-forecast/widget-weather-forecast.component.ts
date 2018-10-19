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

    static getServiceLabel() {
        return 'weather';
    }

    static getWidgetLabel() {
        return 'forecast';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {country: 'France', city: 'Nancy'}, {}
    );

}