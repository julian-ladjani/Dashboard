import { Component, OnInit } from '@angular/core';
import {EpitechComponent} from '../epitech-component';

@Component({
  selector: 'app-widget-epitech-planning',
  templateUrl: './widget-epitech-planning.component.html',
  styleUrls: ['./widget-epitech-planning.component.scss']
})
export class WidgetEpitechPlanningComponent extends EpitechComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
