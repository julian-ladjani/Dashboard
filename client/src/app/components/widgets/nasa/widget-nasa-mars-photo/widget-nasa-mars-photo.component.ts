import {Component, Input, OnInit} from '@angular/core';
import {NasaComponent} from '../nasa-component';
import {SettingsContainer} from '../../../../objects/settings-container';

@Component({
  selector: 'app-widget-nasa-mars-photo',
  templateUrl: './widget-nasa-mars-photo.component.html',
  styleUrls: ['./widget-nasa-mars-photo.component.scss']
})
export class WidgetNasaMarsPhotoComponent extends NasaComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Images of Mars';
    }

    static getWidgetLabel() {
        return 'marsPhotos';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {martianDay: 1000, camera: 'NAVCAM', page: 1, rover: 'Curiosity'},
        {}
    );

    ngOnInit() {
    }

}
