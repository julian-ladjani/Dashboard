import {Component, Input, OnInit} from '@angular/core';
import {SettingsContainer} from '../../../../objects/settings-container';
import {WeatherComponent} from '../weather-component';

@Component({
    selector: 'app-widget-current-weather',
    templateUrl: './widget-current-weather.component.html',
    styleUrls: ['./widget-current-weather.component.scss']
})
export class WidgetCurrentWeatherComponent extends WeatherComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Current Weather';
    }

    static getWidgetLabel() {
        return 'current';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {country: 'France', city: 'Nancy'},
        {observationpoint: 'Town, Country', date: '00-00-0000', observationtime: '00:00:00', shortday: 'Day',
            temperature: '0', skytext: 'weather', imageUrl: 'http://blob.weather.microsoft.com/static/weather4/en-us/law/32.gif'}
    );

}
