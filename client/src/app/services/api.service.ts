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

    static getHeaders() {
       const header = new HttpHeaders();
       if (window.localStorage.getItem('session')) {
           const token = JSON.parse(window.localStorage.getItem('session')).signatureToken;
           header.set('Authorization', token);
       }
       return header;
    }

    apiGet(path) {
        const headers = ApiService.getHeaders();

        return this.http.get(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true}).toPromise();
    }

    apiPost(path, data) {
        const headers = ApiService.getHeaders();

        return this.http.post(`${this.apiUrl}${path}`, data, {headers: headers, withCredentials: true}).toPromise();
    }

    apiDelete(path, body) {
        const headers = ApiService.getHeaders();

        return this.http.delete(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true}).toPromise();
    }
}
