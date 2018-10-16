import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {WidgetContainerComponent} from '../widgets/widget-container.component';
import {MatDialog} from '@angular/material';
import {WidgetService} from '../../services/widget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(public matDialog: MatDialog, public factory: WidgetService) { }
  widgets: Array<{String}> = [];
  resolver: ComponentFactoryResolver;

  ngOnInit() {
  }

  addWidget(name) {
    this.widgets.push(name);
  }
}
