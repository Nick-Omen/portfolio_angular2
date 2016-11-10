import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {PortfolioThumb, Portfolio} from './portfolio';
import {AppService} from '../app.service';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class PortfolioService {

    url: string = 'works';
    portfolioThumbs: PortfolioThumb[];
    portfolioById: Portfolio[] = [];

    constructor(private globals: AppService,
                private http: Http) {
    }

    getPortfolioThumbs(): Promise<PortfolioThumb[]> {

        if(this.portfolioThumbs && this.portfolioThumbs.length !== 0) {

            return new Promise(resolve => resolve(this.portfolioThumbs as PortfolioThumb[]));
        }

        const url = `${this.globals.apiUrl}/${this.url}-thumb`;

        return this.http.get(url)
            .toPromise()
            .then(res => {
                this.portfolioThumbs = res.json() as PortfolioThumb[];
                return res.json() as PortfolioThumb[];
            });
    }

    getPortfolioById(id: number): Promise<Portfolio> {

        if(this.portfolioById.length !== 0 && this.portfolioById[id]) {

            return new Promise(resolve => resolve(this.portfolioById[id] as Portfolio));
        }

        const url = `${this.globals.apiUrl}/${this.url}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(res => {
                this.portfolioById[id] = res.json() as Portfolio;
                return res.json() as Portfolio;
            });
    }
}
