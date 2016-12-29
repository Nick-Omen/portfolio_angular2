import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {AppService} from "../app.service";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class BaseService {

    url: string;

    constructor(public globals: AppService,
                public http: Http,
                public authService: AuthService) {
    }

    getHeaders(): Headers {

        const token = this.authService.getToken();

        if (token) {

            return new Headers({Authorization: 'Token ' + token});
        }

        return new Headers();
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

        return this.http.post(url, formData)
            .toPromise()
            .then(res => res.json())
            .catch(this.errorHandler)
    }

    modify(formData): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/${formData.id}/`;

        return this.http.put(url, formData)
            .toPromise()
            .then(res => res.json())
            .catch(this.errorHandler)
    }

    del(id: number): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/${id}`;

        return this.http.delete(url)
            .toPromise()
            .then(res => res.json())
            .catch(this.errorHandler)
    }

    errorHandler(res) {

        console.log(res);
    }
}
