import {Injectable} from '@angular/core';
import {AppService} from "../app.service";
import {Http} from "@angular/http";
import {Technology} from "./technology";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PortfolioFilterService {

    url: string = 'technologies';

    constructor(private globals: AppService,
                private http: Http) {
    }

    getTechnologies(): Promise<Technology[]> {

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.get(url)
            .toPromise()
            .then(res => res.json() as Technology[]);
    }
}
