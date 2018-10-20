import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {SettingsContainer} from '../objects/settings-container';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ApiService {
    apiUrl: string;

    constructor(private http: HttpClient, private router: Router) {
        this.apiUrl = environment.apiUrl;
    }

    static getHeaders() {
       if (window.localStorage.getItem('token')) {
          const token = window.localStorage.getItem('token');
           return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': token });
       }
       return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    }

    apiGet(path = '') {
        const headers = ApiService.getHeaders();

        return this.http.get(`${this.apiUrl}${path}`, {headers: headers}).toPromise();
    }

    apiPost(path, data) {
        const headers = ApiService.getHeaders();

        return this.http.post(`${this.apiUrl}${path}`, data, {headers: headers}).toPromise();
    }

    apiDelete(path) {
        const headers = ApiService.getHeaders();

        return this.http.delete(`${this.apiUrl}${path}`, {headers: headers}).toPromise();
    }

    postWidget(settings: SettingsContainer, serviceLabel: string = null, widgetLabel: string = null) {
        if (serviceLabel == null || widgetLabel == null) {
            return;
        }
        const prefix = '/' + serviceLabel + '/' + widgetLabel + '/';
        const path = prefix + ((settings.id.length === 0) ? '' : (settings.id + '/params'));
        this.apiPost(path, settings.params).then(responsePost => {
            if (responsePost['success'] === true) {
                settings.connected = true;
                settings.id = responsePost['id'];
                this.getWidget(settings, prefix + settings.id);
            }
        });
    }

    getWidget(settings: SettingsContainer, path: string) {
        this.apiGet(path).then( response => {
            if (response && response['infos'] && response['infos'] !== false) {
                settings.infos = response['infos'];
                settings.state = 'ok';
            } else {
                settings.state = 'ko';
            }
        }).catch( reason => {
            settings.state = 'ko';
        });
    }

    getAllWidgets() {
        return this.apiGet('localhost:8080/');
    }

    deleteWidget(path, settings: SettingsContainer) {
        return this.apiDelete(path);
    }
}
