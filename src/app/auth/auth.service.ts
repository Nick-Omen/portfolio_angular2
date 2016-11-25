import {Injectable} from '@angular/core';
import {AppService} from "../app.service";
import {Http} from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthService {
    token: string;
    username: string;
    email: string;
    url: string = 'auth';

    constructor(private globals: AppService,
                private http: Http) {

        if (window.sessionStorage.getItem('user_info')) {

            const userInfo = JSON.parse(window.sessionStorage.getItem('user_info'));
            this.token = userInfo.token;
            this.username = userInfo.username;
            this.email = userInfo.email;
        }
    }

    isAuthenticated(): boolean {
        return !!this.token
    }

    getToken(): string {
        return this.token;
    }

    signUp(formData): Promise<boolean> {

        const url = `${this.globals.apiUrl}/${this.url}/signup/`;

        return this.http.post(url, formData)
            .toPromise()
            .then(res => res)
    }

    signIn(formData): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/signin/`;

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

                return true;
            })
    }
}
