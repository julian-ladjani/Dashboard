import {WidgetComponent} from '../widget/widget.component';
import {OnInit} from '@angular/core';

export class WeatherComponent extends WidgetComponent implements OnInit {

    constructor() {
        super();
    }

    static getServiceLabel() {
        return 'weather';
    }

    ngOnInit() {
    }
}
