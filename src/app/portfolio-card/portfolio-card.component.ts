import {Component, OnInit, Input, trigger, state, style, animate, transition} from '@angular/core';
import {Portfolio} from "../portfolio/portfolio";

@Component({
    selector: 'app-portfolio-card',
    templateUrl: './portfolio-card.component.html',
    styleUrls: ['./portfolio-card.component.css'],
    animations: [
        trigger('cardState', [
            state('in', style({
                transform: 'translateY(0)',
            })),
            transition('void => in', [
                style({transform: 'translateY(30%)'}),
                animate('180ms ease-in')
            ]),
            transition('in => void', [
                style({transform: 'translateY(30%)'}),
                animate('180ms ease-out')
            ]),
        ])
    ],
})
export class PortfolioCardComponent implements OnInit {

    @Input('portfolio') portfolio: Portfolio;
    cardPreview: string = '';
    cardState: string = 'in';

    constructor() {
    }

    ngOnInit() {
        this.cardPreview = this.portfolio.thumbnail ? this.portfolio.thumbnail : this.portfolio.logo;
    }

}
