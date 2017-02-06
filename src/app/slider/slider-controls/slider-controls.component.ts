import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'app-slider-controls',
    templateUrl: './slider-controls.component.html',
    styleUrls: ['./slider-controls.component.sass']
})
export class SliderControlsComponent implements OnInit {

    slideIndexes: number[] = [];

    @Input() slidesNames: string[] = [];
    @Input() activeSlides: number[] = [];
    @Output() slide: EventEmitter<string | number> = new EventEmitter();

    ngOnInit() {
    }

    ngOnChanges(changes) {
        if (changes.slidesNames && changes.slidesNames.currentValue) {
            this.slideIndexes.length = 0;
            changes.slidesNames.currentValue.map((n, i) => this.slideIndexes.push(i));
        }
    }

    slideTo(name: string | number) {

        this.slide.emit(name);
    }
}
