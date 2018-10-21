import {Component, Input, OnInit} from '@angular/core';
import {SettingsContainer} from '../../../../objects/settings-container';
import {EpitechComponent} from '../epitech-component';

@Component({
  selector: 'app-widget-epitech-message',
  templateUrl: './widget-epitech-message.component.html',
  styleUrls: ['./widget-epitech-message.component.scss']
})
export class WidgetEpitechMessageComponent extends EpitechComponent implements OnInit {

    constructor() {
        super();
    }

    static getTitle() {
        return 'Notifications';
    }

    static getWidgetLabel() {
        return 'messages';
    }

    htmlToPlaintext(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {autologin: '', message: 'message'},
        {}
    );

    ngOnInit() {
    }
}
