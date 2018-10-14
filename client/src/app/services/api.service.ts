import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ApiService {
    apiUrl: string;

    constructor(private http: HttpClient, private router: Router) {
        this.apiUrl = environment.apiUrl;
    }

    static getHeaders(method, path, data) {
        return new HttpHeaders();
    }

    apiGet(path) {
        const headers = ApiService.getHeaders('GET', path, '');

        return this.http.get(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true}).toPromise();
    }

    apiPost(path, data) {
        const headers = ApiService.getHeaders('POST', path, '');

        return this.http.post(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true}, data).toPromise();
    }

    apiDelete(path, body) {
        const headers = ApiService.getHeaders('DELETE', path, body);

        return this.http.delete(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true}).toPromise();
    }
}
