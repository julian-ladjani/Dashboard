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
import {WidgetPokemonBlindtestComponent} from '../widgets/pokemon/widget-pokemon-blindtest/widget-pokemon-blindtest.component';
import {WidgetPokemonTypeComponent} from '../widgets/pokemon/widget-pokemon-type/widget-pokemon-type.component';
import {WidgetEpitechMessageComponent} from '../widgets/epitech/widget-epitech-message/widget-epitech-message.component';
import {EpitechComponent} from '../widgets/epitech/epitech-component';
import {WidgetEpitechPartnerComponent} from '../widgets/epitech/widget-epitech-partner/widget-epitech-partner.component';
import {WidgetNasaMarsPhotoComponent} from '../widgets/nasa/widget-nasa-mars-photo/widget-nasa-mars-photo.component';
import {YoutubeComponent} from '../widgets/youtube/youtube-component';
import {WidgetYoutubeChannelComponent} from '../widgets/youtube/widget-youtube-channel/widget-youtube-channel.component';
import {WidgetYoutubeVideoComponent} from '../widgets/youtube/widget-youtube-video/widget-youtube-video.component';


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
    @Output() saveWidgetsEvent = new EventEmitter();
    @Output() refreshWidgetsEvent = new EventEmitter();
    @Output() expandEvent = new EventEmitter<boolean>();

    constructor() {
        this.nav = [
            this.newTab(`Converter`, 'assets/icons/converter.svg', 'converter'),
            this.addService(EpitechComponent),
            this.addWidget(WidgetEpitechMessageComponent),
            this.addWidget(WidgetEpitechPartnerComponent),
            this.newTab(`GitHub`, 'assets/icons/github.svg', 'github'),
            this.addService(NasaComponent),
            this.addWidget(WidgetNasaImageOfTheDayComponent),
            this.addWidget(WidgetNasaMarsPhotoComponent),
            this.addService(PokemonComponent),
            this.addWidget(WidgetPokemonBlindtestComponent),
            this.addWidget(WidgetFavoritePokemonComponent),
            this.addWidget(WidgetPokemonTypeComponent),
            this.newTab(`Soundcloud`, 'assets/icons/soundcloud.svg', 'soundcloud'),
            this.newTab(`Spotify`, 'assets/icons/spotify.svg', 'spotify'),
            this.newTab(`Steam`, 'assets/icons/steam.svg', 'steam'),
            this.newTab(`Twitch`, 'assets/icons/twitch.svg', 'twitch'),
            this.newTab(`Twitter`, 'assets/icons/twitter.svg', 'twitter'),
            this.addService(WeatherComponent),
            this.addWidget(WidgetCurrentWeatherComponent),
            this.addWidget(WidgetWeatherForecastComponent),
            this.addService(YoutubeComponent),
            this.addWidget(WidgetYoutubeChannelComponent),
            this.addWidget(WidgetYoutubeVideoComponent),
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
