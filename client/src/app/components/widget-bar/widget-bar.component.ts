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
            this.nav = [this.newTab(`NASA`, 'assets/icons/basic.svg', '/nasa'),
            this.newTab(`Pokemon`, 'assets/icons/pokemon.svg', '/pokemon'),
            this.newTab(`Steam`, 'assets/icons/basic.svg', '/steam'),
            this.newTab(`Twitch`, 'assets/icons/basic.svg', '/twitch'),
            this.newTab(`Twitter`, 'assets/icons/twitter.svg', '/twitter'),
            this.newTab(`Weather`, 'assets/icons/weather.svg', '/weather'),
            this.newTab(`Youtube`, 'assets/icons/youtube.svg', '/youtube')];
    }

    ngOnInit() {
    }

    newTab(name, svg, link) {
        return {name: name, svglink: svg, link: link};
    }

    onResizeEnd(event: ResizeEvent): void {
        this.navBarWidth = event.rectangle.right + 'px';
    }
}