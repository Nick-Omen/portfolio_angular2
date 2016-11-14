import {Component, OnInit} from '@angular/core';
import {Portfolio} from "./portfolio";
import {PortfolioService} from "./portfolio.service";
import {PortfolioCardComponent} from "../portfolio-card/portfolio-card.component";

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {

    portfolioItems: Portfolio[] = [];
    technologiesFilterBy: Array<string> = [];

    constructor(private ps: PortfolioService) {
    }

    ngOnInit(): void {
        this.ps.getPortfolioItems()
            .then(portfolioItems => this.portfolioItems = portfolioItems);
    }

    showThumbsLazy(): void {
    }

    showPortfoliosLazy(): void {
    }

    handleTechnologyFilter(technologiesFilterBy: Array<string>): void {
        this.technologiesFilterBy = technologiesFilterBy;
    }
}
