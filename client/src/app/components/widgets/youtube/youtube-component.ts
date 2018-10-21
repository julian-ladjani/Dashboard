import {WidgetComponent} from '../widget/widget.component';
import {OnInit} from '@angular/core';

export class YoutubeComponent extends WidgetComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Youtube';
    }

    static getServiceLabel() {
        return 'youtube';
    }

    ngOnInit() {
    }
}
