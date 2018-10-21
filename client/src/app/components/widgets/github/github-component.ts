import {WidgetComponent} from '../widget/widget.component';
import {OnInit} from '@angular/core';

export class GithubComponent extends WidgetComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'GitHub';
    }

    static getServiceLabel() {
        return 'github';
    }

    ngOnInit() {
    }
}
