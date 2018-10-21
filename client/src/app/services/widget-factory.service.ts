import { Injectable } from '@angular/core';
import {WidgetComponent} from '../components/widgets/widget/widget.component';
import {WidgetFavoritePokemonComponent} from '../components/widgets/pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';
import {WidgetCurrentWeatherComponent} from '../components/widgets/weather/widget-current-weather/widget-current-weather.component';
import {WidgetWeatherForecastComponent} from '../components/widgets/weather/widget-weather-forecast/widget-weather-forecast.component';
import {WidgetNasaImageOfTheDayComponent} from '../components/widgets/nasa/widget-nasa-image-of-the-day/widget-nasa-image-of-the-day.component';
import {WidgetPokemonBlindtestComponent} from '../components/widgets/pokemon/widget-pokemon-blindtest/widget-pokemon-blindtest.component';
import {WidgetPokemonTypeComponent} from '../components/widgets/pokemon/widget-pokemon-type/widget-pokemon-type.component';
import {WidgetEpitechMessageComponent} from '../components/widgets/epitech/widget-epitech-message/widget-epitech-message.component';
import {WidgetEpitechPartnerComponent} from '../components/widgets/epitech/widget-epitech-partner/widget-epitech-partner.component';
import {WidgetNasaMarsPhotoComponent} from '../components/widgets/nasa/widget-nasa-mars-photo/widget-nasa-mars-photo.component';
import {WidgetYoutubeChannelComponent} from '../components/widgets/youtube/widget-youtube-channel/widget-youtube-channel.component';
import {WidgetYoutubeVideoComponent} from '../components/widgets/youtube/widget-youtube-video/widget-youtube-video.component';

@Injectable({
  providedIn: 'root'
})

export class WidgetFactoryService {
    getWidget(service, widget) {
        if (service === 'epitech') {
            if (widget === 'messages') {
                return WidgetEpitechMessageComponent;
            }
            if (widget === 'partner') {
                return WidgetEpitechPartnerComponent;
            }
        }
        if (service === 'nasa') {
            if (widget === 'apod') {
                return WidgetNasaImageOfTheDayComponent;
            }
            if (widget === 'marsPhotos') {
                return WidgetNasaMarsPhotoComponent;
            }
        }
        if (service === 'pokemon') {
            if (widget === 'favorite') {
                return WidgetFavoritePokemonComponent;
            }
            if (widget === 'blind') {
                return WidgetPokemonBlindtestComponent;
            }
            if (widget === 'type') {
                return WidgetPokemonTypeComponent;
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
        if (service === 'youtube') {
            if (widget === 'channelInfo') {
                return WidgetYoutubeChannelComponent;
            }
            if (widget === 'videoInfo') {
                return WidgetYoutubeVideoComponent;
            }
        }
        return WidgetComponent;
    }
}
