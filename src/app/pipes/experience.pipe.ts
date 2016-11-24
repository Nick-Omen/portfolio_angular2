import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

    transform(value: string): string {
        const date = new Date(value);
        const now = new Date();

        const timeDiff = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if (isNaN(diffDays)) {
            return '-';
        }

        if (diffDays % 30 === diffDays) {
            return diffDays + " days";
        }
        else if (diffDays % 365 === diffDays) {
            return Math.floor(diffDays % 365 / 30) + ' month';
        }
        return Math.floor(diffDays / 365) + ' years and ' + Math.floor(diffDays % 365 / 30) + ' month';
    }
}
