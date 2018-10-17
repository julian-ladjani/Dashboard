import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {WidgetFactoryService} from '../../services/widget-factory.service';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  widgets: Array<{service: String, widget: String, title: String, icon: String}> = [];
  loginService: LoginService;
  resolver: ComponentFactoryResolver;

  constructor(public matDialog: MatDialog, public factory: WidgetFactoryService, private http: HttpClient, private router: Router) {
      this.loginService = new LoginService(http, router);
  }

  ngOnInit() {
  }

  addWidget($event) {
    this.widgets.push($event);
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
