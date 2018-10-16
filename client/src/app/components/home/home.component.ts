import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {WidgetContainerComponent} from '../widgets/widget-container.component';
import {MatDialog} from '@angular/material';
import {WidgetFactoryService} from '../../services/widget-factory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(public matDialog: MatDialog, public factory: WidgetFactoryService) { }
  widgets: Array<{String}> = [];
  resolver: ComponentFactoryResolver;

  ngOnInit() {
  }

  addWidget(name) {
    this.widgets.push(name);
  }
}
