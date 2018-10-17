import {Component, OnInit} from '@angular/core';
import {WidgetComponent} from '../../widget/widget.component';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent extends WidgetComponent implements OnInit {

    constructor() {
        super();
    }

    static getServiceLabel() {
        return 'pokemon';
    }

    static getWidgetLabel() {
        return 'pokemon';
    }

    ngOnInit() {
    }
}
