import {Component, OnInit} from '@angular/core';
import {WorksService} from "../../admin/works/works.service";
import {Work} from "../../admin/works/work";

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

    portfolioItems: Work[] = [];

    constructor(private worksService: WorksService) {
    }

    ngOnInit() {
        this.worksService.get()
            .then(works => this.portfolioItems = works);
    }
}
