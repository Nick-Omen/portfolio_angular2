import {Component, OnInit, Input} from '@angular/core';
import {PortfolioThumb} from "../portfolio/portfolio";

@Component({
    selector: 'app-portfolio-thumb',
    templateUrl: './portfolio-thumb.component.html',
    styleUrls: ['./portfolio-thumb.component.css']
})
export class PortfolioThumbComponent implements OnInit {

    @Input('portfolioThumb') portfolioThumb: PortfolioThumb;

    constructor() {
    }

    ngOnInit() {

    }

}
