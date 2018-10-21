import {Component, Input, OnInit} from '@angular/core';
import {YoutubeComponent} from '../youtube-component';
import {SettingsContainer} from '../../../../objects/settings-container';

@Component({
  selector: 'app-widget-youtube-channel',
  templateUrl: './widget-youtube-channel.component.html',
  styleUrls: ['./widget-youtube-channel.component.scss']
})
export class WidgetYoutubeChannelComponent extends YoutubeComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Channel Informations';
    }

    static getWidgetLabel() {
        return 'channelInfo';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {channelUrl: 'https://www.youtube.com/user/EpitechOfficiel'},
        {}
    );
}
