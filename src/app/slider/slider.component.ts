import {Component, OnInit, Input, HostBinding} from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

    slideStart: number = 0;
    slideFinish: number = 2;
    slideTotal: number = 0;
    slideStep: number = 2;
    initialized: boolean = false;

    @Input() slides: any[] = [];
    @Input() binding: any;

    constructor() {
    }

    ngOnChanges(changes) {
        if (changes.slides.currentValue) {
            this.slideTotal = changes.slides.currentValue.length;
            this.initialized = true;
        }
    }

    ngOnInit() {
        if (this.slides) {
            this.slideTotal = this.slides.length;
            this.initialized = true;
        }
    }

    changeSlide(direction: (string | number)) {

        if (direction === 'left') {

        } else if (direction === 'right') {
        }
        console.log('total: ', this.slideTotal);
        console.log('first: ', this.slideStart);
        console.log('last: ', this.slideFinish);
    }

}
