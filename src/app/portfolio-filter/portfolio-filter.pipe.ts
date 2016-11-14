import {Pipe, PipeTransform} from '@angular/core';
import {Portfolio} from "../portfolio/portfolio";

@Pipe({
    name: 'portfolioFilter',
    pure: false
})
export class PortfolioFilterPipe implements PipeTransform {

    transform(portfolioItems: Portfolio[], technologies: Array<string>): Portfolio[] {

        if (technologies.length === 0) {
            return portfolioItems;
        }

        if (technologies.length === 1) {
            return portfolioItems.filter(item => item.technologies.indexOf(technologies[0]) >= 0)
        }

        return portfolioItems.filter(item =>
            technologies.every(tech => item.technologies.indexOf(tech) >= 0)
        );
    }

}
