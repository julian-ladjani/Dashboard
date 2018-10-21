import {Component, Input, OnInit} from '@angular/core';
import {YoutubeComponent} from '../youtube-component';
import {SettingsContainer} from '../../../../objects/settings-container';

@Component({
    selector: 'app-widget-youtube-video',
    templateUrl: './widget-youtube-video.component.html',
    styleUrls: ['./widget-youtube-video.component.scss']
})
export class WidgetYoutubeVideoComponent extends YoutubeComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Video Informations';
    }

    static getWidgetLabel() {
        return 'videoInfo';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {videoUrl: 'https://www.youtube.com/watch?v=MQP9MWCP0hk'},
        {}
    );
}
