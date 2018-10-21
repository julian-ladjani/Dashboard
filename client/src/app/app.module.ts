import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './components/login/login-page.component';
import { WidgetBarComponent } from './components/widget-bar/widget-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResizableModule } from 'angular-resizable-element';
import { HomeComponent } from './components/home/home.component';
import { WidgetContainerComponent } from './components/widgets/widget-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule} from '@angular/material';
import { WigdetSettingsComponent } from './components/widgets/widget-settings/wigdet-settings.component';
import { WidgetFavoritePokemonComponent } from './components/widgets/pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';
import { WidgetComponent } from './components/widgets/widget/widget.component';
import { WidgetDirective } from './components/widgets/widget.directive';
import {MatCardModule} from '@angular/material/card';
import {GridsterModule} from 'angular-gridster2';
import {WidgetCurrentWeatherComponent} from './components/widgets/weather/widget-current-weather/widget-current-weather.component';
import { WidgetWeatherForecastComponent } from './components/widgets/weather/widget-weather-forecast/widget-weather-forecast.component';
import { WidgetNasaImageOfTheDayComponent } from './components/widgets/nasa/widget-nasa-image-of-the-day/widget-nasa-image-of-the-day.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
import { WidgetPokemonBlindtestComponent } from './components/widgets/pokemon/widget-pokemon-blindtest/widget-pokemon-blindtest.component';
import { WidgetPokemonTypeComponent } from './components/widgets/pokemon/widget-pokemon-type/widget-pokemon-type.component';
import { WidgetEpitechMessageComponent } from './components/widgets/epitech/widget-epitech-message/widget-epitech-message.component';
import { WidgetEpitechPartnerComponent } from './components/widgets/epitech/widget-epitech-partner/widget-epitech-partner.component';
import { WidgetNasaMarsPhotoComponent } from './components/widgets/nasa/widget-nasa-mars-photo/widget-nasa-mars-photo.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

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
    WidgetNasaMarsPhotoComponent
  ],
  entryComponents: [
      WigdetSettingsComponent,
      WidgetComponent,
      WidgetFavoritePokemonComponent,
      WidgetCurrentWeatherComponent,
      WidgetWeatherForecastComponent,
      WidgetNasaImageOfTheDayComponent,
      WidgetPokemonBlindtestComponent,
      WidgetPokemonTypeComponent,
      WidgetEpitechMessageComponent,
      WidgetEpitechPartnerComponent,
      WidgetNasaMarsPhotoComponent
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
      MatListModule,
      MatAutocompleteModule,
      GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
