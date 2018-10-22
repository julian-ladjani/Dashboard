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
        {snippet: {publishedAt: '2000-01-01T00:00:00.000Z', thumbnails: {default:
            {url: 'https://yt3.ggpht.com/a-/AN66SAzCGPRasUnDWC7e1wMW9PeYx-8UZV-_w0dd-g=s88-mo-c-c0xffffffff-rj-k-no'}},
                title: 'Channel Name'}, statistics: {commentCount: 0, subscriberCount: 0, videoCount: 0, viewCount: 0}}
    );
}
