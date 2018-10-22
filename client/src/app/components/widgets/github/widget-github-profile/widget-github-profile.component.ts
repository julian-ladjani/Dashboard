import {Component, Input, OnInit} from '@angular/core';
import {SettingsContainer} from '../../../../objects/settings-container';
import {GithubComponent} from '../github-component';

@Component({
  selector: 'app-widget-github-profile',
  templateUrl: './widget-github-profile.component.html',
  styleUrls: ['./widget-github-profile.component.scss']
})
export class WidgetGithubProfileComponent extends GithubComponent implements OnInit {

    constructor() {
        super();
    }

    @Input() settings: SettingsContainer = new SettingsContainer(
        {token: '', user: 'yannicksuc'},
        [{
            login: 'yannicksuc',
            avatar: 'https://avatars1.githubusercontent.com/u/25967079?v=4',
            url: 'https://github.com/yannicksuc',
            bio: 'Student in Computer Science',
            location: 'Epitech Nancy',
            created_at: '2017-02-22T22:48:41Z',
            updated_at: '2018-10-08T16:12:59Z',
            repos: 8
        }]
    );

    static getTitle() {
        return 'Profile';
    }

    static getWidgetLabel() {
        return 'profile';
    }

    ngOnInit() {
    }

}
