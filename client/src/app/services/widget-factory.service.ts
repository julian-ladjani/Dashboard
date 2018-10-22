import { Injectable } from '@angular/core';
import {WidgetComponent} from '../components/widgets/widget/widget.component';
import {WidgetFavoritePokemonComponent} from '../components/widgets/pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';
import {WidgetCurrentWeatherComponent} from '../components/widgets/weather/widget-current-weather/widget-current-weather.component';
import {WidgetWeatherForecastComponent} from '../components/widgets/weather/widget-weather-forecast/widget-weather-forecast.component';
import {WidgetNasaImageOfTheDayComponent} from '../components/widgets/nasa/widget-nasa-image-of-the-day/widget-nasa-image-of-the-day.component';
import {WidgetPokemonBlindtestComponent} from '../components/widgets/pokemon/widget-pokemon-blindtest/widget-pokemon-blindtest.component';
import {WidgetPokemonTeamComponent} from '../components/widgets/pokemon/widget-pokemon-team/widget-pokemon-team.component';
import {WidgetPokemonTypeComponent} from '../components/widgets/pokemon/widget-pokemon-type/widget-pokemon-type.component';
import {WidgetEpitechMessageComponent} from '../components/widgets/epitech/widget-epitech-message/widget-epitech-message.component';
import {WidgetEpitechPartnerComponent} from '../components/widgets/epitech/widget-epitech-partner/widget-epitech-partner.component';
import {WidgetNasaMarsPhotoComponent} from '../components/widgets/nasa/widget-nasa-mars-photo/widget-nasa-mars-photo.component';
import {WidgetYoutubeChannelComponent} from '../components/widgets/youtube/widget-youtube-channel/widget-youtube-channel.component';
import {WidgetYoutubeVideoComponent} from '../components/widgets/youtube/widget-youtube-video/widget-youtube-video.component';
import {WidgetEpitechPlanningComponent} from '../components/widgets/epitech/widget-epitech-planning/widget-epitech-planning.component';
import {PokemonComponent} from '../components/widgets/pokemon/pokemon.component';
import {YoutubeComponent} from '../components/widgets/youtube/youtube-component';
import {EpitechComponent} from '../components/widgets/epitech/epitech-component';
import {NasaComponent} from '../components/widgets/nasa/nasa-component';
import {WeatherComponent} from '../components/widgets/weather/weather-component';
import {GithubComponent} from '../components/widgets/github/github-component';
import {WidgetGithubReposComponent} from '../components/widgets/github/widget-github-repos/widget-github-repos.component';
import {WidgetEpitechProfileComponent} from '../components/widgets/epitech/widget-epitech-profile/widget-epitech-profile.component';

@Injectable({
  providedIn: 'root'
})

export class WidgetFactoryService {
    services = [
        EpitechComponent,
        GithubComponent,
        NasaComponent,
        PokemonComponent,
        WeatherComponent,
        YoutubeComponent
    ];
    widgets = [
        WidgetNasaImageOfTheDayComponent,
        WidgetNasaMarsPhotoComponent,
        WidgetFavoritePokemonComponent,
        WidgetPokemonTeamComponent,
        WidgetPokemonBlindtestComponent,
        WidgetPokemonTypeComponent,
        WidgetEpitechProfileComponent,
        WidgetEpitechMessageComponent,
        WidgetEpitechPartnerComponent,
        WidgetEpitechPlanningComponent,
        WidgetCurrentWeatherComponent,
        WidgetWeatherForecastComponent,
        WidgetYoutubeChannelComponent,
        WidgetYoutubeVideoComponent,
        WidgetGithubReposComponent
    ];

    getWidget(srcService, srcWidget) {
        for (const widget of this.widgets) {
            if (widget.getServiceLabel() === srcService && widget.getWidgetLabel() === srcWidget)
                return widget;
        }
        return WidgetComponent;
    }
}