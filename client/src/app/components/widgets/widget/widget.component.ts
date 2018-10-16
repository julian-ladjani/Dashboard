import {Component, Input, OnInit} from '@angular/core';
import {WidgetVariable} from '../../../objects/widget-variable';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

    @Input() settings: WidgetVariable[];
    constructor() { }

  ngOnInit() {
  }

}
