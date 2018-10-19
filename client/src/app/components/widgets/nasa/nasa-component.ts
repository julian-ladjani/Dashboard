import {WidgetComponent} from '../widget/widget.component';
import {OnInit} from '@angular/core';

export class NasaComponent extends WidgetComponent implements OnInit {

    constructor() {
        super();
    }

    static getServiceLabel() {
        return 'nasa';
    }

    ngOnInit() {
    }
}