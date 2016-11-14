import {Component, OnInit} from '@angular/core';
import {PortfolioService} from "../portfolio/portfolio.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {PortfolioDetails} from "../portfolio/portfolio";

@Component({
    selector: 'app-portfolio-detail',
    templateUrl: './portfolio-detail.component.html',
    styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {

    portfolioDetails: PortfolioDetails;
    private subscription: Subscription;

    constructor(private ps: PortfolioService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.subscription = this.activatedRoute.params
            .subscribe((param: any) => {
                this.getPortfolioDetails(param['name'])
            });
    }

    getPortfolioDetails(slug: string) {
        this.ps.getPortfolioDetails(slug)
            .then(portfolioDetails => this.portfolioDetails = portfolioDetails)
    }

}
