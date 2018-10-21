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

    getLikeRatio() {
        return Math.round(parseInt(this.settings.infos.statistics.likeCount) * 100
            / (parseInt(this.settings.infos.statistics.likeCount) + parseInt(this.settings.infos.statistics.dislikeCount)));
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {videoUrl: 'https://www.youtube.com/watch?v=MQP9MWCP0hk'},
        {snippet: {channelTitle: 'Channel name', publishedAt: '2000-00-00T00:00:00.000Z',
                thumbnails: {default: {url: 'https://i.ytimg.com/vi/MQP9MWCP0hk/default.jpg'}}, title: 'Title of the video'},
            statistics: {commentCount: '0', dislikeCount: '0', likeCount: '0', viewCount: '0'}}
    );
}