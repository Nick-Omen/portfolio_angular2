import {Component, OnInit, Input} from '@angular/core';
import {SliderCard} from "./slider-card.model";

@Component({
    selector: 'app-slider-card',
    templateUrl: './slider-card.component.html',
    styleUrls: ['./slider-card.component.sass']
})


export class SliderCardComponent implements OnInit {

    @Input() slide: SliderCard = new SliderCard();
    @Input() instance: any;
    @Input() binding: any;

    constructor() {
    }

    ngOnInit() {
        for (let key in this.binding) {
            if (this.binding.hasOwnProperty(key)) {
                this.slide[this.binding[key]] = this.instance[key];
            }
        }
    }

}
