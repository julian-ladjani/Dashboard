import {Component, Input, OnInit} from '@angular/core';
import {NasaComponent} from '../nasa-component';
import {SettingsContainer} from '../../../../objects/settings-container';

@Component({
  selector: 'app-widget-nasa-image-of-the-day',
  templateUrl: './widget-nasa-image-of-the-day.component.html',
  styleUrls: ['./widget-nasa-image-of-the-day.component.scss']
})
export class WidgetNasaImageOfTheDayComponent extends NasaComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Image of the Day';
    }

    static getWidgetLabel() {
        return 'apod';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {date: '2018-10-16', hd: false},
        {title: 'Image from the NASA', explanation: 'Description.',
            url: 'https://apod.nasa.gov/apod/image/1810/JupiterUV_HubbleSchmidt_1280.jpg'}
    );

    ngOnInit() {
        const currentTime = new Date();
        this.settings.params['date'] = '' + currentTime.getFullYear() + '-' + (currentTime.getMonth() + 1) + '-' + currentTime.getDate();
    }

}

