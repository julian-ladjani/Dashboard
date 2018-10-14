import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-widget-bar',
    templateUrl: './widget-bar.component.html',
    styleUrls: ['./widget-bar.component.scss'],
})

export class WidgetBarComponent implements OnInit {
    nav = [];
    navBarSizes = {open : '250px', close : '65px'};
    navBarWidth = this.navBarSizes.open;

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

    changeWidth = function() {
        this.navBarWidth = this.navBarWidth === this.navBarSizes.close ? this.navBarSizes.open : this.navBarSizes.close;
        this.onSizeChange.emit(this.navBarWidth);
    }
}