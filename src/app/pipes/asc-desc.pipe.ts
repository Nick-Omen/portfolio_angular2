import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ascDesc',
    pure: false
})
export class AscDescPipe implements PipeTransform {

    transform(values: Array<any>, sortBy: string, key: string) {

        if(typeof(values) == 'undefined' || typeof(key) != 'string') return values;

        switch (sortBy.toLowerCase()) {
            case 'asc':
                return values.sort((a, b) => new Number(a[key] > b[key]).valueOf());
            case 'desc':
                return values.sort((a, b) => new Number(a[key] < b[key]).valueOf());
            default:
                return values;
        }
    }
}
