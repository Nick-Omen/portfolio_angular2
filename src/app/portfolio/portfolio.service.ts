import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Portfolio, PortfolioDetails} from './portfolio';
import {AppService} from '../app.service';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class PortfolioService {

    url: string = 'works';
    portfolioItems: Portfolio[] = [];
    portfolioDetails: PortfolioDetails[] = [];

    constructor(private globals: AppService,
                private http: Http) {
    }

    getPortfolioItems(): Promise<Portfolio[]> {

        if (this.portfolioItems && this.portfolioItems.length !== 0) {

            return new Promise(resolve => resolve(this.portfolioItems as Portfolio[]));
        }

        const url = `${this.globals.apiUrl}/${this.url}/`;

        return this.http.get(url)
            .toPromise()
            .then(res => {
                this.portfolioItems = res.json() as Portfolio[];
                return res.json() as Portfolio[];
            });
    }

    getPortfolioDetails(slug: any): Promise<PortfolioDetails> {

        const url = `${this.globals.apiUrl}/${this.url}/${slug}/`;

        return this.http.get(url)
            .toPromise()
            .then(res => {
                this.portfolioDetails[slug] = res.json() as PortfolioDetails;
                return res.json() as PortfolioDetails;
            });
    }
}
