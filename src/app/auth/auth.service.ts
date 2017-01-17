import {Injectable} from '@angular/core';
import {AppService} from "../app.service";
import {Http} from "@angular/http";

import "rxjs/add/operator/toPromise";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AuthService {
    token: string;
    username: string;
    email: string;
    url: string = 'auth';
    isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private globals: AppService,
                private http: Http) {

        if (window.sessionStorage.getItem('user_info')) {

            const userInfo = JSON.parse(window.sessionStorage.getItem('user_info'));
            this.token = userInfo.token;
            this.username = userInfo.username;
            this.email = userInfo.email;
            this.isAuthenticated.next(true);
        }
    }

    getToken(): string {
        return this.token;
    }

    signUp(formData): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/signup/`;

        return this.http.post(url, formData)
            .toPromise()
            .then(res => res)
    }

    logIn(formData): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/login/`;

        return this.http.post(url, formData)
            .toPromise()
            .then(res => {
                const jsonRes = res.json();

                if (!jsonRes.token) {
                    return false
                }

                this.token = jsonRes.token;
                this.username = jsonRes.username;
                this.email = jsonRes.email;

                window.sessionStorage.setItem('user_info', JSON.stringify({
                    token: jsonRes.token,
                    username: jsonRes.username,
                    email: jsonRes.email
                }));

                this.isAuthenticated.next(true);

                return true;
            })
    }

    logout() {

        this.token = '';
        this.username = '';
        this.email = '';
        window.sessionStorage.removeItem('user_info');
        this.isAuthenticated.next(false);
    }
}
