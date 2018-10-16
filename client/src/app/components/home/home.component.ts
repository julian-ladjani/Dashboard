import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {WidgetContainerComponent} from '../widgets/widget-container.component';
import {MatDialog} from '@angular/material';
<<<<<<< HEAD
import {WidgetFactoryService} from '../../services/widget-factory.service';
=======
import {WidgetService} from '../../services/widget.service';
import {Router} from '@angular/router';
>>>>>>> 0b132e76a9a3871ec3900fa79475622066e0270e

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

<<<<<<< HEAD
  constructor(public matDialog: MatDialog, public factory: WidgetFactoryService) { }
=======
  constructor(public matDialog: MatDialog, public factory: WidgetService, private router: Router) { }
>>>>>>> 0b132e76a9a3871ec3900fa79475622066e0270e
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
