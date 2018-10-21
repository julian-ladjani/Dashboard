import {WidgetComponent} from '../widget/widget.component';
import {OnInit} from '@angular/core';

export class EpitechComponent extends WidgetComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'EPITECH';
    }

    static getServiceLabel() {
        return 'epitech';
    }

    ngOnInit() {
    }
}
