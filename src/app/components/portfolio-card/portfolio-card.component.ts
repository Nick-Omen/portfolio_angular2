import {Component, OnInit, Input} from '@angular/core';
import {Work} from "../../admin/works/work";

@Component({
    selector: 'app-portfolio-card',
    templateUrl: './portfolio-card.component.html',
    styleUrls: ['./portfolio-card.component.sass']
})
export class PortfolioCardComponent implements OnInit {

    @Input() item: Work;

    constructor() {
    }

    ngOnInit() {
    }

}
