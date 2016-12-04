import {Injectable} from '@angular/core';
import {WorkType} from "./work-type";
import {AppService} from "../app.service";
import {Http} from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class WorkTypeService {
    url: string = 'work-types';

    constructor(private globals: AppService,
                private http: Http) {
    }

    getWorkTypes(): Promise<WorkType[]> {

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.get(url)
            .toPromise()
            .then(res => res.json() as WorkType[])
    }
}
