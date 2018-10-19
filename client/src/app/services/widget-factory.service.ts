import { Injectable } from '@angular/core';
import {WidgetComponent} from '../components/widgets/widget/widget.component';
import {WidgetFavoritePokemonComponent} from '../components/widgets/pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';
import {WidgetCurrentWeatherComponent} from '../components/widgets/weather/widget-current-weather/widget-current-weather.component';
import {WidgetWeatherForecastComponent} from '../components/widgets/weather/widget-weather-forecast/widget-weather-forecast.component';
import {WidgetNasaImageOfTheDayComponent} from '../components/widgets/nasa/widget-nasa-image-of-the-day/widget-nasa-image-of-the-day.component';

@Injectable({
  providedIn: 'root'
})

export class WidgetFactoryService {
    getWidget(service, widget) {
        if (service === 'nasa') {
            if (widget === 'image') {
                return WidgetNasaImageOfTheDayComponent;
            }
        }
        if (service === 'pokemon') {
            if (widget === 'favorite') {
                return WidgetFavoritePokemonComponent;
            }
        }
        if (service === 'weather') {
            if (widget === 'current') {
                return WidgetCurrentWeatherComponent;
            }
            if (widget === 'forecast') {
                return WidgetWeatherForecastComponent;
            }
        }
        return WidgetComponent;
    }
}
