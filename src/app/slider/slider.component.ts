import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

    slideStart: number = 0;
    slideFinish: number = 1;
    slideTotal: number = 0;
    slidesNames: string[] = [];
    activeSlides: number[] = [this.slideStart, this.slideFinish];
    initialized: boolean = false;

    @Input() slides: any[] = [];
    @Input() binding: any;

    constructor() {
    }

    ngOnChanges(changes) {
        if (changes.slides && changes.slides.currentValue) {
            this.slideTotal = changes.slides.currentValue.length;
            this.initialized = true;
            this.slidesNames.length = 0;
            for (const s of changes.slides.currentValue) {
                this.slidesNames.push(s.name);
            }
        }
    }

    ngOnInit() {
        if (this.slides) {
            this.slideTotal = this.slides.length;
            this.initialized = true;
        }
    }

    calcNext(current: number): number {
        if ((current + 1) >= this.slideTotal) {
            return 0;
        }
        return current + 1;
    }

    calcPrev(current: number): number {
        if (current <= 0) {
            return this.slideTotal - 1;
        }
        return current - 1;
    }

    changeSlide(value: (string | number)) {

        if (typeof(value) === "number"
            && value >= 0 && value < this.slideTotal) {
            this.slideStart = value;
            this.slideFinish = this.calcNext(value);
        }
        if (value === 'left') {
            this.slideStart = this.calcPrev(this.slideStart);
            this.slideFinish = this.calcPrev(this.slideFinish);
        } else if (value === 'right') {
            this.slideStart = this.calcNext(this.slideStart);
            this.slideFinish = this.calcNext(this.slideFinish);
        }
        this.activeSlides = [this.slideStart, this.slideFinish];
    }

}
