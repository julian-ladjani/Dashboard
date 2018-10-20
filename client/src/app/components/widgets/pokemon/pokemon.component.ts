import {OnInit} from '@angular/core';
import {WidgetComponent} from '../widget/widget.component';

export class PokemonComponent extends WidgetComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Pokemon';
    }

    static getServiceLabel() {
        return 'pokemon';
    }

    ngOnInit() {
    }
}
