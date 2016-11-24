import {Injectable} from '@angular/core';
import {Language} from "./language";
import {Http} from "@angular/http";
import {AppService} from "../../app.service";
import "rxjs/add/operator/toPromise";

@Injectable()
export class LanguagesService {

    url: string = 'languages';

    constructor(private globals: AppService,
                private http: Http) {
    }

    getLanguages(): Promise<Language[]> {

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.get(url)
            .toPromise()
            .then(res => res.json() as Language[])
    }

    addLanguage(formData: Language): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.post(url, formData)
            .toPromise()
            .then(res => res.json())
    }

    modifyLanguage(id: number, formData: Language): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/${id}/`;

        return this.http.put(url, formData)
            .toPromise()
            .then(res => res.json())
    }

    removeLanguage(id: number): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/${id}`;

        return this.http.delete(url)
            .toPromise()
            .then(res => res.json())
    }
}
