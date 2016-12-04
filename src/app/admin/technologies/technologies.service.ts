import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../../app.service";
import {Technology} from "./technology";
import "rxjs/add/operator/toPromise";

@Injectable()
export class TechnologiesService {

    url: string = 'technologies';

    constructor(private globals: AppService,
                private http: Http) {
    }

    getTechnologies(): Promise<Technology[]> {

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.get(url)
            .toPromise()
            .then(res => res.json() as Technology[])
    }

    addTechnology(formData): Promise<Technology> {

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.post(url, formData)
            .toPromise()
            .then(res => res.json() as Technology)
    }

    modifyTechnology(formData: Technology): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/${formData.id}/`;

        return this.http.put(url, formData)
            .toPromise()
            .then(res => res.json())
    }

    removeTechnology(id: number): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/${id}`;

        return this.http.delete(url)
            .toPromise()
            .then(res => res.json())
    }

}
