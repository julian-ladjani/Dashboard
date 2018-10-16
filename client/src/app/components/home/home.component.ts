import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {WidgetContainerComponent} from '../widgets/widget-container.component';
import {MatDialog} from '@angular/material';
import {WidgetService} from '../../services/widget.service';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  loginService: LoginService;
  widgets: Array<{String}> = [];
  resolver: ComponentFactoryResolver;

  constructor(public matDialog: MatDialog, public factory: WidgetService, private http: HttpClient, private router: Router) {
      this.loginService = new LoginService(http, router);
  }

  ngOnInit() {
  }

  addWidget(name) {
    this.widgets.push(name);
  }

  logout() {
      this.loginService.logout().then(responce => {
          if (responce['success']) {
              window.localStorage.setItem('token', '');
              this.router.navigateByUrl('/login');
          }
      });
  }
}
