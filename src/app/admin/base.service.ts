import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {AppService} from "../app.service";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class BaseService {

    protected url: string;

    constructor(public globals: AppService,
                public http: Http,
                public authService: AuthService,
                public router: Router) {
    }

    private getHeaders(): Headers {

        const token = this.authService.getToken();
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        if (token) {

            headers.append('Authorization', 'Token ' + token);
        }

        return headers;
    }

    private getRequestOptions(): RequestOptions {

        return new RequestOptions({
            headers: this.getHeaders()
        })
    }

    get(): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.get(url)
            .toPromise()
            .then(res => res.json())
            .catch(this.errorHandler)
    }

    add(formData): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.post(url, formData, this.getRequestOptions())
            .toPromise()
            .then(res => res.json())
            .catch(this.errorHandler)
    }

    modify(formData): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/${formData.id}/`;

        return this.http.put(url, formData, this.getRequestOptions())
            .toPromise()
            .then(res => res.json())
            .catch(this.errorHandler)
    }

    del(id: number): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/${id}`;

        return this.http.delete(url, this.getRequestOptions())
            .toPromise()
            .then(res => res.json())
            .catch(this.errorHandler)
    }

    errorHandler() {

        this.authService.logout();
        this.router.navigate(['/']);
    }
}
