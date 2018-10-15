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
import { WidgetComponent } from './components/widget/widget.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const appRoutes: Routes = [
    { path: '',
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
    WidgetComponent,
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
      MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
