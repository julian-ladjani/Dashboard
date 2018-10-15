import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';
import {$} from 'jquery';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-widget-bar',
    templateUrl: './widget-bar.component.html',
    styleUrls: ['./widget-bar.component.scss'],
})

export class WidgetBarComponent implements OnInit {
    nav = [];
    navBarWidth = '250px';

    constructor() {
            this.nav = [this.newTab(`Pokemons`, 'assets/icons/pokemon.svg', '/pokemons'),
            this.newTab(`Meteo`, 'assets/icons/basic.svg', '/meteo'),
            this.newTab(`Youtube`, 'assets/icons/basic.svg', '/youtube'),
            this.newTab(`Twitter`, 'assets/icons/basic.svg', '/twitter')];
    }

    ngOnInit() {
    }

    newTab(name, svg, link) {
        return {name: name, svglink: svg, link: link};
    }

    onResizeEnd(event: ResizeEvent): void {
        console.log('Element was resized', event);
        this.navBarWidth = event.rectangle.right + 'px';
        console.log('resize');
    }
}