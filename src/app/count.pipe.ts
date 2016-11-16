import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'count'
})
export class CountPipe implements PipeTransform {

    transform(value: any): any {
        if(typeof(value) != 'object') {
            return 1;
        }
        return value.length;
    }

}
