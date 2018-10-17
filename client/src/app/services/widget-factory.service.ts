import { Injectable } from '@angular/core';
import {WidgetComponent} from '../components/widgets/widget/widget.component';
import {WidgetFavoritePokemonComponent} from '../components/widgets/pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';
import {WidgetCurrentWeatherComponent} from '../components/widgets/weather/widget-current-weather/widget-current-weather.component';

@Injectable({
  providedIn: 'root'
})

export class WidgetFactoryService {
    getWidget(service, widget) {
        if (service === 'pokemon') {
            if (widget === 'favorite') {
                return WidgetFavoritePokemonComponent;
            }
        }
        if (service === 'weather') {
            if (widget === 'current') {
                return WidgetCurrentWeatherComponent;
            }
        }
        return WidgetComponent;
    }
}