import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-slider-controls',
    templateUrl: './slider-controls.component.html',
    styleUrls: ['./slider-controls.component.sass']
})
export class SliderControlsComponent implements OnInit {

    @Output() slide: EventEmitter<string> = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
    }

    slideTo(direction: string) {

        this.slide.emit(direction);
    }
}
