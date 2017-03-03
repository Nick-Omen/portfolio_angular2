import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {AppService} from "../app.service";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

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

    patchFormDataWithImage(formData, fileName: string, fileList: FileList) {

        if (fileName && fileList.length > 0) {
            let newFormData = new FormData();
            for (let dKey in formData) {
                if (formData.hasOwnProperty(dKey)) {
                    newFormData.append(dKey, formData[dKey]);
                }
            }
            newFormData.append(fileName, fileList[0]);
            return newFormData;
        }
        return formData;
    }

    get(): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.get(url)
            .toPromise()
            .then(res => res.json())
            .catch(this.errorHandler)
    }

    add(formData, fileName: string, fileList: FileList): Promise<any> {

        formData = this.patchFormDataWithImage(formData, fileName, fileList);

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.post(url, formData, this.getRequestOptions())
            .toPromise()
            .then(res => res.json())
            .catch(this.errorHandler)
    }

    modify(formData, fileName: string, fileList: FileList): Promise<any> {

        formData = this.patchFormDataWithImage(formData, fileName, fileList);
        let id = formData.id || formData.get('id');

        const url = `${this.globals.apiUrl}/${this.url}/${id}/`;

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
