import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sliderPipe',
    pure: false
})
export class SliderPipe implements PipeTransform {

    transform(value: any, from: number, to: number): any {

        if (!value) {
            return null;
        }

        if (!from || !to) {
            return value.slice(0, 2);
        }

        return value.slice(from, to);
    }

}
