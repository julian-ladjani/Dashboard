import {AngularSvgIconModule} from 'angular-svg-icon';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GridsterModule} from 'angular-gridster2';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginPageComponent} from './components/login/login-page.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {ResizableModule} from 'angular-resizable-element';
import {RouterModule, Routes} from '@angular/router';

import {WidgetBarComponent} from './components/widget-bar/widget-bar.component';
import {WidgetComponent} from './components/widgets/widget/widget.component';
import {WidgetContainerComponent} from './components/widgets/widget-container.component';
import {WidgetCurrentWeatherComponent} from './components/widgets/weather/widget-current-weather/widget-current-weather.component';
import {WidgetDirective} from './components/widgets/widget.directive';
import {WidgetEpitechMessageComponent} from './components/widgets/epitech/widget-epitech-message/widget-epitech-message.component';
import {WidgetEpitechPartnerComponent} from './components/widgets/epitech/widget-epitech-partner/widget-epitech-partner.component';
import {WidgetFavoritePokemonComponent} from './components/widgets/pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';
import {WidgetNasaImageOfTheDayComponent} from './components/widgets/nasa/widget-nasa-image-of-the-day/widget-nasa-image-of-the-day.component';
import {WidgetNasaMarsPhotoComponent} from './components/widgets/nasa/widget-nasa-mars-photo/widget-nasa-mars-photo.component';
import {WidgetPokemonBlindtestComponent} from './components/widgets/pokemon/widget-pokemon-blindtest/widget-pokemon-blindtest.component';
import {WidgetPokemonTypeComponent} from './components/widgets/pokemon/widget-pokemon-type/widget-pokemon-type.component';
import {WidgetWeatherForecastComponent} from './components/widgets/weather/widget-weather-forecast/widget-weather-forecast.component';
import {WidgetYoutubeChannelComponent} from './components/widgets/youtube/widget-youtube-channel/widget-youtube-channel.component';
import {WidgetYoutubeVideoComponent} from './components/widgets/youtube/widget-youtube-video/widget-youtube-video.component';
import {WigdetSettingsComponent} from './components/widgets/widget-settings/wigdet-settings.component';
import { WidgetPokemonTeamComponent } from './components/widgets/pokemon/widget-pokemon-team/widget-pokemon-team.component';
import { WidgetEpitechPlanningComponent } from './components/widgets/epitech/widget-epitech-planning/widget-epitech-planning.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    WidgetBarComponent,
    HomeComponent,
    WidgetContainerComponent,
    WigdetSettingsComponent,
    WidgetFavoritePokemonComponent,
    WidgetComponent,
    WidgetDirective,
    WidgetCurrentWeatherComponent,
    WidgetWeatherForecastComponent,
    WidgetNasaImageOfTheDayComponent,
    WidgetPokemonBlindtestComponent,
    WidgetPokemonTypeComponent,
    WidgetEpitechMessageComponent,
    WidgetEpitechPartnerComponent,
    WidgetEpitechPlanningComponent,
    WidgetNasaMarsPhotoComponent,
    WidgetYoutubeChannelComponent,
    WidgetYoutubeVideoComponent,
    WidgetPokemonTeamComponent,
    WidgetEpitechPlanningComponent
  ],
  entryComponents: [
      WigdetSettingsComponent,
      WidgetComponent,
      WidgetFavoritePokemonComponent,
      WidgetCurrentWeatherComponent,
      WidgetWeatherForecastComponent,
      WidgetNasaImageOfTheDayComponent,
      WidgetPokemonBlindtestComponent,
      WidgetPokemonTeamComponent,
      WidgetPokemonTypeComponent,
      WidgetEpitechMessageComponent,
      WidgetEpitechPartnerComponent,
      WidgetEpitechPlanningComponent,
      WidgetNasaMarsPhotoComponent,
      WidgetYoutubeChannelComponent,
      WidgetYoutubeVideoComponent
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      ),
      HttpClientModule,
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      AngularSvgIconModule,
      NgbModule,
      ResizableModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatDialogModule,
      MatCardModule,
      MatIconModule,
      MatTreeModule,
      MatTabsModule,
      MatListModule,
      MatAutocompleteModule,
      MatChipsModule,
      MatProgressBarModule,
      GridsterModule,
      CarouselModule,
      WavesModule,
      ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
