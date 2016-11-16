import {Component, OnInit} from '@angular/core';
import {Portfolio} from "./portfolio";
import {PortfolioService} from "./portfolio.service";
import {PortfolioCardComponent} from "../portfolio-card/portfolio-card.component";
import {PortfolioFilterPipe} from "../portfolio-filter/portfolio-filter.pipe";

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {

    portfolioItems: Portfolio[] = [];
    technologiesFilterBy: Array<string> = [];
    portfolioItemCount: number = 0;
    filterPortfolioPipe: PortfolioFilterPipe = new PortfolioFilterPipe();

    constructor(private ps: PortfolioService) {
    }

    ngOnInit(): void {
        this.ps.getPortfolioItems()
            .then(portfolioItems => {
                this.portfolioItems = portfolioItems;
                this.portfolioItemCount = portfolioItems.length
            });
    }

    showThumbsLazy(): void {
    }

    showPortfoliosLazy(): void {
    }

    handleTechnologyFilter(technologiesFilterBy: Array<string>): void {
        this.technologiesFilterBy = technologiesFilterBy;
        this.portfolioItemCount = this.filterPortfolioPipe.transform(this.portfolioItems, technologiesFilterBy).length;
    }
}
