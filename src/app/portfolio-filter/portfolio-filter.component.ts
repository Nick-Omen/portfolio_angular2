import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PortfolioFilterService} from "./portfolio-filter.service";
import {Technology} from "./technology";

@Component({
    selector: 'app-portfolio-filter',
    templateUrl: './portfolio-filter.component.html',
    styleUrls: ['./portfolio-filter.component.css']
})
export class PortfolioFilterComponent implements OnInit {

    technologies: Technology[];
    technologiesSelected: Array<string> = [];
    @Output() onTechnologySelect: EventEmitter<any> = new EventEmitter();

    constructor(private filterService: PortfolioFilterService) {
    }

    ngOnInit() {

        this.filterService.getTechnologies()
            .then(technologies => this.technologies = technologies);
    }

    toggleTech(event) {

        const tech = event.target.getAttribute('data-tech');

        if (tech === null) {
            this.technologiesSelected.length = 0;
        } else {
            if (this.technologiesSelected.indexOf(tech) < 0) {
                this.technologiesSelected.push(tech);
            } else {
                this.technologiesSelected.splice(this.technologiesSelected.indexOf(tech), 1);
            }
        }

        this.onTechnologySelect.emit(this.technologiesSelected);
    }
}
