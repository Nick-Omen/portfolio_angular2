import {Component, OnInit} from '@angular/core';
import {PortfolioThumb, Portfolio} from "./portfolio";
import {PortfolioService} from "./portfolio.service";
import {PortfolioThumbComponent} from '../portfolio-thumb/portfolio-thumb.component';
import {PortfolioCardComponent} from "../portfolio-card/portfolio-card.component";

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
    providers: [
        PortfolioThumbComponent,
        PortfolioCardComponent,
    ],
})
export class PortfolioComponent implements OnInit {


    portfolioThumbs: PortfolioThumb[] = [];
    portfolioItems: Portfolio[] = [];

    button: any = {
        cardsVisible: false,
        loading: false,
        title: 'Show cards'
    };

    constructor(private ps: PortfolioService) {
    }

    ngOnInit() {
        this.ps.getPortfolioThumbs()
            .then(portfolioThumbs => this.portfolioThumbs = portfolioThumbs)
    }

    toggleCards(): void {
        this.enableLoading();

        if (this.button.cardsVisible) {
            this.showThumbsLazy()
                .then(() => {this.disableLoading()});
        } else {
            this.showPortfoliosLazy()
                .then(() => {this.disableLoading()});
        }
        this.button.cardsVisible = !this.button.cardsVisible;
    }

    enableLoading(): void {
        this.button.loading = true;
        this.button.title = 'Loading';
    }

    disableLoading(): void {
        this.button.loading = false;
        this.button.title = this.button.cardsVisible ? 'Hide cards' : 'Show cards';
    }

    showPortfoliosLazy(): Promise<null> {

        return new Promise(resolve => {

            this.portfolioThumbs.forEach(thumb => {

                this.ps.getPortfolioById(thumb.id)
                    .then(portfolio => {
                        this.portfolioItems.push(portfolio);
                        this.portfolioThumbs.splice(this.portfolioThumbs.indexOf(thumb, 0), 1);
                        resolve();
                    })
            });
        })
    }

    showThumbsLazy(): Promise<null> {

        return new Promise(resolve => {

            this.ps.getPortfolioThumbs()
                .then(portfolioThumbs => {
                    this.portfolioItems = [];
                    this.portfolioThumbs = portfolioThumbs;
                    resolve();
                });
        })
    }
}
