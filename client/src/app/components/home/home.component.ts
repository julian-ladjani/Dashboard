import { Component, OnInit } from '@angular/core';
import {WidgetComponent} from '../widget/widget.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  widgets: Array<WidgetComponent> = [];

  ngOnInit() {
  }

  addWidget() {
    this.widgets.push(new WidgetComponent());
  }
}
