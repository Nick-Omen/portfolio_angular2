import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../../app.service";
import {Work} from "./work";
import "rxjs/add/operator/toPromise";

@Injectable()
export class WorksService {

    url: string = 'works';

    constructor(private globals: AppService,
                private http: Http) {
    }

    getWorks(): Promise<Work[]> {

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.get(url)
            .toPromise()
            .then(res => res.json() as Work[])
    }

    addWork(formData): Promise<Work> {

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.post(url, formData)
            .toPromise()
            .then(res => res.json() as Work)
    }

    modifyWork(formData: Work): Promise<Work> {

        const url = `${this.globals.apiUrl}/${this.url}/${formData.id}/`;

        return this.http.put(url, formData)
            .toPromise()
            .then(res => res.json())
    }

    removeWork(id: number): Promise<any> {

        const url = `${this.globals.apiUrl}/${this.url}/${id}`;

        return this.http.delete(url)
            .toPromise()
            .then(res => res.json())
    }
}
