import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SliderComponent} from "./slider.component";
import {SliderControlsComponent} from "./slider-controls/slider-controls.component";
import {SliderCardComponent} from "./slider-card/slider-card.component";
import {SliderPipe} from "./slider.pipe";

@NgModule({
    declarations: [
        SliderComponent,
        SliderControlsComponent,
        SliderCardComponent,
        SliderPipe,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SliderComponent,
    ],
    providers: []
})
export class SliderModule {
}
