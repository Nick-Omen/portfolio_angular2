import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PortfolioFilterService} from "./portfolio-filter.service";
import {Technology} from "./technology";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'app-portfolio-filter',
    templateUrl: './portfolio-filter.component.html',
    styleUrls: ['./portfolio-filter.component.css']
})
export class PortfolioFilterComponent implements OnInit {

    technologies: Technology[];
    technologiesSelected: Array<string> = [];
    technologiesHidden: boolean = true;
    buttonTitle: string = 'Load filter';
    @Input() portfolioCount: number;
    @Output() onTechnologySelect: EventEmitter<any> = new EventEmitter();

    constructor(private filterService: PortfolioFilterService) {
    }

    ngOnInit() {
    }

    toggleTechnologies(): void {

        if (!this.technologies) {
            this.buttonTitle = 'Loading...';
            this.filterService.getTechnologies()
                .then(technologies => {
                    this.technologies = technologies;
                    this.buttonTitle = 'Hide';
                });
        }

        this.technologiesHidden = !this.technologiesHidden;
        this.buttonTitle = this.technologiesHidden ? 'Show' : 'Hide';
    }

    onTechnologyFilter(data) {

        const isTechSelected: boolean = this.technologiesSelected.indexOf(data.tech) !== -1;

        switch (data.type) {

            case 'add':
                if (data.tech === 'Show all') {
                    this.technologiesSelected.length = 0;
                    break;
                }
                if (!isTechSelected) {
                    this.technologiesSelected.push(data.tech)
                }
                break;

            case 'remove':
                if (isTechSelected) {
                    this.technologiesSelected.splice(this.technologiesSelected.indexOf(data.tech), 1);
                }
                break;
        }

        this.onTechnologySelect.emit(this.technologiesSelected);
    }
}
