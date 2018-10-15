import { Component, OnInit } from '@angular/core';
import {WidgetContainerComponent} from '../widget/widget-container.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }
  widgets: Array<WidgetContainerComponent> = [];

  ngOnInit() {
  }

  addWidget() {
    this.widgets.push(new WidgetContainerComponent(this.matDialog));
  }
}
