import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {WidgetContainerComponent} from '../widgets/widget-container.component';
import {MatDialog} from '@angular/material';
import {WidgetService} from '../widgets/widget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public matDialog: MatDialog, private factory: WidgetService) { }
  widgets: Array<WidgetContainerComponent> = [];
  resolver: ComponentFactoryResolver;

  ngOnInit() {
  }

  addWidget() {
    this.widgets.push(new WidgetContainerComponent(this.matDialog, this.resolver));
  }
}
