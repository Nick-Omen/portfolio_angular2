import {Component, OnInit, Input} from '@angular/core';
import {Portfolio} from "../portfolio/portfolio";

@Component({
    selector: 'app-portfolio-card',
    templateUrl: './portfolio-card.component.html',
    styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent implements OnInit {

    @Input('portfolio') portfolio: Portfolio;
    cardPreview: string = '';

    constructor() {
    }

    ngOnInit() {
        this.cardPreview = this.portfolio.thumbnail ? this.portfolio.thumbnail : this.portfolio.logo;
    }

}
