import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class LoginService extends ApiService {
    constructor(http: HttpClient, router: Router) {
      super(http, router);
    }

    login(data) {
        return this.apiPost('/auth/local/in', data);
    }

    signUp(data) {
        return this.apiPost('/auth/local/up', data);
    }

    logout() {
        return this.apiGet('/auth/logout');
    }
}
