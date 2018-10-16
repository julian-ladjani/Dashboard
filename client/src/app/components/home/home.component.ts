import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {WidgetContainerComponent} from '../widgets/widget-container.component';
import {MatDialog} from '@angular/material';
import {WidgetService} from '../../services/widget.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(public matDialog: MatDialog, public factory: WidgetService, private router: Router) { }
  widgets: Array<{String}> = [];
  resolver: ComponentFactoryResolver;

  ngOnInit() {
  }

  addWidget(name) {
    this.widgets.push(name);
  }

  logout() {
      window.localStorage.setItem('token', '');
      this.router.navigateByUrl('/login');
  }
}
