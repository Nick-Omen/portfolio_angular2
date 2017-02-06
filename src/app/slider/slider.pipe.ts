import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sliderPipe',
    pure: false
})
export class SliderPipe implements PipeTransform {

    transform(value: any, from: number, to: number): any {

        if (!value) {
            return [];
        }

        if (value.length <= 2) {
            return value;
        }

        if (!from.toString() || !to.toString()) {
            return value.slice(0, 2);
        }

        return [value[from], value[to]];
    }

}
