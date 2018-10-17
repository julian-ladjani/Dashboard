import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {WidgetFactoryService} from '../../services/widget-factory.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(public matDialog: MatDialog, public factory: WidgetFactoryService, private router: Router) { }
  widgets: Array<{service: String, widget: String, title: String, icon: String}> = [];
  resolver: ComponentFactoryResolver;

  ngOnInit() {
  }

  addWidget($event) {
    this.widgets.push($event);
  }

  logout() {
      window.localStorage.setItem('token', '');
      this.router.navigateByUrl('/login');
  }
}
