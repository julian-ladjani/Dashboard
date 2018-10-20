import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';
import {$} from 'jquery';
import {WidgetFavoritePokemonComponent} from '../widgets/pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';
import {PokemonComponent} from '../widgets/pokemon/pokemon.component';
import {WidgetCurrentWeatherComponent} from '../widgets/weather/widget-current-weather/widget-current-weather.component';
import {WidgetWeatherForecastComponent} from '../widgets/weather/widget-weather-forecast/widget-weather-forecast.component';
import {NasaComponent} from '../widgets/nasa/nasa-component';
import {WeatherComponent} from '../widgets/weather/weather-component';
import {WidgetNasaImageOfTheDayComponent} from '../widgets/nasa/widget-nasa-image-of-the-day/widget-nasa-image-of-the-day.component';
import {WidgetComponent} from '../widgets/widget/widget.component';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-widget-bar',
    templateUrl: './widget-bar.component.html',
    styleUrls: ['./widget-bar.component.scss'],
})

export class WidgetBarComponent implements OnInit {
    nav = [];
    navBarWidth = '250px';

    @Output() addNewWidgetEvent = new EventEmitter<any>();
    @Output() logoutEvent = new EventEmitter();
    @Output() deleteWidgetsEvent = new EventEmitter();
    @Output() expandEvent = new EventEmitter<boolean>();

    constructor() {
        this.nav = [
            this.newTab(`Converter`, 'assets/icons/converter.svg', 'converter'),
            this.newTab(`EPITECH`, 'assets/icons/epitech.svg', 'epitech'),
            this.newTab(`NASA`, 'assets/icons/nasa.svg', NasaComponent.getServiceLabel()),
            this.newSubTab(`Image of the Day`,
                WidgetNasaImageOfTheDayComponent.getWidgetLabel(), WidgetNasaImageOfTheDayComponent.getServiceLabel()),
            this.newTab(`Pokemon`, 'assets/icons/pokemon.svg', PokemonComponent.getServiceLabel()),
            this.newSubTab(`Favorite Pokemon`,
                WidgetFavoritePokemonComponent.getWidgetLabel(), WidgetFavoritePokemonComponent.getServiceLabel()),
            this.newTab(`Soundcloud`, 'assets/icons/soundcloud.svg', 'soundcloud'),
            this.newTab(`Spotify`, 'assets/icons/spotify.svg', 'spotify'),
            this.newTab(`Steam`, 'assets/icons/steam.svg', 'steam'),
            this.newTab(`Twitch`, 'assets/icons/twitch.svg', 'twitch'),
            this.newTab(`Twitter`, 'assets/icons/twitter.svg', 'twitter'),
            this.addService(WeatherComponent),
            this.addWidget(WidgetCurrentWeatherComponent),
            this.addWidget(WidgetWeatherForecastComponent),
            this.newSubTab(WidgetCurrentWeatherComponent.getTitle(),
                WidgetCurrentWeatherComponent.getWidgetLabel(), WidgetCurrentWeatherComponent.getServiceLabel()),
            this.newTab(`Youtube`, 'assets/icons/youtube.svg', 'youtube')
        ];
    }

    ngOnInit() {
    }

    addService(serviceType) {
        return this.newTab(serviceType.getTitle(), serviceType.getIcon(), serviceType.getServiceLabel());
    }

    addWidget(widgetType) {
        return this.newSubTab(widgetType.getTitle(), widgetType.getWidgetLabel(), widgetType.getServiceLabel());
    }

    newTab(name, svg, label) {
        return {name: name, svg: svg, label: label, parent: null, extended: false};
    }

    newSubTab(name, label, parent) {
        return {name: name, svg: null, label: label, parent: parent, extended: false};
    }

    switchService(elem) {
        elem.extended = !elem.extended;
        this.nav.forEach(function (value) {
            if (value.parent === elem.label) {
                value.extended = elem.extended;
            }
        });
    }

    addNewWidget(elem) {
        this.nav.forEach(function (value, ) {
            if (value.label === elem.parent) {
                const test = {
                    service: elem.parent,
                    widget: elem.label,
                    title: value.name,
                    subtitle: elem.name,
                    icon: value.svg};
                this.addNewWidgetEvent.emit(test);
                return value.extended;
            }
        }.bind(this));
        return false;
    }

    onResizeEnd(event: ResizeEvent): void {
        this.navBarWidth = event.rectangle.right + 'px';
    }
}
